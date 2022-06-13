import { useContext } from "react"
import { resolvePath } from "react-router-dom";
import Image from "../components/Image"
import { Context } from "../utilities/Context"

function Photos() {
    const {photos} = useContext(Context)
    function getClass(i: number): string {
        if (i % 5 === 0) {
            return 'col-span-2';
        }
        else if (i % 6 === 0) {
            return 'row-span-2 col-span-2'
        } else {
            return ''
        }
    }
    return (
        <div id="grid" className="grid [grid-template-columns:_repeat(auto-fit,_minmax(400px,_1fr))] auto-rows-[400px] grid-flow-row-dense">
        {photos.map( (photo, i) => {
            return <Image
                        class={getClass(i)}
                        key={photo.id}
                        photoId={photo.id}
                        url={photo.url}
                    />
        })}
        </div>
    )
}

export default Photos 
