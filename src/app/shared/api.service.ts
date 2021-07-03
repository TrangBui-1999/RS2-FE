import { Product } from 'src/app/shared/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  products : Product[]=[
    new Product(1,20,'Product 1',100, "This is product 1"),
    new Product(2,25,'Product 2',200, "This is product 2","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5XryYc0H2mGOue_2L-Ih-ZTWuRTWhfoo9U7SYABHUV1zJzvjbTA&usqp=CAc"),
    new Product(3,30,'Product 3',300, "This is product 3","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCVFv4V1c4Ok1BTK7poctzCNZWKNbWPrVwPfl1t5HzGNH8-2bsQQ&usqp=CAc"),
    new Product(4,35,'Product 4',400, "This is product 4","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5XryYc0H2mGOue_2L-Ih-ZTWuRTWhfoo9U7SYABHUV1zJzvjbTA&usqp=CAc"),
    new Product(5,40,'Product 5',500, "This is product 5","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCVFv4V1c4Ok1BTK7poctzCNZWKNbWPrVwPfl1t5HzGNH8-2bsQQ&usqp=CAc"),
    new Product(6,45,'Product 6',600, "This is product 6"),
    new Product(7,50,'Product 7',700, "This is product 7","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCVFv4V1c4Ok1BTK7poctzCNZWKNbWPrVwPfl1t5HzGNH8-2bsQQ&usqp=CAc"),
    new Product(8,55,'Product 8',800, "This is product 8","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS5XryYc0H2mGOue_2L-Ih-ZTWuRTWhfoo9U7SYABHUV1zJzvjbTA&usqp=CAc"),
    new Product(9,60,'Product 9',900, "This is product 0")
  ]

  constructor() {}

  getProducts(): Product[]{
    return this.products
  }
}
