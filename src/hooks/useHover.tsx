import React, {useState, useLayoutEffect, useRef} from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref: React.LegacyRef<any> = useRef(null)

    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }

    useLayoutEffect(() => {
        const {current} = ref

        if (null !== current) {
            current.addEventListener("mouseenter", enter)
            current.addEventListener("mouseleave", leave)
          }
        
        return () => {   
            if (null !== current) {
                current.addEventListener("mouseenter", enter)
                current.addEventListener("mouseleave", leave)
              }
        }
    }, [])
    
    return {hovered, ref}

}

export default useHover