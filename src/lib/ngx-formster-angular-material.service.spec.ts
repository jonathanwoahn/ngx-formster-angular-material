import { TestBed } from '@angular/core/testing';

import { NgxFormsterAngularMaterialService } from './ngx-formster-angular-material.service';

describe('NgxFormsterAngularMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFormsterAngularMaterialService = TestBed.get(NgxFormsterAngularMaterialService);
    expect(service).toBeTruthy();
  });
});
