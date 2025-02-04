import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isShrinked = false;
  searchQuery = '';

  shrinkSearchBar() {
    if (this.searchQuery.trim() !== '') {
      this.isShrinked = true;
    }
  }

  checkSearchText() {
    if (this.searchQuery.trim() === '') {
      this.isShrinked = false;
    }
  }
}

