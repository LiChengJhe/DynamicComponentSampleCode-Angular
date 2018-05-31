import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { ViewStartComponent } from './pages/view-start/view-start.component';
import { NavBarComponent } from './components/navs/nav-bar/nav-bar.component';
import { FooterBarComponent } from './components/footers/footer-bar/footer-bar.component';
import { ContentBarComponent } from './components/contents/content-bar/content-bar.component';
import { SampleCodeModule } from '../sample-code/sample-code.module';




@NgModule({
  imports: [
    SampleCodeModule,
    LayoutRoutingModule
  ],
  declarations: [
    ViewStartComponent,
    NavBarComponent,
    FooterBarComponent,
    ContentBarComponent
  ],
  exports: [
    ViewStartComponent
  ]
})
export class LayoutModule { }
