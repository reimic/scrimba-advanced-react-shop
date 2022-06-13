import { useContext } from "react"
import useHover from "../hooks/useHover"
import { Context } from "../utilities/Context"

type Props = {
    photoId: string,
    url: string,
    class: string,
  }

export default function Image(props: Props){
    const { hovered, ref } = useHover()
    const {photos, toggleFavorite, cartItems, manageCart} = useContext(Context)
    const [fav] = photos.filter(photo => photo.id === props.photoId)
    const [inCart] = cartItems.filter(item => item.id === props.photoId)
    return(
        <div 
            className={`relative ${props.class}`}
            ref={ref}
           
            >
            <img 
                className="object-cover h-[100%] w-[100%]"
                src={props.url}
                
            />
            {/* favourite button */}
            {(hovered || fav.isFavorite) &&
                <>
                <svg
                    onClick={(e) => {toggleFavorite && toggleFavorite(props.photoId)}}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 absolute top-5 left-5 z-10 cursor-pointer"
                    fill={fav.isFavorite ? "black" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
                <svg
                    className="h-14 w-14 absolute top-4 left-4 z-0 "
                    >
                    <circle cx="20" cy="20" r="20" fill="white" fillOpacity="0.5"/>
                </svg>
                </>
            }

            {/* cart button */}
            { (hovered || inCart) &&
                <>
                <svg
                    onClick={(e) => {manageCart && manageCart(props.photoId)}}
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-8 w-8 absolute top-5 right-5 z-10 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>         
                <svg
                    className="h-14 w-10 absolute top-4 right-4 z-0 "
                    >
                    <circle cx="20" cy="20" r="20" fill="white" fillOpacity="0.5" />
                </svg>
                </>
            }   
        </div>
    )
}