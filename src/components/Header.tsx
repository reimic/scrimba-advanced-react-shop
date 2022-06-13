import React from "react"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex justify-between px-10 py-10 text-xl border-b-2 border-gray-100">

            <Link to="/">
                <button className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-5 rounded-md">
                    Go to pictures
                </button>
            </Link>

            <Link to="/cart">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-5 rounded-md">
                    Go to cart
                </button>
            </Link>
           
        </header>
    )
}

export default Header