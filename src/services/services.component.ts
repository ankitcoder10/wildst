import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router'
import { ProjectComponent } from 'src/project/project.component';


@Component({
  templateUrl: './services.component.html',
  styleUrls: [ './services.component.css' ]  
  })
export class ServicesComponent  {
  constructor(public dialog: MatDialog,
    private activatedroute:ActivatedRoute)
  {}
  openDialog(){
    this.dialog.open(ProjectComponent,{
      width: "400px",
      height: "396px"
    });
  }
}

