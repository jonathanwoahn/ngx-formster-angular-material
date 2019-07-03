import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormArrayComponent as ArrayComponent, NgxFormsterElementConfig } from 'ngx-formster';


@Component({
  selector: 'lib-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent extends ArrayComponent {

  getConfig(index: number): NgxFormsterElementConfig {
    return {
      ...this.config,
      type: 'formGroup',
      value: this.config.value[index] as any || undefined,
    };
  }
}
