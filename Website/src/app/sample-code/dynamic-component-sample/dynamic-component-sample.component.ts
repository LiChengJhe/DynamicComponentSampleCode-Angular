import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, TemplateRef, ViewChild, ComponentRef } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import * as _ from 'lodash';

declare var toastr: any;
@Component({
  selector: 'app-dynamic-component-sample',
  templateUrl: './dynamic-component-sample.component.html',
  styleUrls: ['./dynamic-component-sample.component.css']
})
export class DynamicComponentSampleComponent implements OnInit {
  @ViewChild('Container', { read: ViewContainerRef }) Container: ViewContainerRef;
  private _Notes: NoteComponent[] = [];
  private _NoteCount = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.AddNoteComponent();
  }

  AddNoteComponent(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NoteComponent);
    const componentRef: ComponentRef<NoteComponent> = this.Container.createComponent(componentFactory);
    const component: NoteComponent = componentRef.instance;
    component.NoteID = this._NoteCount;
    this._NoteCount++;
    this._Notes.push(component);
  }

  GetAllNotes() {
    const dataSet: any[] = [];
    for (const i of this._Notes) {
      dataSet.push(i.Form.value);
    }

    toastr.options = {
      positionClass: 'toast-bottom-left'
    };
    toastr.warning(JSON.stringify(dataSet));
  }

}
