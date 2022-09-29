import { Component, OnInit ,Input} from '@angular/core';
import { Item } from 'src/BookList';

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

  


}
