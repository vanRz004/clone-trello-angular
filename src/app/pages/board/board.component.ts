import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem, CdkDropList, CdkDrag, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { Columns, ToDo } from '../../components/models/toddo.model';
import { CommonModule } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, DragDropModule, CdkDropList, CdkDrag, CdkDropListGroup, CommonModule],
  templateUrl: './board.component.html',
  styles: [
    ` .cdk-drag-animating {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    } 
     .cdk-drop-list .cdk-drag {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    } 
    ::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.11);
  border-radius: 10px;
}
::-webkit-scrollbar {
  width: 8px;
  background-color: gray;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.432);
  border-radius: 10px;
}
      `
  ]
})
export class BoardComponent {
  constructor(private dialog: Dialog) { }


  // close(){
  //   this.dialogRef.close();
  // }

  columns: Columns[] =
    [{
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Task 1'
        },
        {
          id: '2',
          title: 'Task 2'
        },

      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Task 3'
        },

      ]
    },
    {
      title: 'done',
      todos: [
        {
          id: '4',
          title: 'Task 4'
        },

      ]
    },
    ]
  todos: ToDo[] = [
    {
      id: '1',
      title: 'Task 1'
    },
    {
      id: '2',
      title: 'Task 2'
    },

  ]
  doing: ToDo[] = [

    {
      id: '3',
      title: 'Task 3'
    },
  ]
  done: ToDo[] = [
    {
      id: '4',
      title: 'Task 4'
    },

  ]
  drop(event: CdkDragDrop<ToDo[]>) {

    if (event.previousContainer === event.container) {
      console.log('Reordenando dentro de la misma lista');
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn(columnName: string) {
    this.columns.push({ title: columnName, todos: [] })
  }

  openDialog(todo : ToDo ) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px', maxWidth: '50%', data:{
        todo
      }
    });
    dialogRef.closed.subscribe((output)=>{
      console.log(output)
    })
  }
}
