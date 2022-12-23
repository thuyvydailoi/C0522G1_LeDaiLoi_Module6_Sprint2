import {Component, OnInit} from '@angular/core';
import {IAlcoholDto} from '../../dto/i-alcohol-dto';
import {AlcoholService} from '../../service/alcohol.service';
import {Title} from '@angular/platform-browser';
import {BehaviorSubject, Observable} from 'rxjs';
import {OrderDetailService} from '../../service/order-detail.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  // totalRecord = 0;
  totalPages = 0;
  nameSearch = '';
  baseList: IAlcoholDto[];
  moreBaselList: IAlcoholDto[];
  // AlcoholTypeList: AlcoholType[];
  content: boolean;
  numberPage = 0;
  type = 2;

  constructor(private alcoholService: AlcoholService,
              private title: Title,
              private orderDetailService: OrderDetailService) {
    this.title.setTitle('Rượu pha chế');
    this.numberPage = 0;
    this.getAllBaseList();
  }

  ngOnInit(): void {
  }

  getAllBaseList() {
    this.alcoholService.getAllAlcoholByType(this.numberPage, this.nameSearch, this.type).subscribe(value => {
      console.log(value);
      // @ts-ignore
      this.totalPages = value.totalPages;
      console.log(this.totalPages);
      if (value != null) {
        this.content = true;
        if (this.numberPage === 0) {
          // @ts-ignore
          this.baseList = value.content;
        } else {
          // @ts-ignore
          this.moreBaselList = value.content;
          // @ts-ignore
          this.baseList = this.baseList.concat(this.moreBaselList);
        }
      } else {
        this.content = false;
      }
    });
  }

  loadMore() {
    this.numberPage += 1;
    this.getAllBaseList();
  }

  addToCart(item: IAlcoholDto) {
    this.orderDetailService.updateCart(item).subscribe(() => {
      // this.messageService.add({severity: 'success', summary: 'Success', detail: 'Add successfully'});
    });
  }

  searchName() {
    this.getAllBaseList();
  }
}
