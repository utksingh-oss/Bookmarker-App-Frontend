import {Component , OnInit} from '@angular/core';
import {BookListService} from 'src/app/services/book-list.service';
import {BookList, Item} from 'src/BookList';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})




export class MainPageComponent{
	list?: Item[];
	title:string = "";
	author: string = "";
	
	constructor(private bookListService : BookListService){}
	
	handleSubmit(){
		this.bookListService.getBookList(this.title , this.author).subscribe((response) => {
		console.log(response);
		this.list = response.items;
	})
  }
}
