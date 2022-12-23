import { Component, OnInit } from '@angular/core';
import {IAlcoholDto} from '../../dto/i-alcohol-dto';
import {AlcoholType} from '../../model/alcohol-type';
import {AlcoholService} from '../../service/alcohol.service';
import {Title} from '@angular/platform-browser';
import {OrderDetailService} from '../../service/order-detail.service';

@Component({
  selector: 'app-spirits',
  templateUrl: './spirits.component.html',
  styleUrls: ['./spirits.component.css']
})
export class SpiritsComponent implements OnInit {
  // totalRecord = 0;
  totalPages = 0;
  nameSearch = '';
  spiritsList: IAlcoholDto[];
  moreSpiritslList: IAlcoholDto[];
  // AlcoholTypeList: AlcoholType[];
  content: boolean;
  numberPage = 0;
  type = 1;

  constructor(private alcoholService: AlcoholService,
              private title: Title,
              private orderDetailService: OrderDetailService) {
    this.title.setTitle('Rượu mạnh');
    this.numberPage = 0;
    this.getAllSpiritsList();
  }

  ngOnInit(): void {}

  getAllSpiritsList() {
    this.alcoholService.getAllAlcoholByType(this.numberPage, this.nameSearch, this.type).subscribe(value => {
      console.log(value);
      // @ts-ignore
      this.totalPages = value.totalPages;
      console.log(this.totalPages);
      if (value != null) {
        this.content = true;
        if (this.numberPage === 0) {
          // @ts-ignore
          this.spiritsList = value.content;
        } else {
          // @ts-ignore
          this.moreSpiritslList = value.content;
          // @ts-ignore
          this.spiritsList = this.spiritsList.concat(this.moreSpiritslList);
        }
      } else {
        this.content = false;
      }
    });
  }

  addToCart(item: IAlcoholDto) {
    this.orderDetailService.updateCart(item).subscribe(() => {
      // this.messageService.add({severity: 'success', summary: 'Success', detail: 'Add successfully'});
    });
  }

  loadMore() {
    this.numberPage += 1;
    this.getAllSpiritsList();
  }

  search() {
    console.log(this.nameSearch);
    this.getAllSpiritsList();
  }
}
