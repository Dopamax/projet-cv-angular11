import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interets',
  templateUrl: './interets.component.html',
  styleUrls: ['./interets.component.css']
})
export class InteretsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nbr=[1,0];

  icone=["",""];
  intitule=["Fitness","Kick-boxing"];
  photo_ecole=[];
  interets:string[][]=[this.icone,this.intitule];
}
