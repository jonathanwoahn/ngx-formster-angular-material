import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxFormsterAngularMaterialService } from './ngx-formster-angular-material.service';
import { NgModule } from '@angular/core';
import { FormInputComponent } from './form-input/form-input.component';
import { MatInputModule, MatSelectModule, MatAutocompleteModule, MatChipsModule, MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxFormsterModule, NGX_FORMSTER } from 'ngx-formster';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormAutocompleteComponent } from './form-autocomplete/form-autocomplete.component';
import { FormChipsComponent } from './form-chips/form-chips.component';
import { FormArrayComponent } from './form-array/form-array.component';

const COMPONENTS = [
  FormInputComponent,
  // FormSwitchComponent,
  // FormCheckboxComponent,
  FormTextareaComponent,
  FormSelectComponent,
  FormAutocompleteComponent,
  FormArrayComponent,
  FormChipsComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  entryComponents: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxFormsterModule,
    FlexLayoutModule,

    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: NGX_FORMSTER,
      useClass: NgxFormsterAngularMaterialService,
      multi: true,
    },
  ],
})
export class NgxFormsterAngularMaterialModule { }
