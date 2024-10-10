import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOptionsComponent } from './service-options.component';

describe('ServiceOptionsComponent', () => {
  let component: ServiceOptionsComponent;
  let fixture: ComponentFixture<ServiceOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOptionsComponent]
    });
    fixture = TestBed.createComponent(ServiceOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
