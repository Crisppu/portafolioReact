import areaTrabajo from '../../../../../src/assets/img/areaTrabajo.webp';
const MoreAboutMe = () => {
   
    return (
        <div className='main__moreAboutMe' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${areaTrabajo})`,
        backgroundRepeat:'no-repeat', backgroundSize:'cover',backgroundPosition:'center'}}>
            <span className='main__moreAboutMe__title'>Saber mas de mi </span>
            <button className='main__moreAboutMe__buttonCv'> ver cv </button>
        </div>
    );
}

export default MoreAboutMe;
