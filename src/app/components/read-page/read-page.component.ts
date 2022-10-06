import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Books } from 'src/Books';

@Component({
  selector: 'app-read-page',
  templateUrl: './read-page.component.html',
  styleUrls: ['./read-page.component.css']
})
export class ReadPageComponent implements OnInit {
  read_list:Books[] = [];

  constructor(private booksService : BooksService) { }

  ngOnInit(): void {
    this.booksService.getReadBooks().subscribe((response) => {
      console.log(response);
      this.read_list = response;
    })
  }
}
