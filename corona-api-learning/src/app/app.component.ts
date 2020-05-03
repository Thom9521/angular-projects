import { Component, OnInit, Inject } from "@angular/core";
import { AppService } from "./app.service";
import { Country } from "./country";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  countries: any = [];

  constructor(private appSvc: AppService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.appSvc.getCountries().subscribe((data) => {
      this.countries = data.data;
    });
  }

  getCountry(countryCode: String) {
    this.appSvc.getCountry(countryCode).subscribe((data) => {
      console.log(JSON.stringify(data.data));
      this.openDialog(data.data);
    });
  }
  openDialog(data: {}): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "40rem",
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}

@Component({
  selector: "dialog-overview-example-dialog",
  templateUrl: "dialog-overview-example-dialog.html",
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Country
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
