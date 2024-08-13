import { Injectable } from '@angular/core';
import { AlbumListInterface } from './album-list-interface';
import { ALBUM_LISTS, ALBUMS } from '../mock-album';
import { AlbumInterface } from './album-interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumlistServiceService {

  constructor() { }
  albums:AlbumInterface[]=ALBUMS;
  albums_list:AlbumListInterface[]=ALBUM_LISTS;

  getlist():AlbumListInterface[]{
    return this.albums_list;
  }

  getListbyId(id:string){
 
   return this.albums_list.find((element)=> element.id===id);
  }
}
// albums:AlbumInterface[]=ALBUMS;
//   getalbums():AlbumInterface[]{
//     return this.albums;
//   }