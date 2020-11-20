import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { PostcodeFinderComponent } from './postcode-finder/postcode-finder.component';
import { MovingHomeComponent } from './moving-home/moving-home.component';
import { InvestmentCheckComponent } from './investment-check/investment-check.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: 'moving', component: MovingHomeComponent },
{ path: 'invest', component: InvestmentCheckComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PostcodeFinderComponent,
    MovingHomeComponent,
    InvestmentCheckComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
