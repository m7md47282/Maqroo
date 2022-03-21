import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DefaultComponent } from './default.component';
import { BooksComponent } from 'src/app/books/books.component';


const routes: Routes = [
  {
    path: 'books',
    component: DefaultComponent,
    children: [
      {
        path:'',
        component: BooksComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DefaultModule { 
  
}
