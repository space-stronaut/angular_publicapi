import { Component } from '@angular/core';
import { ProductService } from '../product.service';
// import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css'],
  // imports : [NgbPaginationModule, NgbTypeaheadModule]
})
export class ProductIndexComponent {
  // page = 1;
	// pageSize = 4;
  products: any[] = [];
  newProduct: any = {};
  product: any;
  query = '';
  currentPage: number = 1; // Halaman saat ini
  itemsPerPage: number = 10; // Jumlah item per halaman

  // collectionSize = this.products.length;

  constructor(private productService: ProductService) {
    // this.refreshProducts();
  }

  ngOnInit() {
    // Mengambil daftar produk saat komponen diinisialisasi
    this.getProducts();
  }

  // Fungsi untuk mengambil daftar produk
  getProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response.products as any[];
        console.log(this.products)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex(): number {
    return this.startIndex + this.itemsPerPage;
  }

  // Fungsi untuk mengganti halaman
  setPage(page: number) {
    this.currentPage = page;
  }

  get totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

//   onPageChange(product) {
//     this.first = products.first;
//     this.rows = products.rows;
// }

  // Fungsi untuk menghapus produk
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      (response) => {
        alert('Produk berhasil dihapus');
        this.getProducts(); // Mengambil daftar produk terbaru setelah penghapusan
      },
      (error) => {
        console.error('Gagal menghapus produk:', error);
      }
    );
  }

  onSearch() {
    this.productService.searchProducts(this.query).subscribe(
      (response) => {
        this.products = response.products as any[];
      },
      (error) => {
        console.error('Failed to fetch products:', error);
      }
    );
  }
}
