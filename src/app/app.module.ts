import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './component/app/app.component';
import { AlbumEditComponent } from './component/album-edit/album-edit.component';
import { AlbumListComponent } from './component/album-list/album-list.component';
import { AlbumViewComponent } from './component/album-view/album-view.component';
import { BandListComponent } from './component/band-list/band-list.component';
import { BandEditComponent } from './component/band-edit/band-edit.component';
import { BandViewComponent } from './component/band-view/band-view.component';
import {AlbumService} from './service/album.service';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AlbumEditComponent,
    AlbumListComponent,
    AlbumViewComponent,
    BandListComponent,
    BandEditComponent,
    BandViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
