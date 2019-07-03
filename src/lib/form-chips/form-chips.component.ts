import { map, takeUntil } from 'rxjs/operators';
import { COMMA, ENTER, TAB } from '@angular/cdk/keycodes';
import { BaseFormElementComponent } from 'ngx-formster';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatAutocomplete, MatChipInputEvent } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest, Subject } from 'rxjs';
import * as _ from 'lodash';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'lib-form-chips',
  templateUrl: './form-chips.component.html',
  styleUrls: ['./form-chips.component.css']
})
export class FormChipsComponent extends BaseFormElementComponent implements OnInit {
  @ViewChild('chipInput', { static: false }) inputValue: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  selected: any[] = [];
  separatorKeysCodes: number[] = [COMMA, ENTER, TAB];
  inputCtrl = new FormControl();

  filteredOptions$: Observable<any[]>;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.formGroup.get(this.config.key).valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => {
        if (!this.options.maxChips) { return; }
        if (value.length < this.options.maxChips) {
          this.inputCtrl.enable();
        } else {
          this.inputCtrl.disable();
        }
      });

    const input$ = this.inputCtrl.valueChanges;
    this.filteredOptions$ = combineLatest(input$, this.options.options$)
      .pipe(
        map(([search, values]: [string, any[]]) => {
          if (!search || typeof search !== 'string') { return values; }
          return _.chain(values)
            .filter(val => (val[this.options.labelProp] as string).toLowerCase().indexOf(search.toLowerCase()) > -1)
            .differenceBy(this.formGroup.get(this.config.key).value, this.options.valueProp)
            .value();
        }),
        map((values) => {
          return _.chain(values)
            .orderBy([this.options.labelProp], ['asc'])
            .take(10)
            .value();
        }),
      );
  }

  select(event: MatAutocompleteSelectedEvent): void {
    this.addValue(event.option.value);
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen && event.value) {
      const value = {};
      value[this.options.valueProp] = uuid();
      value[this.options.labelProp] = event.value;
      this.addValue(value);
    }
  }

  remove(value: any): void {
    const control = this.formGroup.controls[this.config.key].value;
    const index = control.findIndex(val => val[this.options.valueProp] === value[this.options.valueProp]);
    if (index === -1) { return; }
    control.splice(index, 1);
    this.formGroup.controls[this.config.key].setValue(control);
    if (this.options.onRemove) {
      this.options.onRemove(value, this.formGroup, this.config);
    }
  }

  private clearVal(): void {
    this.inputCtrl.setValue(null);
    this.inputValue.nativeElement.value = '';
  }

  private addValue(value: any): void {
    const val = this.formGroup.controls[this.config.key].value;
    this.formGroup.controls[this.config.key].setValue([...val, value]);
    this.clearVal();
  }
}
