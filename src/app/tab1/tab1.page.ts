import { Component, OnDestroy } from '@angular/core';
import { School } from '../interfaces/school.interface';
import { FavoriteService } from '../services/favorite.service';
import { ItemService } from '../services/school.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnDestroy {

  favoriteSchools: School[] = [];

  private favoritesChangedSubscription: Subscription

  constructor(private favoriteService: FavoriteService, private itemService: ItemService) {
    this.favoritesChangedSubscription = this.favoriteService.favoritesChanged.subscribe(
      (schools: School[]) => {
        this.favoriteSchools = schools;
      }
    );
  }

  ionViewDidEnter() {
    this.loadFavoriteSchools();
  }

  private loadFavoriteSchools() {
    this.favoriteSchools = this.favoriteService.getFavoriteSchools();
  }

  ngOnDestroy() {
    this.favoritesChangedSubscription.unsubscribe();
  }
  
}
