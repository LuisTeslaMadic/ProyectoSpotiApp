import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 nuevasCanciones:any[] = [];
 loading:boolean ;

 error:boolean = false;
 mensajeError:string = '';

  constructor(private spotifyService:SpotifyService) { 

    this.loading = true;
     
     this.spotifyService.getNewReleases().subscribe(data=>{
         this.nuevasCanciones = data;
         this.loading = false;
     },(errorServicio)=>{
       this.loading = false;
       this.error = true;
      //  console.log(errorServicio.error.error.message)
       this.mensajeError = errorServicio.error.error.message;
     });
  }

  ngOnInit(): void {
   
  }

}
