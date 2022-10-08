
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Item } from 'src/BookList';
import {Books} from 'src/Books';


@Injectable({
	providedIn: 'root'
})
export class BooksService{
	constructor(private http: HttpClient) { }
	
	base_url:string = "http://localhost:8080/books";

	getToReadBooks():Observable<Books[]>{
		const url = this.base_url + "/unread_books";
		return this.http.get<Books[]>(url);
	}

	getReadBooks():Observable<Books[]>{
		const url = this.base_url + "/to_be_read_books";
		return this.http.get<Books[]>(url);
	}

	postBook(book : Books): Observable<Books>{
		const url = this.base_url + "/add";
		console.log("book: " + book.title);
		console.log("url: " + url);
		if(book.description) book.description = book.description.substring(0 , 100)
		const body = JSON.stringify(book);
    		const headers = new HttpHeaders()
    			.append(
      			'Content-Type',
      			'application/json'
   			 );
		console.log(body);
		return this.http.post<Books>(url , body , {headers: headers});
	}

	markRead(id : number): Observable<Books>{
		const url = this.base_url + `/change_status/${id}`; //id will be added here
		return this.http.get<Books>(url);
	}
	
	converItemToBook(book_to_convert : Item): Books{
		let to_return : Books = {
			"author": book_to_convert.volumeInfo.authors[0],
			"title": book_to_convert.volumeInfo.title,
			"description": book_to_convert.volumeInfo.description,
			"book_read": false,
			"publisher": book_to_convert.volumeInfo.publisher,
			id: undefined
		}
		return to_return;

	}

}