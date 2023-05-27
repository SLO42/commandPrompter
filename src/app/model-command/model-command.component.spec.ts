import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCommandComponent } from './model-command.component';

describe('ModelCommandComponent', () => {
  let component: ModelCommandComponent;
  let fixture: ComponentFixture<ModelCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelCommandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
