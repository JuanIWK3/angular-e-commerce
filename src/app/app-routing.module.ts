import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CartComponent } from './component/cart/cart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { OrdersComponent } from './component/orders/orders.component';
import { ProductsComponent } from './component/products/products.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrdersComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
