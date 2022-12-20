import { Component, OnInit } from '@angular/core';
import {IAlcoholDto} from '../../dto/i-alcohol-dto';
import {AlcoholService} from '../../service/alcohol.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {
  totalRecord = 0;
  numberRecord = 0;
  nameSearch = '';
  wineList: IAlcoholDto[];
  moreWineList: IAlcoholDto[];
  // AlcoholTypeList: AlcoholType[];
  content: boolean;
  numberPage = 0;
  type = 3;

  constructor(private alcoholService: AlcoholService,
              private title: Title) {
    this.title.setTitle('Rượu mạnh');
  }

  ngOnInit(): void {
    this.getAllWineList();
  }

  getAllWineList() {
    this.alcoholService.getAllAlcoholByType(this.numberRecord, this.nameSearch, this.type).subscribe(value => {
      console.log(value);
      // @ts-ignore
      this.totalRecord = Math.ceil(value.totalElements / 4);
      console.log(this.totalRecord);
      if (value != null) {
        this.content = true;
        if (this.numberRecord === 0) {
          // @ts-ignore
          this.wineList = value.content;
        } else {
          // @ts-ignore
          this.moreWineList = value.content;
          // @ts-ignore
          this.wineList = this.wineList.concat(this.moreSpiritslList);
        }
      } else {
        this.content = false;
      }
    });
  }

  loadMore() {
    this.numberRecord += 1;
    this.getAllWineList();
  }

  search() {
    console.log(this.nameSearch);
    this.getAllWineList();
  }

}
