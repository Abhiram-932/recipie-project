import React from "react";
const Recpie=({title,image,ingredients})=>{
    return(
        <div className="cool">
            <h1 className="recipe">{title}</h1>
            <img src={image} alt=""></img>
            <ul className="hi">
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                    ))}
                
            </ul>
            
            
        </div>
    )
}
export default Recpie