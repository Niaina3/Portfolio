import { Component, OnInit, HostListener } from '@angular/core';
import { CompetenceService } from '../../service/competence/competence.service';


@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {
  constructor(private competenceService: CompetenceService) { }
  competences: any;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.competenceService.getAll().subscribe(
      res => {
        this.competences = res;
      },
      err => err
    )
  }

}
