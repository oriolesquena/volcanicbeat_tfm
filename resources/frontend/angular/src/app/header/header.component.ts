import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faInstagram = faInstagram;
  constructor(
    private router: Router) {}

    home(): void {
      this.router.navigateByUrl('home');
    }

    about(): void {
      this.router.navigateByUrl('about');
    }

    prices(): void {
      this.router.navigateByUrl('prices');
    }

    contact(): void {
      this.router.navigateByUrl('contact');
    }
}
