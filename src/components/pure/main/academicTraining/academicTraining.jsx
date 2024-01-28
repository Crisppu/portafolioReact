import React, { useState } from "react";
import imgUniversidadMarianoGalves from '../../../../../src/assets/img/formacionAcademica/Universidad-Mariano-Campus.webp';
import imgOracleAlura from '../../../../../src/assets/img/formacionAcademica/Alura-Campus.webp';
import imgTecnicoEvangelico from '../../../../../src/assets/img/formacionAcademica/Liceo-tecnicoEvangelico-Campus.webp';


const AcademicTraining = () => {


    const cardsList = [
        {name:'marianoGalves',campusName:'Universidad Mariano Galvez de Guatemala',
            backgroundImgCampus:`linear-gradient(rgba(205,41,40,0.7), rgba(205,41,40,0.7)),url(${imgUniversidadMarianoGalves})`,
            href:'https://www.umg.edu.gt/',
            paragraph:' La Facultad de Ingeniería en Sistemas de la Universidad Mariano Galvez se erige como un centro de excelencia que prepara a sus graduados para liderar en el ámbito de la tecnología de la información.'
        },
        {name:'alura',campusName:'Oracle + Alura',
        backgroundImgCampus:`linear-gradient(rgba(10,92,184,0.7), rgba(10,92,184,0.7)),url(${imgOracleAlura})`,
            href:'https://www.aluracursos.com/',
            paragraph:'Alura es la plataforma de cursos más grande de Brasil y se destaca como un pilar fundamental en la formación de profesionales altamente capacitados en el campo de la ingeniería informática.'
        },
        {name:'tecnicoEvangelico',campusName:'Liceo Educativo Técnico Evangélico',
            backgroundImgCampus:`linear-gradient(rgba(0,144,146,0.7), rgba(0,144,146,0.7)),url(${imgTecnicoEvangelico})`,
            href:'https://www.colegiosguatemala.com/colegios/escuintla/liceo-evangelico-tecnico-escuintleco',
            paragraph:'El colegio Liceo Técnico Evangélico destaca no solo por su compromiso con la excelencia académica y la formación integral, sino también por ser el líder indiscutible en tasas de aprobación en la región. '

        }
    ]

    const [active, setActive] = useState(null);
    const [positionButton, setPositionButton] = useState(null);
    const [toggleBackground, setToggleBackground] = useState(false);


    const eventCardAnimation = (index) => {
        setActive(index);
        setToggleBackground((r)=>!r)


    }

    const eventButton = (index) => {
        setPositionButton(index);
        setToggleBackground((r)=>!r)


    }
    return (
        <div className='main__academicTraining' id='Formation'>
            <h2 className='main__academicTraining__title' >Formacion <span className='main__academicTraining__spanTitle'>Academica</span></h2>
            <div className='main__academicTraining__cardContainer'>

                {
                    cardsList.map((card,index)=>
                        (
                            <React.Fragment key={index}>
                                <div  className={`main__academicTraining__card main__academicTraining__${card.name}`}
                                style={toggleBackground &&  index === active ? {animation:'animationOpacity 0.9s cubic-bezier(0.390,0.575,0.565,1.000) both', backgroundColor:'#35363B',backgroundImage:'initial'}:{backgroundImage:`${card.backgroundImgCampus}`}
                                }
                                 onMouseOver={()=>eventCardAnimation(index)} onMouseOut={()=>eventCardAnimation(null)}>
                                    {
                                        index === active ? (
                                            <ul className='main__academicTraining__list'>
                                                <li className='main__academicTraining__itemParagraph'><p>{card.paragraph}</p></li>
                                                <li className='main__skills__itemLink'>
                                                    <a href={card.href} target='_blank' rel='noreferrer' onMouseOver={()=>eventButton(index)} onMouseOut={()=>eventButton(null)} style={index === positionButton ? {background:'var(--color-pink)',transition:'all .2s ease-in-out' ,border: '5px solid transparent'} : {border: '5px solid var(--color-pink)'}}> Saber más <span style={index ===positionButton ? {transform:'translateX(4px)'}: {transform:'none'}} aria-hidden="true"> → </span> </a>
                                                </li>
                                            </ul>
                                        ):(
                                            <h4 className='main__academicTraining__titleCampus'> {card.campusName}</h4>
                                        )

                                    }
                                </div>
                                <a className='main__academicTraining__linkCampus' href={card.href} target='_blank' rel='noreferrer'>Saber mas <span className='main__academicTraining__saberMas' aria-hidden="true"> → </span> </a>

                            </React.Fragment>

                        )
                    )
                }

            </div>
        </div>
    );
}

export default AcademicTraining;
