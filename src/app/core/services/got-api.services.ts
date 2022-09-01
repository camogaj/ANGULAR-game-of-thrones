import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class GotService {
  constructor(private http: HttpClient) {}
  getCharacter(name: string) {
    const path = `https://api.got.show/api/show/characters/${name}`;
    return this.http.get<CharacterData>(path);
  }
  getAllCharacters() {
    const path = `https://api.got.show/api/show/characters/`;
    return this.http.get(path);
  }
}
