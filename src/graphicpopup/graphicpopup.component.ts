import { Component, Inject, VERSION } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './graphicpopup.component.html',
    styleUrls: ['./graphicpopup.component.css']
})
export class GraphicpopupComponent {
    currentHours = new Date().getHours();
    greet_message = "";
    constructor(public dialogRef: MatDialogRef<GraphicpopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private activateroute: ActivatedRoute) { }

    closeDialog(){
        this.dialogRef.close();
    }

}


