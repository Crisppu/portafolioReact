import PropTypes from 'prop-types';

const SvgComponentIconTikTok = (props) => {
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
            fill={props.state ? '#ffffff' : '#000000'}
            strokeMiterlimit={10}
            d="M9 4C6.25 4 4 6.25 4 9v32c0 2.75 2.25 5 5 5h32c2.75 0 5-2.25 5-5V9c0-2.75-2.25-5-5-5zm0 2h32c1.672 0 3 1.328 3 3v32c0 1.672-1.328 3-3 3H9c-1.672 0-3-1.328-3-3V9c0-1.672 1.328-3 3-3zm17.043 4a1 1 0 0 0-1 .998l-.022 9.762-.015 6.73L25 30.594c0 1.815-1.649 3.299-3.527 3.299a3.337 3.337 0 0 1-3.352-3.354 3.335 3.335 0 0 1 3.352-3.351c.063 0 .19.02.408.046A1 1 0 0 0 23 26.24v-4.2a1 1 0 0 0-.937-.999c-.156-.01-.352-.03-.59-.03-5.25 0-9.528 4.279-9.528 9.528 0 5.25 4.278 9.527 9.528 9.527 5.25 0 9.527-4.277 9.527-9.527V21.49c1.455 1.164 3.268 1.9 5.27 1.9.273 0 .532-.016.78-.038a1 1 0 0 0 .909-.997v-4.67a1 1 0 0 0-.928-.997 6.478 6.478 0 0 1-5.978-5.792 1 1 0 0 0-.994-.896zm.998 2h2.281a8.35 8.35 0 0 0 6.637 6.445v2.866c-2.139-.11-4.018-1.176-5.123-2.858a1 1 0 0 0-1.836.55V30.54a7.513 7.513 0 0 1-7.527 7.527 7.513 7.513 0 0 1-7.528-7.527c0-4 3.121-7.176 7.055-7.432v2.176c-2.714.253-4.879 2.48-4.879 5.256 0 2.944 2.407 5.354 5.352 5.354 2.929 0 5.527-2.307 5.527-5.3l.006-3.099.015-6.73.02-8.764z"
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
SvgComponentIconTikTok.propTypes = {
    state: PropTypes.bool,
    width:PropTypes.number,
    height:PropTypes.number,
}

export default SvgComponentIconTikTok;
