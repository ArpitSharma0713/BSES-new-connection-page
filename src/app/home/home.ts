import { Component } from '@angular/core';
import { Consumers } from '../components/consumers/consumers';

@Component({
  selector: 'app-home',
  imports: [Consumers],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
