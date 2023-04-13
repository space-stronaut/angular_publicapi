import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  onSubmit() : void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // console.log('Produk berhasil ditambahkan:', response);
        // this.getProducts(); // Mengambil daftar produk terbaru setelah penambahan
        // this.newProduct = {}; // Mereset form input
        // alert('Produk Berhasil Ditambahkan')
        // this.router.navigate(['/']);
        alert("Berhasil")
        localStorage.setItem('username', response.username)
        localStorage.setItem('email', response.email)
        console.log(response)
        this.router.navigate(['/']);

      },
      (error) => {
        console.error('Gagal menambahkan produk:', error);
      }
    );

    // console.log(this.cred)
  }
}
