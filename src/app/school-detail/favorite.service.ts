// favorite.service.ts
import { Injectable } from '@angular/core';
import { School } from '../tab2/school.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoriteSchools: School[] = [];

  getFavoriteSchools(): School[] {
    return this.favoriteSchools;
  }

  toggleFavorite(school: School): void {
    this.favoriteSchools.push(school);
  }

  isFavorite(school: School): boolean {
    return this.favoriteSchools.includes(school);
  }
}
