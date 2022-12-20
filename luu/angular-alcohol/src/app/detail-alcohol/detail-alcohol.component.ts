import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IAlcoholDto} from '../dto/i-alcohol-dto';
import {AlcoholService} from '../service/alcohol.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-alcohol',
  templateUrl: './detail-alcohol.component.html',
  styleUrls: ['./detail-alcohol.component.css']
})
export class DetailAlcoholComponent implements OnInit {
  id: number;
  alcohol$: BehaviorSubject<IAlcoholDto>;
  constructor(private alcoholService: AlcoholService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.params.id);
    this.alcoholService.findById(this.id).subscribe(value => {
      window.scroll(0, 0);
      console.log(value);
      this.alcohol$ = new BehaviorSubject(value);
    });
  }

}
