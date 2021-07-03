export class Product {
  id: number;
  product_name: String;
  description: String;
  product_price: number;
  imageUrl: String;
  stock: number;

  constructor(id = 0,stock=0, product_name = "", product_price = 0, description = "", imageUrl = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSlrgW2okaZ6z_-aDWZszUZBRA1MFKMiTOVWRFKnmfum5bLiXluaQ&usqp=CAc") {
      this.id = id
      this.product_name = product_name
      this.product_price = product_price
      this.description = description
      this.imageUrl = imageUrl
      this.stock=stock
  }

}
