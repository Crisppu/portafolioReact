// import { useState } from 'react';
import { useState } from 'react';
import SvgComponentLogoJs from '../../../imageSvgComponent/SvgComponentLogoJs';
import SvgComponentLogoReact from '../../../imageSvgComponent/svgComponentLogoReact';
import SvgComponentLogoJava from '../../../imageSvgComponent/svgComponentLogoJava';
import SvgComponentLogoPython from '../../../imageSvgComponent/svgComponentLogoPython';
import SvgComponentLogoSql from '../../../imageSvgComponent/svgComponentLogoSql';
import SvgComponentLogoCsharp from '../../../imageSvgComponent/svgComponentLogoCsharp';


const Skills = () => {
    const animationRotate ='rotateVertCenter 1.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both';

    const cardsList = [

        {logoName:'React',
            containerStyleItemLink:{background:'#80DEEA'},
            containerStyle:{backgroundColor:'#80DEEA'},
            svg:<SvgComponentLogoReact width={100} height={100}/>,
            href:'https://es.react.dev/',
            paragraph: 'Es una biblioteca de JavaScript de código abierto diseñada para construir interfaces de usuario (UI) interactivas y eficientes.',
        },
        {logoName:'Javascript',
            containerStyleItemLink:{background:'#e7ce6f'},
            containerStyle:{backgroundColor:'#e7ce6f'},
            svg:<SvgComponentLogoJs width={100} height={100}/>,
            href:'https://lenguajejs.com/',
            paragraph:'Es un lenguaje de programación de alto nivel, interpretado y orientado a objetos. Es ampliamente utilizado para el desarrollo web.'
        },
        {logoName:'Java',
            containerStyleItemLink:{background:'#DB4437'},
            containerStyle:{backgroundColor:'#DB4437'},
            svg:<SvgComponentLogoJava width={100} height={100}/>, href:'https://www.java.com/es/',
            paragraph:'Es un lenguaje de programación de alto nivel y orientado a objetos que se ha vuelto omnipresente en el mundo del desarrollo de software.'
        },
        {logoName:'Python',
            containerStyleItemLink:{background:'#306998'},
            //el backgroundColor se activa siempre cuando el backgroundImage no aparece
            containerStyle:{backgroundColor:'#306998',backgroundImage:'linear-gradient(135deg, #306998 50%, #FFE873 50%)'},
            svg:<SvgComponentLogoPython width={100} height={100}/>, href:'https://www.python.org/',
            paragraph:'es un lenguaje de programación de alto nivel, se utiliza en una variedad de aplicaciones, desde desarrollo web y científico hasta automatización de tareas y aprendizaje automático.',
        },
        {logoName:'C#',
            containerStyleItemLink:{background:'#974F92'},
            containerStyle:{backgroundColor:'#974F92'},
            svg:<SvgComponentLogoCsharp width={100} height={100}/>, href:'https://learn.microsoft.com/es-es/dotnet/csharp/tour-of-csharp/',
            paragraph:'Es un lenguaje de programación moderno y versátil desarrollado por Microsoft. Diseñado para ser simple, seguro y eficiente.'
        },
        {logoName:'Mysql',
            containerStyleItemLink:{background:'#F29111'},
            containerStyle:{backgroundColor:'#F29111'},
            svg:<SvgComponentLogoSql width={100} height={100}/>,
            href:'https://dev.mysql.com/doc/workbench/en/',
            paragraph:'Es un sistema de gestión de bases de datos relacional ampliamente utilizado en el desarrollo de aplicaciones web y empresariales. Conocido por su rendimiento confiable, escalabilidad y facilidad de uso.'
        }

    ];

    const [activeCard, setActiveCard] = useState(null);
    const [activeLink, setActiveLink] = useState(null);



    const toggleCard = (index) => {
        setActiveCard(index);

    }
    const toggleLink = (index) => {
        setActiveLink(index);

    }



    return (
        <div className='main__skills' id='Skills'>
            <h2 className='main__skills__title'>Skills</h2>
            <div className='main__skills__cardContainer'>
                {cardsList.map((card, index) => (
                    <div key={index} className='main__skills__card'  onMouseOver={()=>toggleCard(index)} onMouseOut={()=>toggleCard(null)}>
                        {/* <div className='main__skills__Img' style={index === active ? card.containerStyle : {background:'#3D88C4',transition:'background 1s ease 0s'}}>{card.svg}</div> */}
                        <div className='main__skills__containerImg' style={index === activeCard ? card.containerStyle : {background:'#3D88C4',transition:'background 1s ease 0s'}}>
                            <picture style={index === activeCard ? {animation: animationRotate}:{animation:'none'}}>
                                {card.svg}
                            </picture>
                        </div>

                        <ul className='main__skills__list'>
                            <li className='main__skills__itemTitle'><h4>{card.logoName}</h4></li>
                            <li className='main__skills__itemParagraph'><p>{card.paragraph}</p></li>
                            <li className='main__skills__itemLink'>
                             <a href={card.href} target='_blank' rel='noreferrer' onMouseOver={()=>toggleLink(index)} onMouseOut={()=>toggleLink(null)} style={index === activeLink ? card.containerStyleItemLink : {background:'#3D88C4',transition:'background 1s ease 0s'}}> Saber más <span style={index ===activeLink ? {transform:'translateX(4px)'}: {transform:'none'}} aria-hidden="true"> → </span> </a>
                            </li>
                        </ul>
                    </div>

                ))}
            </div>

        </div>
    );
}


export default Skills;
