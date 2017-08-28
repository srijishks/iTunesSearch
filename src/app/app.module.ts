import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { ResolutionPipe } from './resolution.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent,
    ResolutionPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
