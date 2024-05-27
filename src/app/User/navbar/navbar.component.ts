import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuActive: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleMenu() {
    this.menuActive = !this.menuActive;
    const navLinks = this.el.nativeElement.querySelector('.menu-links');
    if (this.menuActive) {
      this.renderer.setStyle(navLinks, 'display', 'flex');
    } else {
      this.renderer.setStyle(navLinks, 'display', 'none');
    }
  }
}
