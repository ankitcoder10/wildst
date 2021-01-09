import { Component, Inject, VERSION } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './videopopup.component.html',
    styleUrls: ['./videopopup.component.css']
})
export class VideopopupComponent {
    currentHours = new Date().getHours();
    greet_message = "";
    constructor(public dialogRef: MatDialogRef<VideopopupComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private activateroute: ActivatedRoute) { }

    closeDialog(){
        this.dialogRef.close();
    }

}


