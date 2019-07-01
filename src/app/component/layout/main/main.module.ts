import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from '../../../app.component';
import { MainComponent } from '../../layout/main/main.component';
import { AccueilComponent } from '../../accueil/accueil.component';
import { AproposComponent } from '../../apropos/apropos.component';
import { PortfolioComponent } from '../../portfolio/portfolio.component';
import { CompetenceComponent } from '../../competence/competence.component';
import { ContactComponent } from '../../contact/contact.component';

@NgModule({
  declarations: [
    MainComponent,
    AccueilComponent,
    AproposComponent,
    PortfolioComponent,
    CompetenceComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    MainComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, 
    NO_ERRORS_SCHEMA
  ]
})
export class MainModule { }
