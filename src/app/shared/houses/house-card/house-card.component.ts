import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['../../character/character-card/character-card.component.css'],
})
export class HouseCardComponent implements OnInit {
  @Input() image = '';
  @Input() name = '';
  defaultImage: string;
  constructor() {
    this.defaultImage = 'https://i.pinimg.com/474x/fe/9b/c3/fe9bc3b535f9ab8e944da3a2af64abae.jpg';
  }

  ngOnInit(): void {}
  setDefaultPic() {
    this.image = this.defaultImage;
  }
}
