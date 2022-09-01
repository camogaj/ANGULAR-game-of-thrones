import { Component, OnInit } from '@angular/core';
import { GotService } from '../../core/services/got-api.services';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  allCharacters: any[] = [];
  filteredCharacters: any[] = [];
  constructor(private gotApi: GotService) {}

  ngOnInit(): void {
    this.gotApi.getAllCharacters().subscribe((data) => {
      console.log(data);
      this.allCharacters = data as any[];
      this.filteredCharacters = this.allCharacters;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (
      event.target as HTMLInputElement
    ).value.toLocaleLowerCase();
    this.filteredCharacters = this.allCharacters.filter(
      (c) => c.name.toLocaleLowerCase().indexOf(filterValue) !== -1
    );
  }
  changeLanguage(lang: string) {}
}
