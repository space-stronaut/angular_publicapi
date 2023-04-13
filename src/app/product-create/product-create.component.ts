import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  newProduct: any = {};

  constructor(private productService: ProductService, private router: Router) {}

  addProduct(product: any) {
    // console.log(product)
    this.productService.addProduct(product).subscribe(
      (response) => {
        console.log('Produk berhasil ditambahkan:', response);
        // this.getProducts(); // Mengambil daftar produk terbaru setelah penambahan
        this.newProduct = {}; // Mereset form input
        alert('Produk Berhasil Ditambahkan')
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Gagal menambahkan produk:', error);
      }
    );
  }
}
