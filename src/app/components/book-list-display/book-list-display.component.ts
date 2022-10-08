import { Component, OnInit ,Input} from '@angular/core';
import { Item } from 'src/BookList';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { Books } from 'src/Books';

@Component({
  selector: 'app-book-list-display',
  templateUrl: './book-list-display.component.html',
  styleUrls: ['./book-list-display.component.css']
})
export class BookListDisplayComponent implements OnInit {

  @Input() bookList: Item[] | undefined= [];
  constructor(private booksService : BooksService) { }
  

  ngOnInit(): void {
  }

  postBook(event: any ,book : Item):void{
    console.log("method called!")
    event.preventDefault();
    const book_to_post:Books = this.booksService.converItemToBook(book)
    console.log(book_to_post)
    this.booksService.postBook(book_to_post).subscribe((response)=>{
      console.log(response);
    });
    

  }  


}
