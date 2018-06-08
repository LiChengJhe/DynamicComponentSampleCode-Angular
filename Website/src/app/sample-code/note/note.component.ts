import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  Form: FormGroup;
  NoteID: number;
  constructor( ) {
  }
  ngOnInit() {
    this.InitForm();
  }
  InitForm(): void {
    this.Form = new FormGroup({
      Title: new FormControl(null),
      Content: new FormControl(null)
    });
  }
}
