import { Component } from '@angular/core';
import { AlbumInterface } from '../album-interface';
import { AlbumListInterface } from '../album-list-interface';
import { AlbumServiceService } from '../album-service.service';
import { AlbumlistServiceService } from '../albumlist-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-titledetail',
  templateUrl: './titledetail.component.html',
  styleUrl: './titledetail.component.css'
})
export class TitledetailComponent {
  albums?:AlbumInterface[];
  lists?:AlbumListInterface[];
albumsId?:string;
album?:any;

  constructor (
    private AlbumService:AlbumServiceService,
    private route:ActivatedRoute,
    private albumlistService:AlbumlistServiceService){};
  ngOnInit(): void {
    
    // this.albums=this.AlbumService.getalbums();
    console.log(this.albumsId= this.route.snapshot.paramMap.get('id') || '');
    console.log(this.albumsId);
    console.log(this.AlbumService.getalbum(this.albumsId));
    this.album = this.AlbumService.getalbum(this.albumsId);
   console.log(this.album)
   
  }
  show(){
  
  }
}