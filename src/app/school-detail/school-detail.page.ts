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
      const codigoInep = params['codigoInep'];
      // Use o código INEP para obter os detalhes da escola, por exemplo, do serviço ItemService
      this.schoolDetails = this.itemService.searchItemsByINEPCode(codigoInep);
    });
  }
  

  ngOnInit() {
  }

}
