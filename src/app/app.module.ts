import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { HearderComponent } from './hearder/hearder.component';
import { DetailAlbumComponent } from './detail-album/detail-album.component';
import { RouterModule } from '@angular/router';
import { TitledetailComponent } from './titledetail/titledetail.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    HearderComponent,
    DetailAlbumComponent,
    TitledetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
