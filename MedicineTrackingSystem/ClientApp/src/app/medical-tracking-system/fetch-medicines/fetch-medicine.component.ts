import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MedserviceService } from '../../services/medservice.service'

@Component({
  selector: 'app-fetch-medicine',
  templateUrl: './fetch-medicine.component.html',
  styleUrls: ['./fetch-medicine.component.css']
})

export class FetchMedicineComponent {
  public medList: MedicineData[];

  constructor(public http: Http, private _router: Router, private _medicineService: MedserviceService) {
    this.getMedicines();
  }

  getMedicines() {
    this._medicineService.getMedicines().subscribe(
      data => this.medList = data
    )
  }

  delete(ID) {
    var ans = confirm("Do you want to delete medicine with Id: " + ID);
    if (ans) {
      this._medicineService.deleteMedicine(ID).subscribe((data) => {
        this.getMedicines();
      }, error => console.error(error))
    }
  }
}

interface MedicineData {
  ID: number;
  medicineName: string;
  brand: string;
  quantity: string;
  expiryDate: Date;
  notes: string;

}  
