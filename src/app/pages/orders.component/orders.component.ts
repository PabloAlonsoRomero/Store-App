import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { Order } from '../../core/models/order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
  standalone: false
})
export class OrdersComponent implements OnInit{

  constructor(
    private orderService : OrderService
  ) {}

  orders : Order[] = [];

  // PETICIONES SON ASINCRONAS
  // ASYNC
  // OBSERVABLE RXJS

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(res => {
      console.log(res)
      this.orders = res;
    })
    console.log("Fin del componente")
  }

  showModal(order: Order) {
    console.log('El boton fue presionado')
  }
}
