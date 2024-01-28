import { useEffect, useState } from 'react';
import Logo from './logo';
import NavBar from './navBar';


const Header = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);

    const manejarCambioDeAncho = () => {
        setAnchoPantalla(window.innerWidth);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerPoint = 70; // Puedes ajustar este valor según tus necesidades
            setIsVisible(scrollY > triggerPoint);
        };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', manejarCambioDeAncho);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', manejarCambioDeAncho);

      };
    }, []);

    let heightActive = {background:'black',transition:'none',};

    if((anchoPantalla > 1024) && isVisible){
        heightActive = {background:'black',height:'100px',transition:'all 0.7s linear',alignItems:'end'};
    }

    return (
        <header className='header__container' style={isVisible ? heightActive : {transition:'all 0.7s linear',}}>
            <Logo state={isVisible}></Logo>
            <NavBar state={isVisible}></NavBar>
        </header>
    );
}

export default Header;
