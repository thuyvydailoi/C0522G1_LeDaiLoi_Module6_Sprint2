import {Component, OnInit} from '@angular/core';
import {OrderDetailService} from '../service/order-detail.service';
import {OrderDetailDto} from '../dto/order-detail-dto';
import Swal from 'sweetalert2';
import {render} from 'creditcardpayments/creditCardPayments';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-alcohol',
  templateUrl: './cart-alcohol.component.html',
  styleUrls: ['./cart-alcohol.component.css']
})
export class CartAlcoholComponent implements OnInit {
action: boolean;
  cart: OrderDetailDto[];
  totalBill: number;

  constructor(private orderDetailService: OrderDetailService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCart();
    this.getTotalBill();
  }

  getAllCart() {
    this.orderDetailService.getCartList().subscribe(value => {
      console.log(value);
      this.cart = value;
    });
  }

  getTotalBill() {
    this.orderDetailService.getTotalBill().subscribe(value => {
      console.log(value);
      this.totalBill = value.totalBill;
    });
  }

  updateQuantity(cart: OrderDetailDto) {
    console.log(cart);
    this.orderDetailService.updateQuantity(cart).subscribe(value => {
      this.ngOnInit();
    });
  }

  payment(): void {
    this.action = false;
    render(
      {
        id: '#myPayPal',
        value: String((this.totalBill / 23580).toFixed(2)),
        currency: 'VND',
        onApprove: (details) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Cảm ơn quý khách !',
            timer: 2000,
            title: 'Đã thanh toán thành công',
            showConfirmButton: false,
          });
          this.router.navigateByUrl('cart');
        }
      }
    );
  }
}
