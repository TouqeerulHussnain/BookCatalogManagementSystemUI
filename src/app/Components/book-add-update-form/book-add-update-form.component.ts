import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../Model/Book';

@Component({
  selector: 'app-book-add-update-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './book-add-update-form.component.html',
  styleUrl: './book-add-update-form.component.scss'
})
export class BookAddUpdateFormComponent {
  FetchFormData() {
    console.log("FetchFormData");
    // let book = <Book>{
    //   Title: this.bookForm.value.bookTitle,
    //   AuthorName: this.bookForm.value.authorName,
    //   PublicationDate: this.bookForm.value.publicationDate,
    //   ISBN: this.bookForm.value.isbn,
    //   PageCount: this.bookForm.value.pageCount,
    // }

    // console.log(book);
  }



  bookForm = new FormGroup({
    bookTitle: new FormControl<string>('', Validators.required),
    authorName: new FormControl<string>('', Validators.required),
    publicationDate: new FormControl<string>("", [Validators.required,]),
    isbn: new FormControl<string>("", [
      Validators.required, Validators.maxLength(13),
      Validators.minLength(13),
    ]),
    genre: new FormControl<[string]>([""]),
    tags: new FormControl<[string]>([""]),
    pageCount: new FormControl<number>(0)
  });




}


