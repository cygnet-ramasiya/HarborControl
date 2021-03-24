//#region Angular Imports
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
//#endregion

import { Observable } from 'rxjs';


@Injectable()
export class WindService {

  //#region environment Variable
  private apiURL = environment.windServiceBaseURL;
  //#endregion

  //#region  Constructor
  constructor(private http: HttpClient) { 
  }
  //#endregion

  
  // Service to get wind information 
  public getWindDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
  

}
