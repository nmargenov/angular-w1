import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent { 

  @Input() fieldName!: String;
  @Input() value!: String;


  isVisiable: boolean = false;

  onClick():void{
    this.isVisiable=!this.isVisiable;
  }
}
