import React from 'react';
import '../../css/style-post.css'
import '../../css/style.css'

//Assets
import image1 from "../../img/image-1.jpg"
import image2 from "../../img/image-2.jpg"
import image3 from "../../img/image-3.jpg"
import image4 from "../../img/image-4.jpg"
import image5 from "../../img/image-5.jpg"


function Publicidad() {
    return (
        <div className="col d-block imagenes-lateral">
            <h3 id="title-imagenes">Publicidad</h3>
            <div className="images">
                <figure>
                    <img src={image1} width="150" alt="imagen-publicidad"/>
                </figure>
                <figure>
                    <img src={image2} width="150" alt="imagen-publicidad"/>
                </figure>
                <figure>
                    <img src={image3} width="150" alt="imagen-publicidad"/>
                </figure>
                <figure>
                    <img src={image4} width="150" alt="imagen-publicidad"/>
                </figure>
                <figure>
                    <img src={image5} width="150" alt="imagen-publicidad"/>
                </figure>
            </div>
        </div>

    )
}

export default Publicidad;
