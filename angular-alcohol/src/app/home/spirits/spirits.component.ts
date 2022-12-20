import { Component, OnInit } from '@angular/core';
import {IAlcoholDto} from '../../dto/i-alcohol-dto';
import {AlcoholType} from '../../model/alcohol-type';
import {AlcoholService} from '../../service/alcohol.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-spirits',
  templateUrl: './spirits.component.html',
  styleUrls: ['./spirits.component.css']
})
export class SpiritsComponent implements OnInit {
  totalRecord = 0;
  numberRecord = 0;
  nameSearch = '';
  spiritsList: IAlcoholDto[];
  moreSpiritslList: IAlcoholDto[];
  // AlcoholTypeList: AlcoholType[];
  content: boolean;
  numberPage = 0;
  type = 1;

  constructor(private alcoholService: AlcoholService,
              private title: Title) {
    this.title.setTitle('Rượu mạnh');
  }

  ngOnInit(): void {
    this.getAllSpiritsList();
  }

  getAllSpiritsList() {
    this.alcoholService.getAllAlcoholByType(this.numberRecord, this.nameSearch, this.type).subscribe(value => {
      console.log(value);
      // @ts-ignore
      this.totalRecord = Math.ceil(value.totalElements / 4);
      console.log(this.totalRecord);
      if (value != null) {
        this.content = true;
        if (this.numberRecord === 0) {
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

  loadMore() {
    this.numberRecord += 1;
    this.getAllSpiritsList();
  }

  search() {
    console.log(this.nameSearch);
    this.getAllSpiritsList();
  }
}
