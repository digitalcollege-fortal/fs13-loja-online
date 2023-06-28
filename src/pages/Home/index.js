import React from "react";

import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import FeaturedCollections from "../../components/FeaturedCollections";
import Carousel from "../../components/Carousel";


import imgBlack from "./img/facebook-black.png";
import imgBlue from "./img/facebook-blue.png";
import rapadura from "./img/PHPcomRapadura.svg";

import "./styles.scss";

export default function Home() {
    const [img, setImg] = React.useState(imgBlack);
    const [classe, setClasse] = React.useState('img-black')

    return (
        <div>
            <Navbar/>

            <Menu/>

            <Carousel/>

            <FeaturedCollections/>

            <div>
                {/* Exemplo usando imagem png ou jpg */}
                <img 
                    onMouseLeave={() => setImg(imgBlack)} 
                    onMouseEnter={() => setImg(imgBlue)} 
                    src={img} 
                    width="100px"
                />

                {/* Exemplo usando imagem svg */}
                <img 
                    onMouseLeave={() => setClasse('img-black')} 
                    onMouseEnter={() => setClasse('img-orange')} 
                    className={classe}
                    src={rapadura} 
                    width="200px"
                />

                {/* Exemplo usando imagem com css */}
                <img 
                    className={"img-teste"}
                    src={rapadura} 
                    width="200px"
                />
            </div>

            <div>
                Produtos
            </div>

            <div>
                Oferta Especial
            </div>

            <Footer/>
        </div>
    )
}