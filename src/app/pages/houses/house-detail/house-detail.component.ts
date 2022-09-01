import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HouseDetails } from '../../../shared/models/house-details.interface/house-details.interface';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css'],
})
export class HouseDetailComponent implements OnInit {

  public id?: any;
  house!: HouseDetails;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('name')
    })
    this.http.get<HouseDetails>('https://api.got.show/api/show/houses/' + this.id)
    .subscribe((data: any) => {
      this.house = data[0]
    })
  }
}