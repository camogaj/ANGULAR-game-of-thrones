import { GotService } from './../../core/services/got-api.services';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private gotApi: GotService) {}

  ngOnInit(): void {
    this.gotApi.getAllCharacters().subscribe((data) => {
      console.log(data);
    });
  }
}
