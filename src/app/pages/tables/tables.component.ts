import { Component } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { DataSourceProduct } from './data-source';
import { FormControl } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
interface Product {
  id: string;
  title: string;
  price: string;
  images: string[];
}
@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CdkTableModule, NavbarComponent, ReactiveFormsModule],
  templateUrl: './tables.component.html'
})
export class TablesComponent {
  dataSource = new DataSourceProduct;

  // el orden de las columnas de la tabla se establece aqui
  columns: string[] = ['id', 'title', 'price']
  input = new FormControl('', {nonNullable:true})
  constructor(
    private http: HttpClient
  ){}
  // conexion al back
  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => { //sucribbcion para recibir la información
      this.dataSource.init(data);
    })

    // suscribirnos al valor que cambis enel input, un tiempo en tre cada interaccion para que ejecute la acion, conectamos con el vaor que llegue al input    
    this.input.valueChanges.pipe(debounceTime(300)).subscribe( value => this.dataSource.find(value))
  }
// funcion para actualizar datos, se le pasa el producto con el id, y cual propiedad se quiere actualizar 
  update(product: Product){
    this.dataSource.update(product.id, { price: '100'})

  }
}
