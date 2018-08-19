import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trustee } from '../../models/trustee';

@Component({
  selector: 'app-trustee-view',
  templateUrl: './trustee-view.component.html',
  styleUrls: ['./trustee-view.component.css']
})
export class TrusteeViewComponent implements OnInit {
  
  data: any;
  trustee: Trustee;
  constructor(private route: ActivatedRoute) {
  	this.data = this.route.snapshot.data;
  	this.trustee = this.data.trustee; 
  }

  ngOnInit() {
  }

}
