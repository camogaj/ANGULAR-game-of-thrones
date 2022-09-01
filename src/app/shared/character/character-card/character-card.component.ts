import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent implements OnInit {
  @Input() image = '';
  @Input() name = '';
  defaultImage: string;
  constructor() {
    this.defaultImage = 'https://sites.google.com/site/siriesdelnorte/_/rsrc/1426524422016/curiosidades/caminantes-blancos/2mm78dv%20%281%29.jpg';
  }

  ngOnInit(): void {}
  setDefaultPic() {
    this.image = this.defaultImage;
  }
}
