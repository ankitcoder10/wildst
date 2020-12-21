import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {HomeComponent} from '../home/home.component';
import {TeamComponent} from '../team/team.component';
import {ProjectComponent} from '../project/project.component';
import {WorkComponent} from '../work/work.component';
import { ServicesComponent } from '../services/services.component';
import { AppComponent } from './app.component';
import {GraphicsComponent} from '../work/graphics.component';
import {VideoComponent} from '../work/video.component';
import {MotionComponent} from '../work/motion.component';
import {GraphicpopupComponent} from '../graphicpopup/graphicpopup.component';
//import {} from './app-'


import { routing } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ AppComponent, HomeComponent, TeamComponent, WorkComponent, ServicesComponent, ProjectComponent, GraphicsComponent,VideoComponent,MotionComponent,GraphicpopupComponent],
  imports:      [ BrowserModule, BrowserAnimationsModule, routing, NgbModule, MatDialogModule],
  entryComponents: [ProjectComponent],
  bootstrap:    [ AppComponent ]
})  
export class AppModule { }
