import { Component } from '@angular/core';
import { Day5Service } from 'src/app/day5.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-artform',
  templateUrl: './artform.component.html',
  styleUrls: ['./artform.component.css']
})
export class ArtformComponent
 {
  constructor(private router:Router, private day5 : Day5Service){}
  artform=this.day5.giveData
 

  
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/single']);
  }

}
