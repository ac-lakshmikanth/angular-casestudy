import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Trustee } from '../../models/trustee';
import { TrusteeApiService } from '../../services/trustee-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trustee-form',
  templateUrl: './trustee-form.component.html',
  styleUrls: ['./trustee-form.component.css']
})
export class TrusteeFormComponent implements OnInit {

  trusteeForm: FormGroup;
  isSubmitted: boolean;
  trustee: Trustee;
  saveSuccess: boolean;
  @Input('trustee') trusteeData: Trustee;
  @Input() action: string = 'create'; 
  constructor(private fb: FormBuilder, private api: TrusteeApiService, private router: Router) { }

  ngOnInit() {
    if(this.action === 'edit') {
      this.trustee = this.trusteeData;
    }
    const d = this.trustee;
  	this.trusteeForm = this.fb.group({
  		prefix: new FormControl((d ? d.prefix : ''), [Validators.required]),
  		clientLivingState: new FormControl((d ? d.clientLivingState : ''), [Validators.required]),
  		countryOfResidence: new FormControl((d ? d.countryOfResidence : ''), [Validators.required]),
  		firstName: new FormControl((d ? d.firstName : ''), [Validators.required]),
  		middleName: new FormControl((d ? d.middleName : ''), []),
  		lastName: new FormControl((d ? d.lastName : ''), []),
  		ssn: new FormControl((d ? d.ssn : ''), [Validators.required,Validators.pattern(/^\d{4}\-\d{3}-\d{3}$/)]),
  		passport: new FormControl((d ? d.passport : ''), [Validators.required,Validators.pattern(/^\d{10}$/)]),
  		issuanceDate: new FormControl((d ? d.issuanceDate : ''), [Validators.required,Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)])
  	});
  }

  isInvalid(name:string, validation1:string,validation2?:string) {
  	const ctrl = this.trusteeForm.controls[name];
  	let hasError = ctrl.hasError(validation1);
  		hasError = !hasError ? ctrl.hasError(validation2) : true; 
  	return (ctrl.touched || this.isSubmitted) && hasError;
  }

  resetForm() {
    this.resetField('prefix');
    this.resetField('clientLivingState');
    this.resetField('countryOfResidence');
    this.resetField('firstName');
    this.resetField('middleName');
    this.resetField('lastName');
    this.resetField('ssn');
    this.resetField('passport');
    this.resetField('issuanceDate');
  }

  resetField(name:string) {
    this.trusteeForm.controls[name].setValue(null);
    this.trusteeForm.controls[name].markAsUntouched();    
  }

  onSubmit() {
  	this.isSubmitted = true;
  	if(!this.trusteeForm.valid) return;
  	const formData = this.trusteeForm.value;
  	this.trustee = {
  		prefix: formData.prefix,
  		clientLivingState: formData.clientLivingState,
  		countryOfResidence: formData.countryOfResidence,
  		firstName: formData.firstName,
  		middleName: formData.middleName,
  		lastName: formData.lastName,
  		ssn: formData.ssn,
  		passport: formData.passport,
  		issuanceDate: formData.issuanceDate
  	};    
  	console.log("this.trustee : ", this.trustee);

    if(this.action === 'edit') {
      this.trustee.id = this.trusteeData.id;
    }

    // set api submit mode
    const req = this.action === 'edit' ? this.api.editTrustee.bind(this.api) : this.api.saveTrustee.bind(this.api); 

  	req(this.trustee)
  		.subscribe(
  			data => { 
  				console.log('saved',data);
  				this.saveSuccess = true;
  				setTimeout(() => {
  					this.router.navigate(["/trustees"]);
  				},3000);
  			},
  			err => {
  				console.log('error',err); 
  			}
  		);
  }

}
