import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent {
@Input() typeBtn: 'button'  | 'reset' | 'submit' = 'button';
@Input() color = 'primary';

get colors(){
  return{
    'text-white':this.color === 'success' || this.color === 'primary',
    'text-gray-700':this.color === 'gray-light',
    'bg-success-700': this.color === 'success',
    'hover:bg-success-800': this.color === 'success',
    'focus:ring-success-400': this.color === 'success',
    'bg-primary-700':this.color === 'primary',
    'hover:bg-primary-800': this.color === 'primary',
    'focus:ring-primary-400': this.color === 'primary',
    'bg-gray-200':this.color === 'gray-light',
    'hover:bg-gray-500': this.color === 'gray-light',
    'focus:ring-gray-50': this.color === 'gray-light',
  }
}

}
