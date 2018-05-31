import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicComponentSampleComponent } from './dynamic-component-sample/dynamic-component-sample.component';

const routes: Routes = [
  {
    path: 'SampleCode',
      children: [
        { path: 'DynamicComponent', component: DynamicComponentSampleComponent }
    ]
  },
  { path: '', redirectTo: '/SampleCode/DynamicComponent', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleCodeRoutingModule { }
