"use client"
import { createContext, useState, useContext } from "react"

const CartContext = createContext([]);

export const ContextProvider = ({ children }) => {
    const [productsCart, setProductsCart] = useState({
        totalProduct: 1,
        products: [
            {

                title: "Rich Dad Poor Dad",
                price: "14.99",
                description: "lorem dolar eilte, solar no cool kuto thaition.",
                image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
                evaluation: "4",
                author: "Jaims Cler",
                pages: "413",
                items: 1
            }
        ]
    })

    return (
        <CartContext.Provider value={{ productsCart, setProductsCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const useCart = useContext(CartContext)
    return useCart
}

