import { BaseFormElementComponent } from 'ngx-formster';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent extends BaseFormElementComponent {

  constructor() {
    super();
  }
}
