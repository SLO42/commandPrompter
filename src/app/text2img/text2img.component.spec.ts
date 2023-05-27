import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Text2imgComponent } from './text2img.component';

describe('Text2imgComponent', () => {
  let component: Text2imgComponent;
  let fixture: ComponentFixture<Text2imgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Text2imgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Text2imgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
