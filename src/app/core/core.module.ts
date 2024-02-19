import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { SlideNavComponent } from './component/slide-nav/slide-nav.component';
import { SliderComponent } from './component/slider/slider.component';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    SlideNavComponent,
    NotfoundComponent,
    SliderComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent
  ],
})
export class CoreModule { }

