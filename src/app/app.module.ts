import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ToReadPageComponent } from './components/to-read-page/to-read-page.component';
import { ReadPageComponent } from './components/read-page/read-page.component';
import { BookListDisplayComponent } from './components/book-list-display/book-list-display.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ToReadPageComponent,
    ReadPageComponent,
    BookListDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
