import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../tab2/school.service';
import { School } from '../tab2/school.interface';


@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.page.html',
  styleUrls: ['./school-detail.page.scss'],
})
export class SchoolDetailPage implements OnInit {

  schoolDetails: School | null = null;

  constructor(private route: ActivatedRoute, private itemService: ItemService) {
    this.route.params.subscribe(params => {
      const coEntidadeParam = params['coEntidade'];

      const coEntidade = parseInt(coEntidadeParam, 10);

      if (isNaN(coEntidade) === false) {
        this.schoolDetails = this.itemService.searchItemsByINEPCode(coEntidade);
        console.log(this.schoolDetails);
      } else {
        console.error('O parâmetro coEntidade não é um número.');
      }
    });
  }
  

  ngOnInit() {
  }

}
