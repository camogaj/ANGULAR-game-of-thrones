import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from '../../shared/models/house-interface/house.interface' 

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  
  houses: House[] = [];
  allHouses: any[] = [];
  filteredHouses: any[] = [];
  
  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get<House[]>('https://api.got.show/api/show/houses/')
    .subscribe((data) => {
      console.log(data)
      this.allHouses = data as any[];
      this.filteredHouses = this.allHouses;
      this.houses = data
    })
  };
  applyFilter(event: Event) {
    const filterValue = (
      event.target as HTMLInputElement
    ).value.toLocaleLowerCase();
    this.filteredHouses = this.allHouses.filter(
      (c) => c.name.toLocaleLowerCase().indexOf(filterValue) !== -1
    );
  }
  changeLanguage(lang: string) {}
};
