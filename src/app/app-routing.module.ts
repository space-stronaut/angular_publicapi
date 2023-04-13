import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { GuestGuard } from './guest.guard';

const routes: Routes = [
  { path: '', canActivate : [AuthGuard] ,component: ProductIndexComponent },
  { path: 'create', canActivate : [AuthGuard] ,component: ProductCreateComponent },
  { path: 'login', canActivate : [GuestGuard], component: LoginComponent },
  { path : "product/:id", canActivate : [AuthGuard] ,component : ProductDetailComponent },
  { path : "product/edit/:id", canActivate : [AuthGuard] , component : ProductEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [AuthGuard, GuestGuard]
})
export class AppRoutingModule { }
