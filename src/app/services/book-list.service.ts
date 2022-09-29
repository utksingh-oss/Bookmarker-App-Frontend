import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BookList} from 'src/BookList';


@Injectable({
	providedIn: 'root'
})
export class BookListService{
	constructor(private http: HttpClient) { }
	
	getBookList(title:string , author: string):Observable<BookList>{
    const key = "AIzaSyB2-z2VLc8awilhBxdb2DlAO2NhdqZ0mOk";
    let title_new = title.split(" ").join("+");
    let new_author= author.split(" ").join("+");
		const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title_new}&inauthor:${new_author}&key=${key}`; //add author and title 
		return this.http.get<BookList>(url);
	}
}

