//#region Angular Imports
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
//#endregion

//#region service Imports
import { WindService } from 'src/app/cores/Services/wind/wind.service';
import { BoatService } from 'src/app/cores/Services/boat/boat.service';
//#endregion

//#region model Imports
import { Boat } from 'src/app/cores/Services/boat/boat.model';
import { BoatTypes, BoatStatus } from 'src/app/models/enums';
//#endregion

@Component({
  selector: 'app-harborcontrol',
  templateUrl: './harborcontrol.component.html',
  styleUrls: ['./harborcontrol.component.scss']
})
export class HarborControlComponent implements OnInit {

  //#region Public Variables
  public windSpeed: number = 0;
  public count: number;
  public boatList: Boat[] = [];
  //#endregion

  //#region  Constructor
  constructor(
    private windService: WindService,
    private boatService: BoatService
  ) { }
  //#endregion

  //#region  Angular Events
  public ngOnInit(): void {
    this.getWindSpeed();
  }
  //#endregion

  // Get wind speed using open weather api
  public getWindSpeed(): void {
    this.windService.getWindDetails().subscribe(res => {
      this.windSpeed = +parseFloat(String((res['wind']['speed'] * 18) / 5)).toFixed(2)
    }, error => {
      alert('Error while getting the wind speed.');
    });
  }

  //#region public methods
  // Generate random boats
  public generateBoat(): void {
    if (+this.count > 0) {
      let parms = new HttpParams()
        .append('count', `${+this.count}`);

      this.boatService.generateRandomBoats(parms).subscribe(res => {
        this.boatList = this.boatList.concat(res);
        this.count = undefined;
        if (!this.boatList.some(x => x.boatStatus === BoatStatus.InProgress)) {
          this.processBoats();
        }
      }, (error => {
        alert('Error while generating the boats');
      }));
    } else {
      alert('Please Enter a number greater than 0.')
    }

  }

  

  // getting boat status
  public getBoatStatus(status: BoatStatus): string {
    switch (status) {
      case BoatStatus.InProgress:
        return 'In Progress';
      case BoatStatus.InQueue:
        return 'In Queue';
      case BoatStatus.Completed:
        return 'Completed';
      case BoatStatus.CannotProcess:
        return 'You can not enter in perimeter.';
    }
  }

  // Getting boat type
  public getBoatType(boatType: BoatTypes): string {
    switch (boatType) {
      case BoatTypes.CargoShip:
        return 'Cargo Ship';
      case BoatTypes.SailBoat:
        return 'Sailboat';
      case BoatTypes.SpeedBoat:
        return 'Speedboat';
    }
  }

  // Refresh wind speed
  public refresh(): void {
    this.getWindSpeed();
  }
  //#endregion

  //#region Private Methods
  // Method which allow boats to enter in perimeter
  private processBoats(): void {
    let boat = this.boatList.find(x => x.boatStatus === BoatStatus.InQueue);
    if (boat.boatType === BoatTypes.SailBoat && (this.windSpeed < 10 || this.windSpeed > 30)) {
      boat.boatStatus = BoatStatus.CannotProcess;
      this.processBoats();
    } else {
      boat.boatStatus = BoatStatus.InProgress;
      setTimeout(() => {
        boat.boatStatus = BoatStatus.Completed;
        if (this.boatList.some(x => x.boatStatus === BoatStatus.InQueue)) {
          this.processBoats();
        }
      }, boat.duration * 1000);
    }
  }
  //#endregion

  
  
}
