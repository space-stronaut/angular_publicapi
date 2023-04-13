import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  // template: `
  //   <!-- Tampilkan daftar produk -->
  //   <h1>Daftar Produk</h1>
  //   <table>
  //   <tr>
  //     <th>ID</th>
  //     <th>Nama Produk</th>
  //     <th>Harga</th>
  //     <th>Action</th>
  //   </tr>
  //   <tr *ngFor="let product of products">
  //     <td>{{ product.id }}</td>
  //     <td>{{ product.title }}</td>
  //     <td>{{ product.price }}</td>
  //     <td><button (click)="deleteProduct(product.id)">Delete</button><button (click)="getProductById(product.id)">Show</button></td>
  //   </tr>
  //   </table>    

  //   <!-- Form untuk menambahkan produk baru -->
  //   <form (submit)="addProduct(newProduct)">
  //     <input [(ngModel)]="newProduct.name" placeholder="Nama Produk" required>
  //     <input [(ngModel)]="newProduct.price" placeholder="Harga Produk" required>
  //     <button type="submit">Tambah</button>
  //   </form>
  // `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports : [ButtonModule],
  // standalone : true
})
export class AppComponent {
  products: any[] = [];
  newProduct: any = {};
  product: any;

  constructor(private productService: ProductService, ngbAlertConfig: NgbAlertConfig) {
    ngbAlertConfig.animation = false
  }

  ngOnInit() {
    // Mengambil daftar produk saat komponen diinisialisasi
    this.getProducts();
  }

  // Fungsi untuk mengambil daftar produk
  getProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response.products;
        console.log(this.products)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Fungsi untuk menambahkan produk baru
  addProduct(product: any) {
    this.productService.addProduct(product).subscribe(
      (response) => {
        console.log('Produk berhasil ditambahkan:', response);
        this.getProducts(); // Mengambil daftar produk terbaru setelah penambahan
        this.newProduct = {}; // Mereset form input
      },
      (error) => {
        console.error('Gagal menambahkan produk:', error);
      }
    );
  }

  // Fungsi untuk menghapus produk
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      (response) => {
        console.log('Produk berhasil dihapus:', response);
        this.getProducts(); // Mengambil daftar produk terbaru setelah penghapusan
      },
      (error) => {
        console.error('Gagal menghapus produk:', error);
      }
    );
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(
      (response) => {
        this.product = response;
        console.log(this.product)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  
}
