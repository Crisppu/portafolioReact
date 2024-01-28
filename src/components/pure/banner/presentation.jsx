import React, { useState } from 'react';

import SvgComponentIconFacebook from '../../imageSvgComponent/iconSocialNetwork/svgComponentIconFacebook';
import SvgComponentIconTwitter from '../../imageSvgComponent/iconSocialNetwork/svgComponentIconTwitter';
import SvgComponentIconInstagram from '../../imageSvgComponent/iconSocialNetwork/svgComponentIconInstagram';
import SvgComponentIconLinkedin from '../../imageSvgComponent/iconSocialNetwork/svgComponentIconLinkedin';
import SvgComponentIconTikTok from '../../imageSvgComponent/iconSocialNetwork/svgComponentIconTikTok';




const Presentation = () => {

 

    const [colorFacebook, setColorFacebook] = useState(false);
    const [colorTwitter, setColorTwitter] = useState(false);
    const [colorInstagram, setColorInstagram] = useState(false);
    const [colorLinkedin, setColorLinkedin] = useState(false);
    const [colorTikTok, setColorTikTok] = useState(false);




    const socialNetworksList = [
        {name:'Facebook',href:'',svg:SvgComponentIconFacebook, stateColor: colorFacebook },
        {name:'Twitter',href:'',svg:SvgComponentIconTwitter, stateColor:colorTwitter},
        {name:'Instagram',href:'',svg:SvgComponentIconInstagram, stateColor:colorInstagram},
        {name:'Linkedin',href:'',svg:SvgComponentIconLinkedin, stateColor:colorLinkedin},
        {name:'TikTok',href:'',svg:SvgComponentIconTikTok, stateColor:colorTikTok},



    ];
    const stateA = (name)=>{
        if(name === 'Facebook'){
            setColorFacebook((r)=>!r);
        }else if (name === 'Twitter'){
            setColorTwitter((r)=>!r)
        }else if (name === 'Instagram'){
            setColorInstagram((r)=>!r)
        }else if (name === 'Linkedin'){
            setColorLinkedin((r)=>!r)
        }else if (name === 'TikTok'){
            setColorTikTok((r)=>!r)
        }
    }

    return (
        <div className='banner__presentation'>
            <div className='banner__presentation__recognition'>
                <div className='banner__presentation__containerTitles'>
                    <h1 className="banner__presentation__greeting">
                        Diseñador, Desarrollador Jr.Full-Stack
                    </h1>
                    <h2 className="banner__presentation__university">
                    Mi enfoque es dar soluciones para Transformar Ideas en Realidad
                    </h2>
                </div>
                <ul className='banner__presentation__list wrapper'>
                    {/* <!-- Pon los enlaces de tus redes sociales favoritas --> */}
                    {
                        socialNetworksList.map((socialNetwork, index)=>(
                                <React.Fragment key={index}>
                                    <li className={`banner__presentation__itemIcono banner__presentation__itemIcono__active${socialNetwork.name}`} onMouseOver={()=>stateA(socialNetwork.name)} onMouseOut={()=>stateA(socialNetwork.name)}>
                                        <span className="banner__presentation__titleIcono">{socialNetwork.name}</span>
                                        <a className="banner__presentation__link" href="#">
                                            <socialNetwork.svg state={socialNetwork.stateColor} width={40} height={40}></socialNetwork.svg>
                                        </a>
                                    </li>
                                </React.Fragment>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Presentation;
