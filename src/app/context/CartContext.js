"use client"
import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react"
import Url from "../Url";

const CartContext = createContext([]);

export const ContextProvider = ({ children }) => {
    const [productsCart, setProductsCart] = useState({
        totalProduct: 0,
        products: [


        ]
    })

    const [token, setToken] = useState()
    useEffect(() => {
        localStorage.getItem("token") ? setToken(localStorage.getItem("token")) : setToken(false)
    }, [])
    useEffect(() => {
        const fetch = async () => {
            if (token) {
                const result = await axios.get(`${Url}/carts/my-cart`, { headers: { Authorization: `Bearer ${token}` } })

                const data = result.data.cart.products
                setProductsCart({totalProduct: data.length, products: data})
                console.log(data)
            }

        }
        fetch()
    }, [token])
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

