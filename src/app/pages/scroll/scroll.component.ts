import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HttpClient } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';

interface Product {
  id: string;
  title: string;
  price: string;
  images: string[];
}
@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, ScrollingModule],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss'
})
export class ScrollComponent {
  products: Product[] = [];
  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => { //sucribbcion para recibir la información
      this.products = data;
    })
  }
}
