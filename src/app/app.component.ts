import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBoxComponent } from "./Components/search-box/search-box.component";
import { BookListComponent } from "./Components/book-list/book-list.component";
import { BookAddUpdateFormComponent } from "./Components/book-add-update-form/book-add-update-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, SearchBoxComponent, BookListComponent, BookAddUpdateFormComponent]
})
export class AppComponent {
  title = 'BookCatalogManagementSystemUI';
}
