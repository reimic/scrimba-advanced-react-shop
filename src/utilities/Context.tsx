import React, { createContext, useState, useEffect } from "react"

interface ContextInterface {
    photos: {
        url: string,
        id: string,
        isFavorite: boolean
    }[],
    toggleFavorite?: Function,
    cartItems: {
        url: string,
        id: string,
        isFavorite: boolean
    }[],
    manageCart?: Function,
    setCartItems?: React.Dispatch<React.SetStateAction<any[]>>
}

const Context = createContext<ContextInterface>({photos: [], cartItems: []})

type Props = {
    children?: React.ReactNode;
  };

function ContextProvider({children}: Props){
    const [allPhotos, setAllPhotos] = useState<any[]>([])
    const [cartItems, setCartItems] = useState<any[]>([])
    
    function toggleFavorite(id: string){
        setAllPhotos(prevAllPhotos => {
            return prevAllPhotos.map(photo => photo.id === id ? {...photo, isFavorite: !photo.isFavorite} : photo)
        })
    }

    function manageCart(id: string){
        setCartItems(prevCartItems => {
            let newCart: any[] = []
            prevCartItems.forEach(item => newCart.push(item))
            let clickedItem = newCart.find(item => item.id === id)
            if (clickedItem) {
                newCart.splice(newCart.indexOf(clickedItem), 1)
            } else {
                newCart.push(allPhotos.find(photo => photo.id === id))
            }
            return newCart
        })
    }

    useEffect( () => {
        async function fetchPhotos() {
            const response = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            const data = await response.json()
            setAllPhotos(data)
        }
        fetchPhotos()
    },[])

    return(
        <Context.Provider value={
            {photos: allPhotos,
            toggleFavorite: toggleFavorite,
            cartItems: cartItems,
            manageCart: manageCart,
            setCartItems: setCartItems,
            }}
            >
        {children}
        </Context.Provider>   
    )
}

export {ContextProvider, Context}