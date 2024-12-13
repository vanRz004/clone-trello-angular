import { Component, Inject, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from "../btn/btn.component";
import { ToDo } from '../models/toddo.model';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

interface InputData {
  todo:ToDo;
}

// interface para la respuesta del modal
interface OutputData {
  rta: boolean;
}



@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html'
})

export class TodoDialogComponent {
  
  faClose: any = faClose;
  faCheckToSlot: any = faCheckToSlot;
  faBars: any = faBars;
  faUser: any = faUser;
  faTag: any = faTag;
  faCheckSquare: any = faCheckSquare;
  faClock: any = faClock;
  
  todo: ToDo
  constructor( private dialogRef: DialogRef<OutputData>,
     @Inject(DIALOG_DATA) private data: InputData){
      this.todo = data.todo
     }
  close(){
    this.dialogRef.close({
      rta: true
    })
  }

}
