import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlbumListComponent} from './component/album-list/album-list.component';
import {AlbumViewComponent} from './component/album-view/album-view.component';
import {AlbumEditComponent} from './component/album-edit/album-edit.component';
import {BandEditComponent} from './component/band-edit/band-edit.component';
import {BandListComponent} from './component/band-list/band-list.component';
import {BandViewComponent} from './component/band-view/band-view.component';

const routes: Routes = [
  {path: 'bands/create', component: BandEditComponent},
  {path: 'albums/create', component: AlbumEditComponent},
  {path: 'albums', component: AlbumListComponent},
  {path: 'albums/:id', component: AlbumViewComponent},
  {path: 'albums/:id/edit', component: AlbumEditComponent},
  {path: 'bands', component: BandListComponent},
  {path: 'bands/:id', component: BandViewComponent},
  {path: 'bands/:id/edit', component: BandEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
