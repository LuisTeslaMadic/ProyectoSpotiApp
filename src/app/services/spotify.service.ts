import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('Servicio de spotify')
  }
 //El servicio necesita un token para listar las canciones
  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBZ9QHGaAvMhmUo9dZWdzEoe1M65awZE3RLHjMK1VYCmuRn5bKzqvxE6B-DmyMkWavFja1uReiZo_dvya0'
     });
     return this.http.get(url,{headers});
  }

  getNewReleases():Observable<any>{
     return this.getQuery('browse/new-releases?limit=20').pipe(
       map((data:any) =>data.albums.items)
     );
  }
  
  getArtistas(termino:string): Observable<any>{
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
        map((data:any)=>{
          return data['artists'].items;
        })
      );
  }

  getArtista(id:string): Observable<any>{
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string): Observable<any>{
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe(
      map((data:any)=>{
        return data['tracks'];
      })
    );;
  }

}
