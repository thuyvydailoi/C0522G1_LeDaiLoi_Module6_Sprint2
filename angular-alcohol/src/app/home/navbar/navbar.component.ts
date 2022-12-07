import { Component, OnInit } from '@angular/core';
import {AlcoholType} from '../../model/alcohol-type';
import {Alcohol} from '../../model/alcohol';
import {AlcoholService} from '../../service/alcohol.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  alcoholTypeList: AlcoholType[];

  constructor(private alcoholService: AlcoholService) {
  }

  ngOnInit(): void {
    this.getAllAlcoholType();
  }

  getAllAlcoholType() {
    this.alcoholService.getAllAlcoholType().subscribe(value => {
      console.log(value);
      this.alcoholTypeList = value;
    });
  }
}
