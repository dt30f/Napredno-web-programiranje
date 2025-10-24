import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    isLightTheme = false;
  constructor() {
    this.updateTheme();
    // sluša promene atributa data-theme na <html>
    const observer = new MutationObserver(() => this.updateTheme());
    observer.observe(document.documentElement, { attributes: true });
  }

  updateTheme() {
    this.isLightTheme = document.documentElement.getAttribute('data-theme') === 'light';
  }

}
