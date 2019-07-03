import { map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { BaseFormElementComponent } from 'ngx-formster';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'lib-form-autocomplete',
  templateUrl: './form-autocomplete.component.html',
  styleUrls: ['./form-autocomplete.component.css']
})
export class FormAutocompleteComponent extends BaseFormElementComponent implements OnInit {

  filteredOptions$: Observable<any[]>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    const control$ = this.formGroup.controls[this.config.key].valueChanges;
    this.filteredOptions$ = combineLatest(control$, this.options.options$)
      .pipe(
        map(([search, values]: [string, any[]]) => {
          if (!search || typeof search !== 'string') { return values; }
          return values
            .filter(val => {
              return (val[this.options.labelProp] as string).toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
        }),
        map((values) => {
          return _.chain(values)
            .orderBy([this.options.labelProp], ['asc'])
            .take(10)
            .value();
        }),
      );
  }

  displayFn(value: object): string | undefined {
    if (!value) { return; }
    return value[this.options.labelProp];
  }
}
