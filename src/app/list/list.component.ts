import { Component, OnInit, EventEmitter, Input, Output,  OnChanges, SimpleChange } from '@angular/core';
import { MovieService } from '../movie.service';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ MovieService ]
})
export class ListComponent implements OnChanges  {
	movies:any;
	resultresult:boolean;
	 constructor( private _movielservice : MovieService) {}

 @Input('movie') movieName: string;
 @Output() onSearchComplete = new EventEmitter<string>();

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
  			let searchmovie= changes.movieName.currentValue;
		    		this._movielservice.searchmovie(searchmovie)
			      .subscribe(
	                       movies => {
	                       	this.movies = movies;
	                       	if(parseInt(this.movies.resultCount)<=0)
	                       		this.onSearchComplete.emit('noresult');
	                       	else {
	                       		this.onSearchComplete.emit('success');
	                       		this.resultresult = true;
	                       	}
	                       
	                       }, //Bind to view
	                        err => {
	                       	this.onSearchComplete.emit('failed');
	                         console.log(err);
	                        });
	}
}
