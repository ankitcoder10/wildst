import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router'
import { ProjectComponent } from 'src/project/project.component';


@Component({
  templateUrl: './team.component.html',
  styleUrls: [ './team.component.css' ],  
  })
export class TeamComponent  {
  constructor(public dialog: MatDialog,
    private activatedroute:ActivatedRoute)
  {}
  openDialog(){
    this.dialog.open(ProjectComponent,{
      width: "800px",
      height: "500px"
    });
  }
}

