import { Component, OnInit ,Input} from '@angular/core';
import { Item } from 'src/BookList';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-book-list-display',
  templateUrl: './book-list-display.component.html',
  styleUrls: ['./book-list-display.component.css']
})
export class BookListDisplayComponent implements OnInit {

  @Input() bookList: Item[] | undefined= [];
  constructor() { }

  ngOnInit(): void {
  }

  postBook(event: any ,book : Item):void{
    event.preventDefault();
    console.log(book);
  }  


}
