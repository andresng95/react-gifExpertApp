import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
import "animate.css"

export const GifGrid = ({category}) => {
    //const [count, setCount] = useState(0);

    const {data,loading} = useFetchGifs(category);

   
   // getGifs();
    return (
        <>
      <h3 className="card-grid animate__animated animate__bounce" >{category}</h3>
     {loading && <p>loading</p>}
        {<div className="card-grid animate__animated animate__bounce">
                {
                data.map(img=>(
                   <GifGridItem
                   key={img.id}
                   {...img}
                   />
                ))
                }
     
        </div> }
        </>
    )
}
