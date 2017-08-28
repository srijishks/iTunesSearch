import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ Globals ]
})
export class AppComponent {
	movie: any;
	message:string;
	listshow:boolean;

@ViewChild(HeaderComponent) headerComponent: HeaderComponent;
@ViewChild(ListComponent) listComponent: ListComponent;

onSearch(){
	this.movie = this.headerComponent.movie;
	if(this.movie!=undefined && this.movie.trim()!=""){
		this.message = "loading";
		this.listshow = true;
	}else{
		this.message = "novalue";
		this.listshow = false;
	}
}

onSearchComplete(status){
	if(status == "failed"){
		console.log(status)	;
		this.message = "failed";
		this.listshow = false;
	}else if(status == "success"){
		console.log(status)	;
		this.message = "success";
		this.listshow = true;

	}else if(status == "noresult"){
		this.message = "noresult";	
		this.listshow = false;

	}
 }

}
