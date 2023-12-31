import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/school.service';
import { School } from '../interfaces/school.interface';
import { FavoriteService } from '../services/favorite.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.page.html',
  styleUrls: ['./school-detail.page.scss'],
})
export class SchoolDetailPage implements OnInit {

  schoolDetails: School | null = null;

  parentRoute: string = '';

  constructor(private route: ActivatedRoute, private itemService: ItemService, private favoriteService: FavoriteService, private dataService: DataService) {

    this.route.params.subscribe(params => {
      const coEntidadeParam = params['coEntidade'];

      const coEntidade = parseInt(coEntidadeParam, 10);

      if (isNaN(coEntidade) === false) {

        this.schoolDetails = this.itemService.searchItemsByINEPCode(coEntidade);
        if (this.schoolDetails === null) {
          this.schoolDetails = this.favoriteService.searchItemsByINEPCode(coEntidade);
        }
      } else {
        console.error('O parâmetro coEntidade não é um número.');
      }
    });
  }
  

  ngOnInit() {
  }

  toggleFavorite() {
    if (this.schoolDetails) {
      const school = this.schoolDetails;
      this.favoriteService.toggleFavorite(school);
      this.dataService.saveData('favoriteSchools', this.favoriteService.getFavoriteSchools());
    }
  }

  get isFavorite(): boolean {
    return this.schoolDetails ? this.favoriteService.isFavorite(this.schoolDetails) : false;
  }

  openGoogleMaps() {
    if (this.schoolDetails?.latitude !== null && this.schoolDetails?.longitude !== null && this.schoolDetails !== null) {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${this.schoolDetails.latitude},${this.schoolDetails.longitude}`;
      window.open(mapsUrl, '_system');
    } else {
      console.error('Latitude e/ou longitude não disponíveis para abrir o Google Maps.');
    }
  }

}
