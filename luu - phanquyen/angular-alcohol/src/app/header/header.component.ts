import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../service/token-storage.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {OrderDetailService} from '../service/order-detail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  count: number;

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router,
              private orderDetailService: OrderDetailService) {
  }

  ngOnInit(): void {
    this.username = '';
    this.showUsername();
    // console.log(this.username);
    this.getCount();
  }

  showUsername() {
    if (this.tokenStorageService.getUser() != null) {
      console.log();
      this.username = this.tokenStorageService.getUser().username;
    }
  }

  whenLogout() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: ' Đăng xuất thành công !',
      showConfirmButton: false,
      timer: 1000
    });
    this.tokenStorageService.logOut();
    this.router.navigateByUrl('');
    this.username = '';
  }

  getCount() {
    this.orderDetailService.getTotalBill().subscribe(value => {
      console.log(value);
      this.count = value.countAlcohol;
    });
  }
}
