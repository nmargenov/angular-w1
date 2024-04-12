import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { IData } from './IData';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listData: Array<IData> = [
    {
      fieldName: 'Information about me',
      value: 'Student in Plovdiv University. 21 years old.'
    },
    {
      fieldName: 'What am I interested in?',
      value: 'I love watching football and do sports.'
    },
    {
      fieldName: 'Favorite youtube creator',
      value: 'https://www.youtube.com/channel/UCX6OQ3DkcsbYNE6H8uQQuVA'
    },
    {
      fieldName: 'My channel',
      value: 'Dont have it yet ;('
    },
    {
      fieldName: 'Cash money$$$$$',
      value: '5m euro!!!'
    },
  ]
}
