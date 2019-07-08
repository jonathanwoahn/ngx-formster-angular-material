import { FormChipsComponent } from './form-chips/form-chips.component';
import { FormInputComponent } from './form-input/form-input.component';
import { NgxFormsterComponentProvider } from 'ngx-formster';
import { Injectable } from '@angular/core';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormAutocompleteComponent } from './form-autocomplete/form-autocomplete.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormSwitchComponent } from './form-switch/form-switch.component';

@Injectable({
  providedIn: 'root'
})
export class NgxFormsterAngularMaterialService extends NgxFormsterComponentProvider {
  constructor() {
    super();
    this.library = [
      {
        type: 'input',
        component: FormInputComponent,
      },
      {
        type: 'chips',
        component: FormChipsComponent,
      },
      {
        type: 'switch',
        component: FormSwitchComponent,
      },
      {
        type: 'checkbox',
        component: FormCheckboxComponent,
      },
      {
        type: 'select',
        component: FormSelectComponent,
      },
      {
        type: 'textarea',
        component: FormTextareaComponent,
      },
      {
        type: 'autocomplete',
        component: FormAutocompleteComponent,
      },
      {
        type: 'formArray',
        component: FormArrayComponent,
      },
    ];
  }
}
