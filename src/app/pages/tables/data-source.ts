// extender la data y poner todas las reglas de manipulacion de datos
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
interface Product {
    id: string;
    title: string;
    price: string;
    images: string[];
}
export class DataSourceProduct extends DataSource<Product> {
    data = new BehaviorSubject<Product[]>([]);
    originalData : Product[] = [];
    connect(): Observable<Product[]> {
        return this.data;
    }
    init(products: Product[]){
        this.originalData = products;
        this.data.next(products)
    }
    update(id: Product['id'], changes: Partial<Product>){
        const products = this.data.getValue();
        const productIndex = products.findIndex(item => item.id === id)
        if ( productIndex !== -1){
            // unimos lo que ya habia con los cambios que me enviaron
            products[productIndex] = {
                ...products[productIndex],
                ...changes
            }
            // tranmitir ese cambio
            this.data.next(products);
        }
    }

    find(query:string){

        const newProducts= this.originalData.filter(element=>element.title.toLowerCase().includes(query.toLocaleLowerCase())|| element.price.toString()===query);
        // comunicar el nuevo array de productos al observavble 
        this.data.next(newProducts)
    }
    override disconnect(collectionViewer: CollectionViewer): void {
        
    }
}