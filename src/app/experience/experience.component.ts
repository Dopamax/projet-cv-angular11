import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nbr=[0];
  annee=["Févr-2019 à mars-2019"];
  ecole=["AXA Assurance"];
  intitule=["Stage de découverte"];
  photo_ecole=[];
  experience:string[][]=[this.annee,this.ecole,this.intitule];
}
