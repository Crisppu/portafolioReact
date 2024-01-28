import Banner from '../pure/banner/banner';
import Header from '../pure/header/header';
import imgEscritorio from '../../../src/assets/img/xp__fondo.webp';

const SpecializationDetail = () => {
    return (
        <div className='specializationDetail' style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${imgEscritorio})`}}>
            <Header ></Header>
            <Banner></Banner>
        </div>
    );
}

export default SpecializationDetail;




