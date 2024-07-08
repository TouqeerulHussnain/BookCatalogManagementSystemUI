import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../Model/Book';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  books: Book[] = [

  ];

  constructor(private http: HttpClient) {


  }
  async ngOnInit() {
    console.log("Just calling the ngOnInit")
    this.http.get('https://localhost:7163/api/Book')

      .subscribe(response => {

        console.log(response);
        this.books = response as Book[]
      });
  }

  private async getContacts(): Promise<any> {
    console.log("getContacts called");
    var result = this.http.get("https://localhost:7163/api/Book");
    console.log(result);
    return await firstValueFrom(result);
  }

}
