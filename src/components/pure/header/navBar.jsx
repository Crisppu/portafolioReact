
import { useEffect, useState } from 'react';
import SvgComponentIconMenu from '../../imageSvgComponent/iconMenuNav/svgComponentIconMenu';


const NavBar = () => {
    const [top, setTop] = useState(false);
    const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
    const [isLandscape, setIsLandscape] = useState(window.matchMedia("(orientation: landscape)").matches);


    const manejarCambioDeAncho = () => {
        setAnchoPantalla(window.innerWidth);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
        };
        window.addEventListener("resize", handleResize);

        // Agregar el evento de cambio de tamaño cuando el componente se monta
        window.addEventListener('resize', manejarCambioDeAncho);
        // Eliminar el evento de cambio de tamaño cuando el componente se desmonta
        return () => {
          window.removeEventListener('resize', manejarCambioDeAncho);
          window.removeEventListener("resize", handleResize);
        };
    }, []); // La dependencia vacía asegura que este efecto se ejecute solo una vez al montar el componente


    const navBarList = [
        {   title:'Sobre mi', ref:'#about-me'},
        {   title:'Skills', ref:'#Skills'},
        {   title:'Formacion', ref:'#Formation'},
        {   title:'Proyectos', ref:'#XP'},
        {   title:'Contacto', ref:'#Contact'},
    ];
    const toggleTop = () =>{
        setTop((r)=>!r)
    }
    let numeroTop = '100px';
    if(isLandscape ){
        numeroTop = '75px'
    }


    const functionOverFlow = ()=>{
        console.log(anchoPantalla)

        if(anchoPantalla < 767 && top){
            return (<style>{`body{  overflow-y: hidden;}`}</style>)
        }else if((anchoPantalla>= 767 && anchoPantalla <= 1024) && top){
            return (<style>{`body{  overflow-y: hidden;}`}</style>)
        }
    }
    return (
        <div className='header__navBar'>
            <nav className='header__navBar__nav'>
                <ul className='header__navBar__list' style={top ? {top:`${numeroTop}`}:{top:'-100%'}}>
                    {navBarList.map((item, index) => (
                        <li key={index} className='header__navBar__item' onClick={toggleTop}>
                            <a className='header__navBar__link' href={item.ref}> {item.title}</a>
                        </li>

                    ))}
                </ul>
            </nav>
            <SvgComponentIconMenu className='header__navBar__iconMenuBars' onClick={toggleTop} ></SvgComponentIconMenu>

            {functionOverFlow()}
        </div>
    );
}
;
export default NavBar;
