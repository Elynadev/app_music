import { Component, input, OnInit } from '@angular/core';
import { AlbumInterface } from '../album-interface';
import { AlbumServiceService } from '../album-service.service';
import { AlbumlistServiceService } from '../albumlist-service.service';
import { AlbumListInterface } from '../album-list-interface';

@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrl: './detail-album.component.css'
})
export class DetailAlbumComponent implements OnInit {

  albums?:AlbumInterface[];
  lists?:AlbumListInterface[];
  constructor (private AlbumService:AlbumServiceService,
    private albumlistService:AlbumlistServiceService
  ){};
  liste(){
  
  };


  ngOnInit(): void {
    
    this.albums=this.AlbumService.getalbums();
    this.lists=this.albumlistService.getlist();
  }
  // afficherDetails(id:number){
  //   const chanson = this.albumlistService.getListbyId;
  //   if (chanson){
  //     return chanson;
  //   }
  }

