import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule, AppRoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginService } from './service/login.service';
import { ApiHandlerService } from './service/api-handler.service';
import { LoaderService } from './service/loader.service';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ApiInterceptor } from './interceptor/api.interceptor';
import { PaginationComponent } from './pagination/pagination.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AppRoutingComponent,
    LoadingSpinnerComponent,
    PaginationComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule

  ],
  providers: [LoginService, ApiHandlerService, LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
