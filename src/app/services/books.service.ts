
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
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
		const body = JSON.stringify(book);
    		const headers = new HttpHeaders()
    			.append(
      			'Content-Type',
      			'application/json'
   			 );
		return this.http.post<Books>(url , body , {headers: headers});
	}

	markRead(id : number): Observable<Books>{
		const url = this.base_url + `/change_status/${id}`; //id will be added here
		return this.http.get<Books>(url);
	}
	
	

}