import { Component, OnInit, HostListener, Inject, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common/';
import { NavigationService } from '../../../service/navigation/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('navbar') navbar: ElementRef<any>;

  active = false;
  sections = [];
  element: any;
  lis: any;
  id = false;
  scrollId;
  menu: any;
  liLinks: any;
  windowScrolled: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.element = document.querySelector('#navbar');
    this.lis = this.element.getElementsByClassName('nav-item');

    for (const li of this.lis) {
      this.sections.push(li.classList[li.classList.length - 1]);
    }

    this.getListMenu();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const scrollTop = window.pageYOffset + (window.innerHeight) / 2;
    if (window.pageYOffset > 20) {
      const element = document.getElementById('navbar');
      const firstElement = element.firstElementChild;
      firstElement.classList.add('text-dark');
      firstElement.classList.add('white');
    } else {
      const element = document.getElementById('navbar');
      const firstElement = element.firstElementChild;
      firstElement.classList.remove('text-dark');
      firstElement.classList.remove('white');
    }

    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }

    for (const section of this.sections) {
      if (scrollTop > document.getElementById(section).offsetTop) {
        this.scrollId = document.getElementById(section).getAttribute('id');
      }
    }

    if (this.scrollId !== this.id) {
      for (const li of this.lis) {
        li.classList.remove('activeNavbar');
      }

      this.element.querySelector('.' + this.scrollId).classList.add('activeNavbar');
      this.id = this.scrollId;
    }
  }

  scrollTo(section) {
    const event =   document.querySelector('#' + section);
    event ? event.scrollIntoView({behavior: 'smooth', inline: 'nearest'}) : console.log(section);
    const navbarLink = document.getElementById('navigation');
    this.liLinks = navbarLink.getElementsByClassName('nav-item');
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

  scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

  getListMenu() {
    this.navigationService.getListMenu().subscribe(
      res => {
        this.menu = res;
      },
      err => err
    )
  }
}
