import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, TemplateRef, ViewChild } from '@angular/core';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-dynamic-component-sample',
  templateUrl: './dynamic-component-sample.component.html',
  styleUrls: ['./dynamic-component-sample.component.css']
})
export class DynamicComponentSampleComponent implements OnInit {
  @ViewChild('Container', {read: ViewContainerRef}) Container: ViewContainerRef;

  constructor( private componentFactoryResolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NoteComponent);
    console.log(this.Container);
    this.Container.createComponent(componentFactory);
  }

}
