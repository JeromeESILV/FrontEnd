import {MoL} from "./Button.js"

export const products = [
  {
    id: 0,
    name: "Product 1",
    stocks: 10,
  },
  {
    id: 1,
    name: "Product 2",
    stocks: 0,
  },
  {
    id: 2,
    name: "Product 3",
    stocks: 10,
  },
];
const style = {
  width:"10%",
  border:"3px solid black",
  borderRadius:"15%",
  margin:"10px",

  display:"flex",
  justyfyContent:"center",
  alignItems:"center",
  flexDirection:"column",
  
}
export default function ProductList({cart, setCart}) {
  return (
    <div>
      <ul>
        {products
          .filter((p) => p.stocks)
          .map((product) => (
            <div key={product.id} style={style}>
              <div>
                <p id={product.id}>{product.name}</p>
              </div>
              <div>
              <MoL
                dir="down"
                id ={product.id}
                cart={cart}
                setCart={setCart}
              />
              <MoL
                  dir="up"
                  id={product.id}
                  cart={cart}
                  setCart={setCart}
              />
              </div>
          </div>
          ))}
      </ul>
      Total Stock : {products.reduce((acc, p) => acc + p.stocks, 0)}
    </div>
  );
}

//[
//    "product 1",
//    "product 2",
//    "product 3"
//];
