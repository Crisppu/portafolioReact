import imgProfile from "../../../../assets/img/y.png";
const AboutMe = () => {
  return (
    <div className="main__aboutMe" id='about-me'>
        <div className="main__aboutMe__description">
            <h2 className="main__aboutMe__title">
            Hola, mi nombre es Cristobal. Encantado de conocerlo.
            </h2>
            <br></br>
            <p className="main__aboutMe__parrafo">
            Soy formado en la Universidad Mariano Galves de Guatemala... y
            actualmente estoy participando del proyecto
            <span className="banner__presentation__university__span"> Oracle ONE </span>
            en Alura.
            </p>
            <br></br>
            <p className="main__aboutMe__parrafo">
            Con mi experiencia y mis conocimientos adquiridos en los años de
            estudio confío plenamente en mi capacidad para el buen desempeño de
            las funciones asignadas. Soy un desarrollador sumamente motivado y
            apasionado por aprender nuevas tecnologías, especialmente disfrutando
            de la resolución de problemas complejos.
            </p>
            <br></br>
            <p className="main__aboutMe__parrafo">
            Poseo una gran capacidad de liderazgo, trabajo en equipo y Aprendizaje
            rápido.
            </p>
        </div>
        <div className="main__aboutMe__profile">
            <img className="main__aboutMe__imgProfile" src={imgProfile} />
        </div>
    </div>
  );
};

export default AboutMe;
