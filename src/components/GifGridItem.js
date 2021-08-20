import React from 'react'
import "animate.css"

export const GifGridItem = ({id, title, url}) => {
    console.log(id,title,url)
    return (
        <div className="card className=card-grid animate__animated animate__bounce">
         <img src = {url} alt = {title}/>
         <p>{title}</p>
        </div>
    )
}
