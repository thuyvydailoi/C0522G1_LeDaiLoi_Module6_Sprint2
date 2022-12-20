import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {OrderDetailDto} from '../dto/order-detail-dto';
import {IAlcoholDto} from '../dto/i-alcohol-dto';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  private URL_API = 'http://localhost:8080/api/cart';

  constructor(private http: HttpClient) {
  }

  getCartList(): Observable<OrderDetailDto[]> {
    console.log(this.URL_API + '/list');
    return this.http.get<OrderDetailDto[]>(this.URL_API + '/list');
  }

  getTotalBill(): Observable<OrderDetailDto> {
    return this.http.get<OrderDetailDto>(this.URL_API + '/total-bill');
  }

  updateCart(iAlcoholDto: IAlcoholDto): Observable<void> {
    return this.http.post<void>(
      this.URL_API + '/cart-update' + '?id=' + iAlcoholDto.id, iAlcoholDto);
  }

  updateQuantity(orderDetailDto: OrderDetailDto): Observable<void> {
    return this.http.patch<void>(
      this.URL_API +
      '/quantity-update' +
      '?id=' +
      orderDetailDto.id +
      '&quantity=' +
      orderDetailDto.quantity,
      orderDetailDto
    );
  }

  removeProduct(id: number): Observable<any> {
    return this.http.delete<any>(
      this.URL_API + '/delete-product' + '?id=' + id
    );
  }
}
