import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InformationsPersonnelComponent } from './informationspersonnel/informationspersonnel.component';
import { MenuComponent } from './menu/menu.component';
import { PhotopersonnelComponent } from './photopersonnel/photopersonnel.component';
import { ContenuinformationpersonnelComponent } from './contenuinformationpersonnel/contenuinformationpersonnel.component';
import { FormationComponent } from './formation/formation.component';
import { MacarteComponent } from './macarte/macarte.component';
import { ExperienceComponent } from './experience/experience.component';
import { InteretsComponent } from './interets/interets.component';


@NgModule({
  declarations: [
    AppComponent,
    InformationsPersonnelComponent,
    MenuComponent,
    PhotopersonnelComponent,
    ContenuinformationpersonnelComponent,
    FormationComponent,
    MacarteComponent,
    ExperienceComponent,
    InteretsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
