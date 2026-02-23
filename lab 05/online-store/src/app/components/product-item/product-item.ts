import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {

  product = input.required<Product>();
  remove = output<number>();

  like(): void {
    this.product().likes++;
  }

  delete(): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.remove.emit(this.product().id);
    }
  }

  shareWhatsApp(): void {
    const message = `Check this product: ${this.product().link}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  }

  shareTelegram(): void {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`,
      '_blank'
    );
  }
}
