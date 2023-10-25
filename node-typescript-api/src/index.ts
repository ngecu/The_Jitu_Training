import express, {Request, Response} from 'express';
import * as dotenv from 'dotenv';

import { addProduct, deleteProduct, getSpecificProduct, getProducts, updateProduct } from './data'
dotenv.config();


const app = express();
app.use(express.json())

app.get('/', (req:Request, res:Response)=>{
      res.send("Test okay")
})

app.get("/products", (req: Request, res:Response)=>{
      let products = getProducts();
      res.json(products)
})

app.get('/products/:productID', (req:Request, res:Response )=>{
      let {productID} = req.params;
      let parsedID = parseInt(productID)
      let product = getSpecificProduct(parsedID);

      res.json(product)
})

app.delete("/products/:productID", (req:Request, res:Response)=>{
      let {productID} = req.params;
      let parsedID = parseInt(productID);

      let result = deleteProduct(parsedID);

      if(result !== null){
            res.send(`Product on index: ${result} deleted`);
      }else{
            res.send("Product not found")
      }
})

app.post("/products", (req: Request, res:Response)=>{
      let new_product = req.body;
      let id = Date.now();
      new_product.id = id;

      addProduct(new_product);
      res.json({
            id,
            sucess: true
      })
})

app.put("/products/:productID", (req:Request, res:Response)=>{
      let { productID } = req.params;
      let parsedID = parseInt(productID)
      let updatedProduct = req.body;

      let result = updateProduct(parsedID, updatedProduct);
      if (result) {
            return res.json({
                  id: parsedID,
                  success: true
            })
      }
      return res.json({
            success: false
      })
})


const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`App running on port: ${port}`));