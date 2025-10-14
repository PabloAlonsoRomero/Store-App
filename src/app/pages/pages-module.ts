import { NgModule } from '@angular/core';
import { ShopService } from '../core/services/shop.service';
import { ShopComponent } from './shop.component/shop.component';
import { OrdersComponent } from './orders.component/orders.component';
import { ProductsComponent } from './products.component/products.component';
import { InvoicesComponent } from './invoices.component/invoices.component';
import { AdminLayout } from './admin-layout/admin-layout';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './pages.routes';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { OrderDetailComponent } from './order-detail.component/order-detail.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { OrderService } from '../core/services/order.service';



@NgModule({
  declarations: [
    ShopComponent,
    ProductsComponent,
    InvoicesComponent,
    OrdersComponent,
    AdminLayout,
    OrderDetailComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(ADMIN_ROUTES), 
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzCardModule,
    NzTagModule
  ],
  providers: [
    ShopService,
    OrderService
  ],
  exports: [
    ShopComponent,
    ProductsComponent,
    InvoicesComponent,
    OrdersComponent,
    AdminLayout,
    RouterModule,
    OrderDetailComponent
  ]
})
export class PagesModule { }

/*
  Pasos para obtener datos de una api
  1. Ver la respuesta de una api
  2. Crear los modelos
  3. Crear el servicio ( Crear metodos y peticiones a traves del httpclient )
  4. Agregar el servicio al modulo o al standalone component
  5. Utilizar el servicio en el componente
*/