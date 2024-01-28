import imgCalculadora from '../../../../../src/assets/img/xp/imgCalculadora.png';
import imgAhorcado from '../../../../../src/assets/img/xp/ahorcado__app.png'
import {useEffect, useRef, useState} from 'react';
const ProfessionalExperience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    const animationSlideLeft = 'slideLeft 6.5s alternate cubic-bezier(0.25, 0.46, 0.45, 0.94) both';
    const animationSlideRight = 'slideRight 5.5s alternate cubic-bezier(0.25, 0.46, 0.45, 0.94) both';

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 // Define el porcentaje del componente que debe ser visible para considerarlo como 'visible'
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Puedes realizar acciones adicionales cuando el componente es visible
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        const currentRef = componentRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    const cardsList = [
        {   title:'Calculadora',
            subTitle:'Challenge Personal',
            containerStyle:{backgroundColor:'#80DEEA'},
            image: imgCalculadora,
            linkRepositoryGithub:'https://github.com/Crisppu/calculadora.git',
            linkDemo:'https://crisppu.github.io/calculadora/'
        },
        {   title:'Juego Del Ahorcado',
            subTitle:'Challenge Alura',
            containerStyle:{backgroundColor:'#80DEEA'},
            image: imgAhorcado,
            linkRepositoryGithub:'https://github.com/Crisppu/ahorcadoAlura.git',
            linkDemo:'https://crisppu.github.io/ahorcadoAlura/'
        },
    ];
    return (
        <div className="main__xp" ref={componentRef} id='XP'>
            <h2 className="main__xp__title">Experiencia Profesional</h2>
            <div className="main__xp__xpContainer">
                {
                    cardsList.map((card, index)=>
                        (
                            <div className='main__xp__card' key={index}>
                                <div className='main__xp__containerPicture'>
                                {
                                    isVisible && (
                                        <img className='main__xp__imgCard'
                                        src={card.image}
                                        style={index % 2 === 0 ? {animation: animationSlideLeft} : {animation: animationSlideRight}}
                                        />
                                    )
                                }
                                <img className='main__xp__imgCardActive' src={card.image}/>
                                </div>
                                <div className='main__xp__informationCard'>
                                    <div className='main__xp__detailsCard'>
                                        <h3 className='main__xp__titleCard'>{card.title}</h3>
                                        <h4 className='main__xp__subTitleCard'>{card.subTitle}</h4>
                                        <div className='main__xp__containerLinks'>
                                            <a className='main__xp__linkRepository' href={card.linkRepositoryGithub} target='_blank' rel='noreferrer'  > Repositorio <span className='main__xp__spanRepository' aria-hidden="true"> → </span> </a>
                                            <a className='main__xp__linkDemo' href={card.linkDemo} target='_blank' rel='noreferrer'  > Demo <span className='main__xp__spanDemo' aria-hidden="true"> → </span> </a>
                                        </div>
                                    </div>
                                </div>
                                <style>
                                {
                                    `
                                    @keyframes slideLeft {
                                        0% {
                                            transform: translateX(-40%);
                                            opacity: 0;
                                            -webkit-transform: translateX(-40%);
                                            -moz-transform: translateX(-40%);
                                            -ms-transform: translateX(-40%);
                                            -o-transform: translateX(-40%);
                                        }
                                        100% {
                                            transform: translateX(0);
                                            opacity: 1;
                                        }
                                    }

                                    @keyframes slideRight {
                                        0% {
                                            transform: translateX(40%);
                                            opacity: 0;
                                            -webkit-transform: translateX(40%);
                                            -moz-transform: translateX(40%);
                                            -ms-transform: translateX(40%);
                                            -o-transform: translateX(40%);
                                        }

                                        100% {
                                            transform: translateX(0);
                                            opacity: 1;
                                        }
                                    }
                                    `
                                }
                                </style>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default ProfessionalExperience;
