import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
