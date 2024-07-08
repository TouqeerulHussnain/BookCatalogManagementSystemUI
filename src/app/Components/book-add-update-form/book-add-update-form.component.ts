import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../../Model/Book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-book-add-update-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './book-add-update-form.component.html',
  styleUrl: './book-add-update-form.component.scss'
})
export class BookAddUpdateFormComponent {


  bookForm!: FormGroup;
  async fetchFormData() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    console.log("FetchFormData");


    console.log("book form");
    let book1: Book = this.bookForm.value;
    console.log(book1);
    await firstValueFrom(this.http.post("https://localhost:7163/api/Book", book1, {
      headers
    }));

  }

  constructor(private fb: FormBuilder, private http: HttpClient) {

    this.bookForm = this.fb.nonNullable.group({
      title: ['', Validators.required],
      authorName: ['', Validators.required],
      publicationYear: ['', Validators.required],
      isbn: ['', [Validators.required, Validators.maxLength(13), Validators.minLength(13)]],
      genre: [''],
      tags: [''],
      chapters: [''],
      pages: [0, Validators.required]
    });

  }







}


