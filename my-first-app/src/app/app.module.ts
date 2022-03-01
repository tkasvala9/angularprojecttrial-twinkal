import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { CofeeheadderComponent } from './cofeeheadder/cofeeheadder.component';
import { CofeefooterComponent } from './cofeefooter/cofeefooter.component';
import { CofeelogoComponent } from './cofeelogo/cofeelogo.component';
import { CofeecrousalComponent } from './cofeecrousal/cofeecrousal.component';
import { TimerComponent } from './timer/timer.component';
import { ProductComponent } from './product/product.component';
import { DescriptionComponent } from './description/description.component';
import {DatetimeService}from './datetime.service';
import { UserinfoService } from './userinfo.service';
import { ReactformComponent } from './reactform/reactform.component';
import { ReactiveAdressFormmComponent } from './reactive-adress-formm/reactive-adress-formm.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CofeeheadderComponent,
    CofeefooterComponent,
    CofeelogoComponent,
    CofeecrousalComponent,
    TimerComponent,
    ProductComponent,
    DescriptionComponent,
    ReactformComponent,
    ReactiveAdressFormmComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatetimeService,UserinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
