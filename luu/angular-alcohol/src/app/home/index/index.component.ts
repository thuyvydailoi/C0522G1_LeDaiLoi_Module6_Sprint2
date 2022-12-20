import {Component, OnInit} from '@angular/core';

import {Title} from '@angular/platform-browser';
import {IAlcoholDto} from '../../dto/i-alcohol-dto';
import {AlcoholService} from '../../service/alcohol.service';
import {TokenStorageService} from '../../service/token-storage.service';
import {OrderDetailService} from '../../service/order-detail.service';
import {OrderDetailDto} from '../../dto/order-detail-dto';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  username: string;
  totalRecord = 0;
  numberRecord = 0;
  nameSearch = '';
  alcoholList: IAlcoholDto[];
  moreAlcoholList: IAlcoholDto[];
  // AlcoholTypeList: AlcoholType[];
  content: boolean;
  numberPage = 0;

  constructor(private alcoholService: AlcoholService,
              private tokenService: TokenStorageService,
              private title: Title,
              private orderDetailService: OrderDetailService) {
    this.title.setTitle('Trang chủ');
  }

  ngOnInit(): void {
    this.getAllAlcoholList();
    // tslint:disable-next-line:no-unused-expression
    this.showUsername;

  }

  showUsername() {
    this.username = this.tokenService.getUser().username;
  }

  getAllAlcoholList() {
    this.alcoholService.getAllAlcohol(this.numberPage, this.nameSearch).subscribe(value => {
      console.log(value);
      // @ts-ignore
      this.totalRecord = Math.ceil(value.totalElements / 4);
      console.log(this.totalRecord);
      if (value != null) {
        this.content = true;
        if (this.numberRecord === 0) {
          // @ts-ignore
          this.alcoholList = value.content;
        } else {
          // @ts-ignore
          this.moreAlcoholList = value.content;
          // @ts-ignore
          this.alcoholList = this.alcoholList.concat(this.moreAlcoholList);
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
    this.numberRecord += 1;
    this.getAllAlcoholList();
  }

  search() {
    this.getAllAlcoholList();
  }
}
