import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() { }
  @Output() onSearch = new EventEmitter<string>();
	movie: string;

 search(movie: string) {
 	this.movie = movie;
    this.onSearch.emit(this.movie);
  }
}
