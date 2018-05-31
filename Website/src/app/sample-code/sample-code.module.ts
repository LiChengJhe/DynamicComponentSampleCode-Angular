import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SampleCodeRoutingModule } from './sample-code-routing.module';
import { DynamicComponentSampleComponent } from './dynamic-component-sample/dynamic-component-sample.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SampleCodeRoutingModule
  ],
  declarations: [ DynamicComponentSampleComponent, NoteComponent],
  exports: [DynamicComponentSampleComponent, NoteComponent]
})
export class SampleCodeModule { }
