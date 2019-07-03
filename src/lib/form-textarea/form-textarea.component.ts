import { BaseFormElementComponent } from 'ngx-formster';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./form-textarea.component.css']
})
export class FormTextareaComponent extends BaseFormElementComponent {

  constructor() {
    super();
  }
}
