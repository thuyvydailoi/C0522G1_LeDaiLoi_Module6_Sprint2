import {Component, OnInit} from '@angular/core';
import {IAlcoholDto} from '../../dto/i-alcohol-dto';
import {AlcoholService} from '../../service/alcohol.service';
import {Title} from '@angular/platform-browser';
import {OrderDetailService} from '../../service/order-detail.service';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {
  // totalRecord = 0;
  totalPages = 0;
  nameSearch = '';
  wineList: IAlcoholDto[];
  moreWineList: IAlcoholDto[];
  // AlcoholTypeList: AlcoholType[];
  content: boolean;
  numberPage = 0;
  type = 3;

  constructor(private alcoholService: AlcoholService,
              private title: Title,
              private orderDetailService: OrderDetailService) {
    this.title.setTitle('Rượu mạnh');
    this.numberPage = 0;
    this.getAllWineList();
  }

  ngOnInit(): void {
  }

  getAllWineList() {
    this.alcoholService.getAllAlcoholByType(this.numberPage, this.nameSearch, this.type).subscribe(value => {
      console.log(value);
      // @ts-ignore
      this.totalPages = value.totalPages;
      console.log(this.totalPages);
      if (value != null) {
        this.content = true;
        if (this.numberPage === 0) {
          // @ts-ignore
          this.wineList = value.content;
        } else {
          // @ts-ignore
          this.moreWineList = value.content;
          // @ts-ignore
          this.wineList = this.wineList.concat(this.moreWineList);
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
    this.getAllWineList();
  }

  search() {
    console.log(this.nameSearch);
    this.getAllWineList();
  }

}
