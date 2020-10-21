import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchMedicineComponent } from '../fetch-medicines/fetch-medicine.component';
import { MedserviceService } from '../../services/medservice.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})

export class AddMedicineComponent implements OnInit {
  medicineForm: FormGroup;
  title: string = "Create";
  Id: number;
  errorMessage: any;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _medicineService: MedserviceService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.Id = this._avRoute.snapshot.params["id"];
    }

    this.medicineForm = this._fb.group({
      Id: 0,
      name: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      price:['', [Validators.required]],
      quantity: ['', [Validators.required]],
      expiryDate: ['', [Validators.required]]
    })
  }

  ngOnInit() {

    if (this.Id > 0) {
      this.title = "Edit";
      this._medicineService.getMedicineById(this.Id)
        .subscribe(resp => this.medicineForm.setValue(resp)
          , error => this.errorMessage = error);
    }

  }

  save() {

    if (!this.medicineForm.valid) {
      return;
    }

    if (this.title == "Create") {
      this._medicineService.saveMedicine(this.medicineForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-medicines']);
        }, error => this.errorMessage = error)
    }
    else if (this.title == "Edit") {
      this._medicineService.updateMedicine(this.medicineForm.value)
        .subscribe((data) => {
          this._router.navigate(['/fetch-medicines']);
        }, error => this.errorMessage = error)
    }
  }

  cancel() {
    this._router.navigate(['/fetch-medicines']);
  }

  get name() { return this.medicineForm.get('name'); }
  get price() { return this.medicineForm.get('price'); }
  get quantity() { return this.medicineForm.get('quantity'); }
  get expiryDate() { return this.medicineForm.get('expiryDate'); }
  get notes() { return this.medicineForm.get('notes'); }
}  
