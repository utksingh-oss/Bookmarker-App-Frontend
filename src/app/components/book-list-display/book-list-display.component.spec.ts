import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListDisplayComponent } from './book-list-display.component';

describe('BookListDisplayComponent', () => {
  let component: BookListDisplayComponent;
  let fixture: ComponentFixture<BookListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
