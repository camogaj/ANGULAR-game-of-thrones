import { Component, OnInit } from '@angular/core';
import { Chronology  } from 'src/app/shared/models/chronology/chronology.interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.css'],
})
export class ChronologyComponent implements OnInit {
  public id?:  any;

  characters!: Chronology[];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('_id')
    })
    this.http.get<Chronology[]>('https://api.got.show/api/show/characters/' + this.id)
    .subscribe((res:any) => {
      this.characters = res
      console.log(this.characters)
    })
  }
}
