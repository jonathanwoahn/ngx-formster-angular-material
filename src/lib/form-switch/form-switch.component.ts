import { Component, OnInit } from '@angular/core';
import { BaseFormElementComponent } from 'ngx-formster';

@Component({
  selector: 'lib-form-switch',
  templateUrl: './form-switch.component.html',
  styleUrls: ['./form-switch.component.css']
})
export class FormSwitchComponent extends BaseFormElementComponent {

  constructor() {
    super();
  }

}
