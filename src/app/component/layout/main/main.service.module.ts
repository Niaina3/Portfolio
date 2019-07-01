import { NgModule } from '@angular/core';
import { AccueilService } from '../../../service/accueil/accueil.service';
import { AproposService } from '../../../service/apropos/apropos.service';
import { PortfolioService } from '../../../service/portfolio/portfolio.service';
import { CompetenceService } from '../../../service/competence/competence.service';
import { ContactService } from '../../../service/contact/contact.service';

@NgModule({
    providers: [
        AccueilService,
        AproposService,
        PortfolioService,
        CompetenceService,
        ContactService
    ]
})

export class MainServiceModule { }