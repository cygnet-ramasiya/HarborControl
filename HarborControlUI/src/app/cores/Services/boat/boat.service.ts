//#region Angular Imports
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
//#endregion

//#region model Imports
import { Boat } from './boat.model';
//#endregion

@Injectable()
export class BoatService {

  //#region environment Variable
  private apiURL = environment.baseURL;
  //#endregion

  //#region  Constructor
  constructor(private http: HttpClient) { 
  }
  //#endregion

  //Service to generate number of random boats
  public generateRandomBoats(parms: HttpParams): Observable<Boat[]> {
    return this.http.get<Boat[]>(`${this.apiURL}/Boat/GenerateRandomBoats`, {params: parms});
  }

}
