import { ChronologyComponent } from './pages/characters/chronology/chronology.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './pages/houses/houses.component';
import { HouseDetailComponent } from './pages/houses/house-detail/house-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'characters',
        component: CharactersComponent,
      },
      {
        path: 'houses',
        component: HousesComponent,
      },
      {
        path: 'chronology',
        component: ChronologyComponent,
      },
      {
        path: 'houses/:name',
        component: HouseDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
