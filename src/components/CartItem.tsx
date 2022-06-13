import { useState, useContext } from "react"
import { Context } from "../utilities/Context"

type Props = {
    photoId: string,
    url: string,
  }

export default function CartItem(props: Props){
    const {manageCart} = useContext(Context)
    
    return(
        <>
        <li className="flex justify-between content-center items-center border mx-3 my-3">
            <img 
                className="ml-2 mr-5 my-2 object-cover h-[200px] w-[200px]"
                src={props.url}
            />
            
            <svg
                onClick={(e)=>{manageCart && manageCart(props.photoId)}}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>

            <div className="flex justify-end items-centermx-3 my-3 col-start-2 text-xl">
                <p>
                    Price:
                </p>
                <span className="ml-3 mr-3 text-xl">
                    $5.99
                </span>
            </div>
        </li>
        </>
    )
}