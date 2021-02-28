import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenuinformationpersonnel',
  templateUrl: './contenuinformationpersonnel.component.html',
  styleUrls: ['./contenuinformationpersonnel.component.css']
})
export class ContenuinformationpersonnelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nom_prenom="BEZAI M";
  YearOfBirth=1991;
  age=new Date().getFullYear()-this.YearOfBirth;
  email="bezai.med@gmail.com";
  github="https://github.com/Dopamax";
  tel="+2120606060606";
  profil="Développeur web/mobile fullstack"

}
