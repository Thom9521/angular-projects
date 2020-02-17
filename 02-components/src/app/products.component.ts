import { Component } from "@angular/core";
import { ProductService } from "./product.service";

@Component({
  selector: "products",
  template: `
    <h4 style="color:blue">{{ me }}</h4>
    <h2>Products</h2>
    <ul>
      <li *ngFor="let product of products">
        {{ product }}
      </li>
    </ul>
  `
})
export class ProductsComponent {
  products: string[];
  me: string;
  constructor(productService: ProductService) {
    this.products = productService.getProducts();
    this.me = productService.getMe();
  }
}
