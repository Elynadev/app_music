import { Component, OnInit } from '@angular/core';
import { AlbumServiceService } from '../album-service.service';
import { AlbumInterface } from '../album-interface';
import { AlbumlistServiceService } from '../albumlist-service.service';
import { AlbumListInterface } from '../album-list-interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums?:AlbumInterface[];
  lists?:AlbumListInterface[];
  constructor (private AlbumService:AlbumServiceService,
    private albumlistService:AlbumlistServiceService){};
  ngOnInit(): void {
    
    this.albums=this.AlbumService.getalbums();
  }
onSee(id:number){
  console.log('bonjour')
}
}
