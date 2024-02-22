import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { BookReadComponent } from './book-read/book-read.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookRetriveComponent } from './book-retrive/book-retrive.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BookComponent,
    BookReadComponent,
    ContactUsComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    AddBookComponent,
    UpdateBookComponent,
    BookUpdateComponent,
    BookAddComponent,
    BookRetriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
