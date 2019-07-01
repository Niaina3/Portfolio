import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/layout/navigation/navigation.component';
import { MainModule } from './component/layout/main/main.module';
import { FooterComponent } from './component/layout/footer/footer.component';

import { NavigationService } from './service/navigation/navigation.service';
import { MainServiceModule } from './component/layout/main/main.service.module';
import { FooterService } from './service/footer/footer.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MainModule,
    MainServiceModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
  ],
  providers: [
    NavigationService,
    FooterService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, 
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
