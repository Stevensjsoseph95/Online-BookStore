import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {PathNotFoundComponent } from './components/path-not-found/path-not-found.component'

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './services/book.service';

const routes: Routes=[
{path: 'books',component: BookListComponent},
{path: 'category/:id',component: BookListComponent},
{path: '',redirectTo:'/books',pathMatch:'full'},
{path: '**',component: PathNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PathNotFoundComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
