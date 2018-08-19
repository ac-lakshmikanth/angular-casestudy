import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { TrusteeApiService } from './trustee-api.service';

@Injectable({
  providedIn: 'root'
})
export class TrusteeResolverService implements Resolve<any> {

  constructor(private api: TrusteeApiService) { }

  resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) {
  	return this.api.getTrustee(route.params.id);
  }
}
