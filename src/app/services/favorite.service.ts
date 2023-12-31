// favorite.service.ts
import { Injectable, EventEmitter } from '@angular/core';
import { School } from '../interfaces/school.interface';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoriteSchools: School[] = [];
  favoritesChanged = new EventEmitter<School[]>(); 

  getFavoriteSchools(): School[] {
    return this.favoriteSchools;
  }

  setFavoriteSchools(schools: School[]) {
    this.favoriteSchools = schools;
    this.favoritesChanged.emit(this.favoriteSchools);
  }

  toggleFavorite(school: School): void {
    if (this.isFavorite(school)) {
      this.removeFavorite(school.coEntidade);
    } else {
      this.favoriteSchools.push(school);
    }
    this.favoritesChanged.emit(this.favoriteSchools);
  }

  removeFavorite(coEntidade: number): void {
    this.favoriteSchools = this.favoriteSchools.filter(school => school.coEntidade !== coEntidade);
  }

  isFavorite(school: School): boolean {
    return this.favoriteSchools.some(favoriteSchool => favoriteSchool.coEntidade === school.coEntidade);
  }

  searchItemsByINEPCode(query: number): School | null {

    const schoolDetails: School | undefined = this.favoriteSchools.find((school) => school.coEntidade === query);

    return schoolDetails || null;
  }

}
