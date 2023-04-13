import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: any;
  editProduct: any = {};
  // ids : number

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
    const id = params['id'];
    this.getProductById(id)
    console.log('ID:', id);
  });
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

  updateProduct(id : number, product: any) {
    this.productService.updateProduct(id, product).subscribe(
      (response) => {
        console.log('Produk berhasil diupdate:', response);
        // Mengambil daftar produk terbaru setelah penambahan
        alert("Product Berhasil di Update")
        this.router.navigate(['/']);
        this.editProduct = {}; // Mereset form input
      },
      (error) => {
        console.error('Gagal menambahkan produk:', error);
      }
    );
  }
}
