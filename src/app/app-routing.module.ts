import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // http://localhost:4200/
  { path: 'produtos', component: ProdutosComponent }, // http://localhost:4200/produtos
  { path: 'pedidos', component: PedidosComponent }, // http://localhost:4200/pedidos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
