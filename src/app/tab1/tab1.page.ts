import { Component } from '@angular/core';
import { School } from '../tab2/school.interface';
import { FavoriteService } from '../school-detail/favorite.service';
import { ItemService } from '../tab2/school.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  favoriteSchools: (School | null)[] = [];

  constructor(private favoriteService: FavoriteService, private itemService: ItemService) {}

  ionViewWillEnter() {
    this.loadFavoriteSchools();
    console.log("favoritas no carregamento", this.favoriteSchools);
  }

  private loadFavoriteSchools() {
    this.favoriteSchools = this.favoriteService.getFavoriteSchools();
  }
  

}
