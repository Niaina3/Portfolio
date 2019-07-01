import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  event: any;
  navbarLink: any;
  liLinks: any;

  constructor() { }

  ngOnInit() {
  }

  scrollTo(section) {
    this.event =   document.querySelector('#' + section);
    this.event ? this.event.scrollIntoView({behavior: 'smooth', inline: 'nearest'}) : console.log(section);
    this.navbarLink = document.getElementById('navigation');
    this.liLinks = this.navbarLink.getElementsByClassName('nav-item');
    for (const liLink of this.liLinks) {
      liLink.addEventListener('click', function() {
        const current = document.getElementsByClassName('activeNavbar');
        if (current.length > 0) {
          current[0].className = current[0].className.replace(' activeNavbar', '');
        }
        this.className += ' activeNavbar';
      });
    }
  }

}
