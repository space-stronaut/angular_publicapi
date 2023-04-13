import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
    const id = params['id'];
    this.getProductById(id)
    // Lakukan sesuatu dengan id, misalnya mengambil data dari server
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
  
}
