/**
 * Gérer un panier de produits.
 *
 * - Possibilité d'ajouter un produit avec sa quantité.
 *  (Sélection du produit parmis une liste + quantité)
 * - Possibilité de changer la quantité d'un produit.
 * - Possibilité de supprimer un produit complètement du panier.
 *
 * - Afficher la liste des produits du panier (name, quantity, total price).
 * - Afficher le prix total du panier ainsi que le nombre de produits.
 */
/**
 * Product = {
 *  id: number,
 *  name: string,
 *  price: number
 * }
 * CartItem = {
 *  product: number
 *  quantity: number
 * }
 */
import { useState } from "react";
import { Basket } from "../components/Button.js";
import ProductList from "../components/ProductList.js";
//import {Basket} from "../components/Button.js";

const style={
    width:"100%",
    heigth:"100%",
    backgroundColor: "purple",
    color: "white",

    display:"flex",
    
}

export default function Cart(){
    const [cart, setCart] = useState([])
    return(
        <div className="Container" style={style}>
            <header className="C-header" style={{}}>
                Item list
            </header>

            <ProductList cart={cart} setCart={setCart} />
            <Basket cart={cart}/>
        </div>
    );
};
