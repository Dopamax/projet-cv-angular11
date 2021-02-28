import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nbr=[1,0];
  annee=["2017-2019","2019-2020"];
  ecole=["OFPPT ISTA","ISGA RABAT"];
  intitule=["Diplome téchnicien spécialisé en développement informatique (DTS)","License en ingénieurie des systèmes d'informations"];
  photo_ecole=[];
  formation:string[][]=[this.annee,this.ecole,this.intitule];
}
