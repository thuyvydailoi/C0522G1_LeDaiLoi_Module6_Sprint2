import { Component, OnInit } from '@angular/core';
import {IAlcoholDto} from '../../dto/i-alcohol-dto';
import {AlcoholService} from '../../service/alcohol.service';
import {AlcoholType} from '../../model/alcohol-type';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalRecord = 0;
  action: boolean;
  numberRecord = 0;
  nameSearch = '';
  alcoholList: IAlcoholDto[];
  moreAlcoholList: IAlcoholDto[];
  AlcoholTypeList: AlcoholType[];

  constructor(private alcoholService: AlcoholService) {
  }

  ngOnInit(): void {
    this.getAllAlcoholList(this.numberRecord);
  }

  getAllAlcoholList(numberP: number) {
    this.alcoholService.getAllAlcohol(numberP, this.nameSearch).subscribe(value => {
      console.log(value);
      // @ts-ignore
      this.totalRecord = Math.ceil(value.totalElements / 8);
      console.log(this.totalRecord);
      if (value != null) {
        this.action = true;
        if (this.numberRecord === 0) {
          // @ts-ignore
          this.alcoholList = value.content;
        } else {
          // @ts-ignore
          this.moreAlcoholList = value.content;
          // @ts-ignore
          this.alcoholList = this.alcoholService.concat(this.moreAlcoholList);
        }
      } else {
        this.action = false;
      }
    });
  }

  loadMore() {
    this.numberRecord += 1;
    this.getAllAlcoholList(this.numberRecord);
  }


}
