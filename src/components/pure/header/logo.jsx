// import araniaLogo from '../../../assets/img/arania__logo.png'
import PropTypes from 'prop-types';

const Logo = ({state}) => {
    return (
        <div className='header__logo'>
            <span className='header__logo__initialsName' style={state ?{fontSize:'2.5rem'}:null}> C Y </span>
        </div>
    );
}
Logo.propTypes = {
    state: PropTypes.bool,
};
export default Logo;
