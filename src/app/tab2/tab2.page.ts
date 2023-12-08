import { Component } from '@angular/core';
import { ItemService } from './school.service';
import { School } from './school.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  items: School[] = [];
  filteredItems: School[] = [];

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

  async search(event: any) {
    const query = event.detail.value;
    this.filteredItems = await this.itemService.searchItems(query);
  }
  

  goToSchoolDetail(school: School) {
    this.router.navigate(['/school-detail', school.coEntidade]);
  }
  
}
