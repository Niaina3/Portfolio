import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../service/portfolio/portfolio.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolios: any; 

  constructor(private portfolioservice: PortfolioService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.portfolioservice.getAll().subscribe(
      res => {
        this.portfolios = res;
      },
      err => err
    )
  }

}
