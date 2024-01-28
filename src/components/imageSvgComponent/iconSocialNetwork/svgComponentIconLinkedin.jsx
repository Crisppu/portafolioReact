import PropTypes from 'prop-types';


const SvgComponentIconLinkedin = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            style={{fill: "#000"}}
            viewBox="0 0 256 256"
        >
            <path
            fill= {props.state ? '#ffffff':'#000000'}
            strokeMiterlimit={10}
            d="M9 4C6.25 4 4 6.25 4 9v32c0 2.75 2.25 5 5 5h32c2.75 0 5-2.25 5-5V9c0-2.75-2.25-5-5-5zm0 2h32c1.668 0 3 1.332 3 3v32c0 1.668-1.332 3-3 3H9c-1.668 0-3-1.332-3-3V9c0-1.668 1.332-3 3-3zm5 5.012c-1.095 0-2.08.327-2.81.941a3.297 3.297 0 0 0-1.178 2.514c0 1.867 1.62 3.323 3.68 3.467a.988.988 0 0 0 .309.055c2.272 0 3.987-1.593 3.987-3.522 0-.018 0-.035-.002-.053-.101-1.9-1.796-3.402-3.986-3.402zm0 1.976c1.392 0 1.942.622 2.002 1.504-.012.856-.542 1.52-2.002 1.52-1.385 0-2.012-.71-2.012-1.545 0-.418.153-.733.473-1.002.32-.27.834-.477 1.539-.477zM11 19a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V20a1 1 0 0 0-1-1zm9 0a1 1 0 0 0-1 1v19a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V29c0-.83.226-1.655.625-2.195.399-.54.901-.865 1.857-.848.986.017 1.508.355 1.903.885S32 28.167 32 29v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V28.262c0-2.962-.877-5.308-2.38-6.895C36.114 19.78 34.023 19 31.811 19A8.729 8.729 0 0 0 27 20.424V20a1 1 0 0 0-1-1zm-8 2h4v17h-4zm9 0h4v1.56a1 1 0 0 0 1.799.602S28.369 21 31.812 21c1.754 0 3.257.583 4.356 1.742 1.099 1.16 1.832 2.946 1.832 5.52V38h-4v-9c0-1.167-.28-2.373-1.01-3.354-.73-.98-1.958-1.663-3.472-1.689-1.522-.027-2.77.67-3.502 1.662C25.284 26.611 25 27.83 25 29v9h-4z"
            fontFamily="none"
            fontSize="none"
            fontWeight="none"
            style={{
                mixBlendMode: "normal",
            }}
            textAnchor="none"
            transform="scale(5.12)"
            />
        </svg>
    );
}
SvgComponentIconLinkedin.propTypes = {
    state: PropTypes.bool,
    width:PropTypes.number,
    height:PropTypes.number,
};

export default SvgComponentIconLinkedin;
