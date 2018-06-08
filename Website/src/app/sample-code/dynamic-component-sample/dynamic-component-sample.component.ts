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
  private _NoteComponents = [];
  private _NoteComponentCount = 0;
  private _CurNoteComponent: NoteComponent;
  constructor(private componentFactory: ComponentFactoryResolver) {
  }
  ngOnInit() {
    this.AddNoteComponent();
  }
  AddNoteComponent(): void {
    const componentFactory = this.componentFactory.resolveComponentFactory(NoteComponent);
    const componentRef: ComponentRef<NoteComponent> = this._Container.createComponent(componentFactory);
    this._CurNoteComponent = componentRef.instance;
    this._CurNoteComponent.NoteID = this._NoteComponentCount;
    this._NoteComponentCount++;
  }
  GetAllNotes() {
    const dataSet: any[] = [];
    for (const i of this._NoteComponents) {
      dataSet.push(i.Component.Form.value);
    }
    toastr.options = {
      positionClass: 'toast-bottom-left'
    };
    toastr.warning(JSON.stringify(dataSet));
  }
  ngAfterViewChecked(): void {
    if (!_.find(this._NoteComponents, (i) => i.Component.NoteID === this._CurNoteComponent.NoteID)) {
      this._NoteComponents.push({
        Component: this._CurNoteComponent,
        DelNoteEvent: fromEvent(
          $('button[noteid="' + this._CurNoteComponent.NoteID + '"]'), 'click')
          .pipe(take(1)).subscribe((e: MouseEvent) => {
            const noteID: number = $(e.target).attr('noteid') as number;
            $.each($('button[noteid]'), (index, val) => {
              if ($(val).attr('noteid') === noteID) {
                this._NoteComponents = this._NoteComponents.filter((i) => Number(i.Component.NoteID)  !== noteID);
                this._Container.remove(index);
                return false;
              }
            });
          })
      });
    }
  }
}
