import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Books } from 'src/Books';

@Component({
  selector: 'app-to-read-page',
  templateUrl: './to-read-page.component.html',
  styleUrls: ['./to-read-page.component.css']
})
export class ToReadPageComponent implements OnInit {

  to_read_list:Books[] = [];

  constructor(private booksService : BooksService) { }

  ngOnInit(): void {
    this.booksService.getToReadBooks().subscribe((response) => {
      console.log(response);
      this.to_read_list = response;
    })
  }

}
