import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentSampleComponent } from './dynamic-component-sample.component';

describe('DynamicComponentSampleComponent', () => {
  let component: DynamicComponentSampleComponent;
  let fixture: ComponentFixture<DynamicComponentSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponentSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
