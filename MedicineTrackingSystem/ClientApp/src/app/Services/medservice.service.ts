import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 

@Injectable()
export class MedserviceService {
  myAppUrl: string = "";

  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }
  getMedicines() {
    return this._http.get(this.myAppUrl + 'api/MedicalTrackingInfo/Index')
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  getMedicineById(id: number) {
    return this._http.get(this.myAppUrl + "api/MedicalTrackingInfo/Details/" + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  saveMedicine(medicine) {
    return this._http.post(this.myAppUrl + 'api/MedicalTrackingInfo/Create', medicine)
      .map((response: Response) => response.json())
      .catch(this.errorHandler)
  }

  updateMedicine(medicine) {
    return this._http.put(this.myAppUrl + 'api/MedicalTrackingInfo/Edit', medicine)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteMedicine(id) {
    return this._http.delete(this.myAppUrl + "api/MedicalTrackingInfo/Delete/" + id)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);
  }


  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  } 
  

}
