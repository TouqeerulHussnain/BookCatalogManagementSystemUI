import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddUpdateFormComponent } from './book-add-update-form.component';

describe('BookAddUpdateFormComponent', () => {
  let component: BookAddUpdateFormComponent;
  let fixture: ComponentFixture<BookAddUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookAddUpdateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookAddUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
