import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {

  products = input.required<Product[]>();

  removeProduct(productId: number): void {
    const index = this.products().findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products().splice(index, 1);
    }
  }
}
