import { Component, Inject, VERSION } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent {
    currentHours = new Date().getHours();
    greet_message = "";
    constructor(public dialogRef: MatDialogRef<ProjectComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private activateroute: ActivatedRoute) { }
    showDetails() {
        if (this.currentHours < 12) {
            this.greet_message = 'Good Morning';
        }
        else if (this.currentHours >= 12 && this.currentHours <= 17) {
            this.greet_message = 'Good Afternoon';
        }
        else if (this.currentHours > 17 && this.currentHours <= 24) {
            this.greet_message = 'Good Evening';
        }
        return this.greet_message;
    }

    closeDialog(){
        this.dialogRef.close();
    }
}


