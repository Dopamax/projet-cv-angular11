import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    titre="menu is updated!";
    liste=['CV','Portfolio','Blog','Contact'];
  getTitre(){
    return this.titre;
  }

}
