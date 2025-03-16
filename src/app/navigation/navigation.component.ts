import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks?.classList.toggle('active');
  }
}
