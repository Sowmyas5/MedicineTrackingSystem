import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medical-tracking-system',
  templateUrl: './medical-tracking.component.html'
})
export class FetchDataComponent {
  public medicalInfo: MedicalInfo[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<MedicalInfo[]>(baseUrl + 'medicalinfo').subscribe(result => {
      this.medicalInfo = result;
    }, error => console.error(error));
  }
}

interface MedicalInfo {
  name: string;
  brand: string;
  price: number;
  quantity: number;
  expirydate: Date;
  notes: string;
  date: string;
}
