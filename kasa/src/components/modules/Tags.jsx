import React from "react"
import "../../css/Tags.css"

export default function Tag(props) {
    const tagValue = props.tagValue

    return(
        <div className="tag-container">{
           
            tagValue.map((tag) => { 
                return <p className="tag" key={tag}>{tag}</p>
            })
        }</div>
    )

}