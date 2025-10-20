import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobileMenu.component.html',
  styleUrls: ['./mobileMenu.component.scss'],
})
export class MobileMenuComponent {
  @Output() close = new EventEmitter<void>();

  closeMenu() {
    this.close.emit();
  }

  navigate() {
    this.close.emit();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
