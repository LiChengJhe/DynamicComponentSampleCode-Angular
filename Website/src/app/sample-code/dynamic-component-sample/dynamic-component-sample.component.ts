import {
  Component, OnInit, ComponentFactoryResolver,
  ViewContainerRef, ViewChild, ComponentRef, AfterViewChecked
} from '@angular/core';
import { NoteComponent } from '../note/note.component';
import * as _ from 'lodash';
import { fromEvent, pipe, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
declare var $: any;
declare var toastr: any;
@Component({
  selector: 'app-dynamic-component-sample',
  templateUrl: './dynamic-component-sample.component.html',
  styleUrls: ['./dynamic-component-sample.component.css']
})
export class DynamicComponentSampleComponent implements OnInit, AfterViewChecked {

  @ViewChild('Container', { read: ViewContainerRef }) _Container: ViewContainerRef;
  private _Notes = [];
  private _NoteCount = 0;
  private _Component: NoteComponent;
  constructor(private componentFactory: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.AddNoteComponent();
  }

  AddNoteComponent(): void {
    const componentFactory = this.componentFactory.resolveComponentFactory(NoteComponent);
    const componentRef: ComponentRef<NoteComponent> = this._Container.createComponent(componentFactory);
    this._Component = componentRef.instance;
    this._Component.NoteID = this._NoteCount;
    this._NoteCount++;
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

  ngAfterViewChecked(): void {
    if (!_.find(this._Notes, (i) => i.Component.NoteID == this._Component.NoteID)) {
      this._Notes.push({
        Component: this._Component,
        DelNoteEvent: fromEvent(
          $('button[noteid="' + this._Component.NoteID + '"]'), 'click')
          .pipe(take(1)).subscribe((e: MouseEvent) => {
            const noteID: number = $(e.target).attr('noteid') as number;
            $.each($('button[noteid]'), (index, val) => {
              if ($(val).attr('noteid') == noteID) {
                this._Notes = this._Notes.filter((i) => Number(i.Component.NoteID)  != noteID);
                this._Container.remove(index);
                return false;
              }
            });
          })
      });
    }
  }
}
