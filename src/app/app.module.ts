import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HousesComponent } from './pages/houses/houses.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterDetailComponent } from './pages/characters/character-detail/character-detail.component';
import { HouseDetailComponent } from './pages/houses/house-detail/house-detail.component';
import { HeaderHomeComponent } from './shared/header-home/header-home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ChronologyComponent } from './pages/characters/chronology/chronology.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterCardComponent } from './shared/character/character-card/character-card.component';
import { HouseCardComponent } from './shared/houses/house-card/house-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousesComponent,
    CharactersComponent,
    CharacterDetailComponent,
    HouseDetailComponent,
    HeaderHomeComponent,
    FooterComponent,
    ChronologyComponent,
    CharacterCardComponent,
    HouseCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
