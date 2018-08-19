import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TrusteeListingComponent } from './components/trustee-listing/trustee-listing.component';
import { TrusteeFormComponent } from './components/trustee-form/trustee-form.component';
import { TrusteeViewComponent } from './components/trustee-view/trustee-view.component';

import { TrusteeApiService } from './services/trustee-api.service';
import { TrusteesResolverService } from './services/trustees.resolver.service';
import { TrusteeResolverService } from './services/trustee.resolver.service';
import { TrusteeEditComponent } from './components/trustee-edit/trustee-edit.component';

const routes: Routes = [
	{path:'', redirectTo: '/trustees', pathMatch: 'full'},
	{path: 'trustees', component: TrusteeListingComponent, resolve: {trustees:TrusteesResolverService}},
	{path: 'trustees/add', component: TrusteeFormComponent},
	{path: 'trustees/:id', component: TrusteeViewComponent, resolve: {trustee:TrusteeResolverService}},
	{path: 'trustees/:id/edit', component: TrusteeEditComponent, resolve: {trustee:TrusteeResolverService}}
];

@NgModule({
  declarations: [
    AppComponent,
    TrusteeListingComponent,
    TrusteeFormComponent,
    TrusteeViewComponent,
    TrusteeEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TrusteeApiService, TrusteesResolverService, TrusteeResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
