import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trustee } from '../../models/trustee';

@Component({
  selector: 'app-trustee-edit',
  templateUrl: './trustee-edit.component.html',
  styleUrls: ['./trustee-edit.component.css']
})
export class TrusteeEditComponent implements OnInit {

  data: any;
  trustee: Trustee;
  action: string = 'edit';
  constructor(private route: ActivatedRoute) {
  	this.data = this.route.snapshot.data;
  	this.trustee = this.data.trustee; 
  }

  ngOnInit() {
  }

}
