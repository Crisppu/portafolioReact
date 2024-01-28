import React, { useState } from "react";


const AcademicTraining = () => {


    const cardsList = [
        {name:'marianoGalves',campusName:'Universidad Mariano Galvez de Guatemala',
            href:'https://www.umg.edu.gt/',
            paragraph:' La Facultad de Ingeniería en Sistemas de la Universidad Mariano Galvez se erige como un centro de excelencia que prepara a sus graduados para liderar en el ámbito de la tecnología de la información.'
        },
        {name:'alura',campusName:'Oracle + Alura',
            href:'https://www.aluracursos.com/',
            paragraph:'Alura es la plataforma de cursos más grande de Brasil y se destaca como un pilar fundamental en la formación de profesionales altamente capacitados en el campo de la ingeniería informática.'
        },
        {name:'tecnicoEvangelico',campusName:'Liceo Educativo Técnico Evangélico',
            href:'https://www.colegiosguatemala.com/colegios/escuintla/liceo-evangelico-tecnico-escuintleco',
            paragraph:'El colegio Liceo Técnico Evangélico destaca no solo por su compromiso con la excelencia académica y la formación integral, sino también por ser el líder indiscutible en tasas de aprobación en la región. '

        }
    ]

    const [active, setActive] = useState(null);
    const [active1, setActive1] = useState(null);


    // const [getCardsList, setCardsList] = useState(cardsList);

    const manejarClic = (index) => {
        setActive(index);

    }

    const manejarEvento = (index) => {
        setActive1(index);

    }
// style={index ==active ? {background:'#35363B',animation:'animationOpacity 0.9s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'}:card.containerStyle}
    return (
        <div className='main__academicTraining' id='Formation'>
            <h2 className='main__academicTraining__title' >Formacion <span className='main__academicTraining__spanTitle'>Academica</span></h2>
            <div className='main__academicTraining__cardContainer'>

                {
                    cardsList.map((card,index)=>
                        (
                            <React.Fragment key={index}>
                                <div  className={`main__academicTraining__card main__academicTraining__${card.name}`} onMouseOver={()=>manejarClic(index)} onMouseOut={()=>manejarClic(null)}>
                                    {
                                        index === active ? (
                                            <ul className='main__academicTraining__list'>
                                                <li className='main__academicTraining__itemParagraph'><p>{card.paragraph}</p></li>
                                                <li className='main__skills__itemLink'>
                                                    <a href={card.href} target='_blank' rel='noreferrer' onMouseOver={()=>manejarEvento(index)} onMouseOut={()=>manejarEvento(null)} style={index === active1 ? {background:'var(--color-pink)',transition:'all .2s ease-in-out' ,border: '5px solid transparent'} : {border: '5px solid var(--color-pink)'}}> Saber más <span style={index ===active1 ? {transform:'translateX(4px)'}: {transform:'none'}} aria-hidden="true"> → </span> </a>
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
