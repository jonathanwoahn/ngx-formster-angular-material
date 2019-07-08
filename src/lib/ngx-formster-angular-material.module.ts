import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxFormsterAngularMaterialService } from './ngx-formster-angular-material.service';
import { NgModule } from '@angular/core';
import { FormInputComponent } from './form-input/form-input.component';
import { MatInputModule, MatSelectModule, MatAutocompleteModule, MatChipsModule, MatIconModule, MatSlideToggleModule, MatCheckboxModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxFormsterModule, NGX_FORMSTER } from 'ngx-formster';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormAutocompleteComponent } from './form-autocomplete/form-autocomplete.component';
import { FormChipsComponent } from './form-chips/form-chips.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { HighlightPipe } from './form-autocomplete/highlight.pipe';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormSwitchComponent } from './form-switch/form-switch.component';

const COMPONENTS = [
  FormInputComponent,
  FormSwitchComponent,
  FormCheckboxComponent,
  FormTextareaComponent,
  FormSelectComponent,
  FormAutocompleteComponent,
  FormArrayComponent,
  FormChipsComponent,
];

@NgModule({
  declarations: [
    HighlightPipe,
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
    MatSlideToggleModule,
    MatCheckboxModule,
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
