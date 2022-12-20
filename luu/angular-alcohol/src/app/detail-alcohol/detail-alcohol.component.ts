import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IAlcoholDto} from '../dto/i-alcohol-dto';
import {AlcoholService} from '../service/alcohol.service';
import {ActivatedRoute} from '@angular/router';
import {OrderDetailService} from '../service/order-detail.service';

@Component({
  selector: 'app-detail-alcohol',
  templateUrl: './detail-alcohol.component.html',
  styleUrls: ['./detail-alcohol.component.css']
})
export class DetailAlcoholComponent implements OnInit {
  id: number;
  username: string;
  totalRecord = 0;
  numberRecord = 0;
  nameSearch = '';
  alcoholList: IAlcoholDto[];
  moreAlcoholList: IAlcoholDto[];
  // AlcoholTypeList: AlcoholType[];
  content: boolean;
  numberPage = 0;

  alcohol$: BehaviorSubject<IAlcoholDto>;

  constructor(private alcoholService: AlcoholService,
              private activatedRoute: ActivatedRoute,
              private orderDetailService: OrderDetailService) {
  }

  ngOnInit(): void {
    // this.id = Number(this.activatedRoute.snapshot.params.id);
    // this.alcoholService.findById(this.id).subscribe(value => {
    //   window.scroll(0, 0);
    //   console.log(value);
    //   this.alcohol$ = new BehaviorSubject(value);
    // });
    this.getAllAlcoholList();

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

}
