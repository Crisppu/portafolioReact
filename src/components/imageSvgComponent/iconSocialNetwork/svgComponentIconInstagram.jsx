import PropTypes from 'prop-types';

const SvgComponentIconInstagram = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            style={{
            fill: "#000",
            }}
            viewBox="0 0 256 256"
        >
            <path
            fill={props.state ? '#ffffff' : '#000000' }
            strokeMiterlimit={10}
            d="M16 3C8.832 3 3 8.832 3 16v18c0 7.168 5.832 13 13 13h18c7.168 0 13-5.832 13-13V16c0-7.168-5.832-13-13-13zm0 2h18c6.086 0 11 4.914 11 11v18c0 6.086-4.914 11-11 11H16C9.914 45 5 40.086 5 34V16C5 9.914 9.914 5 16 5zm21 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-12 3c-6.063 0-11 4.937-11 11s4.937 11 11 11 11-4.937 11-11-4.937-11-11-11zm0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9z"
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

SvgComponentIconInstagram.propTypes = {
    state: PropTypes.bool,
    width:PropTypes.number,
    height:PropTypes.number,
};

export default SvgComponentIconInstagram;
