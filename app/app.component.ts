import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PopcornPicks';
  showMovies = false;
  toggleShowMovies() {
    this.showMovies = !this.showMovies;
  }
}
