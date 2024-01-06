import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, MatIconModule, CommonModule, NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showNavMenu: boolean = false;

  faInstagram = faInstagram;
  constructor(
    private router: Router) {}

    home(): void {
      this.router.navigateByUrl('home');
      this.showNavMenu = false;
    }

    about(): void {
      this.router.navigateByUrl('about');
      this.showNavMenu = false;
    }

    activities(): void {
      this.router.navigateByUrl('activities');
      this.showNavMenu = false;
    }

    prices(): void {
      this.router.navigateByUrl('prices');
      this.showNavMenu = false;
    }

    booking(): void {
      this.router.navigateByUrl('booking');
      this.showNavMenu = false;
    }

    contact(): void {
      this.router.navigateByUrl('contact');
      this.showNavMenu = false;
    }

    gallery(): void {
      this.router.navigateByUrl('gallery');
      this.showNavMenu = false;
    }

    navMenu(): void {
      this.showNavMenu = true;
    }

    closeMenu(): void {
      this.showNavMenu = false;
    }
}
