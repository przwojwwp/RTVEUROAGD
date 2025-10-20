import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from '../nav/mobileMenu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
