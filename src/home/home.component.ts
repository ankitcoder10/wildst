import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Router} from '@angular/router';
import { ProjectComponent } from 'src/project/project.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ],
  })
export class HomeComponent  {
  name = 'Angular ' + VERSION.major;
  constructor(public dialog: MatDialog,
    private router:Router)
  {}
  showDetails()
  {
    //this.router.navigateByUrl('hello');
  }

  openDialog(){
    this.dialog.open(ProjectComponent,{
      width: "800px",
      height: "500px"
    });
  }

}