import React, { useContext, useState, useEffect } from "react"
import { Context } from "../utilities/Context"
import CartItem from "../components/CartItem"
import { Link } from "react-router-dom";

function Cart() {
    const {cartItems, setCartItems} = useContext(Context)
    const cartLength = cartItems.length
    const cartValue = cartItems.length*5.99
    const [orderState, setOrderState] = useState("Place the order!")
    
    useEffect(()=>{
        function handleButton() {
            if(cartItems.length === 0){
                setOrderState("Go get some pictures!")
            } else if (cartItems.length > 0) {
                setOrderState("Place the order!")
            }
        }
        handleButton()
    },[])

    function handleClick(){
        setOrderState("Ordering...")
        setTimeout(()=>{
            setOrderState("Order placed!")
            setCartItems && setCartItems([])
        },3000)
    }

    return (
        <div className="relative">
            <main className="grid grid-cols-[minmax(1rem,_1fr)_minmax(auto,_100ch)_minmax(1rem,_1fr)]">
                <h1 className="flex justify-center items-center mx-3 my-10 col-start-2 text-3xl">
                    Your cart
                </h1>
                <ul className="col-start-2">
                {cartItems.map( item => {
                return <CartItem
                            key={item.id}
                            photoId={item.id}
                            url={item.url}
                        />
                })}
                </ul>
                <div className="col-start-2 h-[200px]">
                    
                </div>
            </main>
            <div className="fixed z-10 bottom-0 border-t-2 w-[100%] bg-white">
                <div className="grid grid-cols-[minmax(1rem,_1fr)_minmax(auto,_100ch)_minmax(1rem,_1fr)]">
                    <>
                    <div className="flex justify-end items-center mx-3 my-6 text-2xl col-start-2">
                        <p>
                            Cart total:
                        </p>
                        <span className="ml-3 mr-3">
                        {cartValue.toLocaleString("en-US", {style: "currency", currency: "USD"})}
                        </span>
                    </div>
                    {(cartLength === 0) && 
                    <Link to="/" className="flex justify-self-center col-start-2">
                        <button 
                        className="cursor-pointer flex justify-self-center mx-3 mt-3 mb-10 col-start-2 text-3xl bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-16 rounded-md"
                        >
                        {orderState}
                        </button>
                    </Link>
                    }

                    {(cartLength > 0) &&
                    <button
                        className="cursor-pointer flex justify-self-center mx-3 mt-3 mb-10 col-start-2 text-3xl bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-16 rounded-md"
                        onClick={()=>handleClick()}
                        >
                        {orderState}
                    </button>
                    }
                    </>
                </div>
            </div>
        </div>
    )
}

export default Cart