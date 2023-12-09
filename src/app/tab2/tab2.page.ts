import { Component } from '@angular/core';
import { ItemService } from '../services/school.service';
import { School } from '../interfaces/school.interface';
import { Router } from '@angular/router';

interface SearchParams {
  noEntidade?: string;
  coEntidade?: string | null;
  sgUf?: string | null;
  tpDependencia?: string | null;
  page?: number;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  items: School[] = [];
  filteredItems: School[] = [];

  searchParams: SearchParams = {};

  showAdvancedSearch = false;

  constructor(private itemService: ItemService, private router: Router) {
    this.items = this.itemService.getItems();
    this.filteredItems = [...this.items];
  }

  ngOnInit() {
    this.itemService.schoolsObservable.subscribe((schools) => {
      this.items = schools;
      this.filteredItems = [...this.items];
    });
  }

  changePage(increment: number) {
    if (this.searchParams.page === undefined) {
      this.searchParams.page = 0;
    }
  
    this.searchParams.page += increment;
  
    if (this.searchParams.page < 0) {
      this.searchParams.page = 0;
    }
  
    this.search();
  }

  searchAndResetPage() {
    this.searchParams.page = 0;
    this.search();
  }

  async search() {

    if (this.searchParams.sgUf === 'null') {
      this.searchParams.sgUf = null;
    }

    // Filtra apenas as chaves que têm valores diferentes de null
    const filteredSearchParams = Object.entries(this.searchParams)
      .filter(([key, value]) => value !== null)
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
  
    if (Object.keys(filteredSearchParams).length > 0) {
      this.filteredItems = await this.itemService.searchItems(filteredSearchParams);
    } else {
      this.filteredItems = await this.itemService.searchItems();
    }
  }
  

  goToSchoolDetail(school: School) {
    this.router.navigate(['/school-detail', school.coEntidade]);
  }
  
}
