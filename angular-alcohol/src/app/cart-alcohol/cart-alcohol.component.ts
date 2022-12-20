import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {OrderDetailDto} from '../dto/order-detail-dto';
import {Router} from '@angular/router';
import {OrderDetailService} from '../service/order-detail.service';

@Component({
  selector: 'app-cart-alcohol',
  templateUrl: './cart-alcohol.component.html',
  styleUrls: ['./cart-alcohol.component.css']
})
export class CartAlcoholComponent implements OnInit {
  // cartList: Observable<[OrderDetailDto]> | undefined;
  // totalBill: number | undefined;

  // payPalConfig: IPayPalConfig;
  constructor(
    // private orderDetailService: OrderDetailService,
    // private router: Router,
    // private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    // cart();
    // scrollTo(0, 0);
    // this.getAllInCart();
    // this.getTotalBill();
    // this.initConfig();
    // this.primengConfig.ripple = true;
  }

  // getAllInCart() {
  //   this.orderDetailService.getCartList().subscribe((value) => {
  //     if (value == null) {
  //       this.router.navigateByUrl('');
  //     }
  //     console.log(value);
  //     // @ts-ignore
  //     this.cartList = new BehaviorSubject<OrderDetailDto[]>(value);
  //   });
  // }

  // getTotalBill() {
  //   this.orderDetailService.getTotalBill().subscribe((value) => {
  //     console.log(value);
  //     this.totalBill = value.totalBill;
  //   });
  // }

  // updateQuantity(orderDetailDto: OrderDetailDto) {
  //   console.log(orderDetailDto);
  //   this.orderDetailService.updateQuantity(orderDetailDto).subscribe((value) => {
  //     this.ngOnInit();
  //   });
  // }

  // removeProduct(product: OrderDetailDto) {
  //   this.orderDetailService.removeProduct(product.id).subscribe((value) => {
  //     this.ngOnInit();
  //   });
  // }

  // private initConfig(): void {
  //   this.payPalConfig = {
  //     currency: 'EUR',
  //     clientId: 'sb',
  //     createOrderOnClient: (data) =>
  //       <ICreateOrderRequest>{
  //         intent: 'CAPTURE',
  //         purchase_units: [
  //           {
  //             amount: {
  //               currency_code: 'EUR',
  //               value: '9.99',
  //               breakdown: {
  //                 item_total: {
  //                   currency_code: 'EUR',
  //                   value: '9.99',
  //                 },
  //               },
  //             },
  //             items: [
  //               {
  //                 name: 'Enterprise Subscription',
  //                 quantity: '1',
  //                 category: 'DIGITAL_GOODS',
  //                 unit_amount: {
  //                   currency_code: 'EUR',
  //                   value: '9.99',
  //                 },
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     advanced: {
  //       commit: 'true',
  //     },
  //     style: {
  //       label: 'paypal',
  //       layout: 'vertical',
  //     },
  //     onApprove: (data, actions) => {
  //       console.log(
  //         'onApprove - transaction was approved, but not authorized',
  //         data,
  //         actions
  //       );
  //       actions.order.get().then((details: any) => {
  //         console.log(
  //           'onApprove - you can get full order details inside onApprove: ',
  //           details
  //         );
  //       });
  //     },
  //   };
  // }
}
