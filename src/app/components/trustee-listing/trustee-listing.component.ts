import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trustee } from '../../models/trustee';
import { TrusteeApiService } from '../../services/trustee-api.service';

@Component({
  selector: 'app-trustee-listing',
  templateUrl: './trustee-listing.component.html',
  styleUrls: ['./trustee-listing.component.css']
})
export class TrusteeListingComponent implements OnInit {

  data: any; 
  trustees: Array<Trustee>;
  deleteSuccess: boolean;
  constructor(private route: ActivatedRoute, private api: TrusteeApiService) {
    this.data = this.route.snapshot.data;
    this.trustees = this.data.trustees || []; 
  	console.log(this.route.snapshot.data);
  }

  ngOnInit() {
  }

  deleteThisRecord(t:Trustee, i:number) {
    if(confirm("Are you sure you want to delete this record ?")) {
      this.api.deleteTrustee(t.id)
        .subscribe(
          (data) => {
            console.log("deleted successfully");
            this.deleteSuccess = true;
            this.trustees.splice(i,1);
            setTimeout(() => {
              this.deleteSuccess = false;
            },3000);
          },
          (error) => {
            console.log("delete action error", error);            
          }
        );
    }    
  }

}
