import { products } from "./ProductList";

export default function Button({
  title = "Add to Cart",
  backgroundColor = "blue",
  color = "white",
  rounded = true,
  onClick = "Add to Cart",
}) {
  if (!onClick) {
    throw new Error("no onClick function provided");
  }
  const styles = {
    backgroundColor,
    color,
  };
  if (rounded) {
    styles.borderRadius = "50%";
  }

  return (
    <button style={styles} onClick={onClick}>
      {title}
    </button>
  );
}

const upStyle = {
  color: "green",
  width: "0px",
  height: "0px",
  border: "15px solid purple",
  borderTopColor: "purple",
  borderRightColor: "purple",
  borderBottomColor: "green",
  borderLeftColor: "purple",
}
const downStyle = {
  color: "red",
  width: "0px",
  height: "0px",
  border: "15px solid purple",
  borderTopColor: "red",
  borderRightColor: "purple",
  borderBottomColor: "purple",
  borderLeftColor: "purple",
}

export function MoL({
  dir,
  id,
  cart,
  setCart,
}) {
  const style = dir === "up" ? upStyle : downStyle
  let onClick;

  if(dir ==="up"){
    onClick= ()=>{
      const item = cart.findIndex((item)=> item.id === id)

      switch (item) {
        case -1:
          setCart([...cart, { product: products[id].name, quantity: 1, id: id }])
          break;
      
        default:
          setCart(cart.map((item)=> {if(item.id === id){
            return {...item, quantity: item.quantity + 1}
          }
        return item
      }) )
          break;
      }
    }
  }else if(dir ==="down"){
    onClick= ()=>{
      const item = cart.findIndex((item)=> item.id === id)

      switch (item) {
        case -1:
          alert("This item isnt in your cart yet (┬┬﹏┬┬)")
          break;
      
        default:
          if(cart[item].quantity === 1){
            cart.splice(item, 1)
            const cpy = [...cart]
            setCart(cpy)
            break;
          }
          setCart(cart.map((item)=> {if(item.id === id){
            return {...item, quantity: item.quantity - 1}
          }
        return item
      }) )
          break;
      }
    }
  }

  return (
    <button style={style} onClick={onClick}>
    </button>
  );
}

export function Basket({
  cart,
}){
  const styles ={
    color : "white",
    position : "fixed",
    top : "0",
    right : "0",
  }

  return(
    <div style={styles}>
      {cart.map((item)=> <p>{item.product} {item.quantity}</p>)}
    </div>
  )
}