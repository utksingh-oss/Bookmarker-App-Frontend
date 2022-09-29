import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToReadPageComponent } from './to-read-page.component';

describe('ToReadPageComponent', () => {
  let component: ToReadPageComponent;
  let fixture: ComponentFixture<ToReadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToReadPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToReadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
