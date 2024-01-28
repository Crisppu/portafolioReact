import { useRef } from "react";
import SvgComponentIconEmail from '../../../../components/imageSvgComponent/iconForm/svgComponentIconEmail';
import SvgComponentIconUser from "../../../imageSvgComponent/iconForm/svgComponentIconUser";
const Contact = () => {

    const linkRef = useRef(null);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = e.target;
        const name = formData.elements['name'].value;
        const email = formData.elements['email'].value;
        const asunto = formData.elements['asunto'].value;
        const message = formData.elements['message'].value;

        console.log(name)
        linkRef.current.href =`mailto:${email}?subject=${asunto}&body=${message}`;
        linkRef.current.click();
        formData.reset();

    };


    return (
        <div className='main__contact' id='Contact'>
            <form action='' className='main__contact__form' onSubmit={handleSubmit}>
                <div className='main__contact__information'>
                    <h2 className='main__contact__title'>Contacto</h2>
                    <h4 className='main__contact__subTitle'>¿Quieres contactarme?</h4>
                    <p className='main__contact__paragraph'>Complete el siguiente formulario y me pondré en contacto
                    con usted lo antes posible.</p>
                </div>
                <div className='main__contact__inputContainer'>
                    <picture style={{zIndex:'2'}}><SvgComponentIconUser></SvgComponentIconUser></picture>
                    <input className='main__contact__input' id='name' type='text' name='name' placeholder='Nombre'  />
                </div>
                <div className='main__contact__inputContainer'>
                    <picture style={{zIndex:'2'}}><SvgComponentIconEmail></SvgComponentIconEmail></picture>
                    <input className='main__contact__input' id='email' type='email' name='email' placeholder='Email' required/>
                </div>

                <div className='main__contact__inputContainer'>
                    <input className='main__contact__input' id='asunto' type='text' name='asunto' placeholder='Asunto'   />
                </div>
                <div className='main__contact__TextAreaContainer'>
                    <label className='main__contact__label' htmlFor='mensaje'>Mensaje</label>
                    <textarea className='main__contact__textArea' id='mensaje' type='text' name='message'  rows='5' cols='30'  placeholder='...'  ></textarea>
                </div>
                {/* { !linkRefA  ? (<a ref={linkRef} target='_blank' rel='noreferrer' ></a>) : (<p>hola</p>)} */}
                <a ref={linkRef} target='_blank' rel='noreferrer' ></a>
                <button className='main__contact__buttonSubmit' id='button' type='submit'>enviar mensaje</button>
            </form>

        </div>
    );
}

export default Contact;
