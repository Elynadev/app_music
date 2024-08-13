import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { DetailAlbumComponent } from './detail-album/detail-album.component';
import { TitledetailComponent } from './titledetail/titledetail.component';

const routes: Routes = [
{path:'', redirectTo:'/home' , pathMatch:'full'},
{path:'home', component: AlbumsComponent},
{path:'albums', component: AlbumsComponent},
{path:'detail', component: DetailAlbumComponent},
{path:'info/:id', component: TitledetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
