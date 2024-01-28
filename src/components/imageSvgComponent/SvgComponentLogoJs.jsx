// import PropTypes from "prop-types";

import { useState } from "react";

const SvgComponentLogoJs = (props) => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            style={{
            fill: "#000",
            }}
            viewBox="0 0 256 256"
            {...props}
        >
            <path
            fill={darkMode ? '#ffffff':'#000000'}
            strokeMiterlimit={10}
            d="M6.668 4A2.684 2.684 0 0 0 4 6.668v36.664A2.684 2.684 0 0 0 6.668 46h36.664A2.682 2.682 0 0 0 46 43.332V6.668A2.682 2.682 0 0 0 43.332 4zm0 2h36.664c.371 0 .668.297.668.668v36.664a.665.665 0 0 1-.668.668H6.668A.665.665 0 0 1 6 43.332V6.668C6 6.297 6.297 6 6.668 6zM23 23v12.574c0 1.93-.73 2.426-2 2.426-1.328 0-2.25-.828-2.86-1.902L15 38c.91 1.926 3.14 4 6.234 4C24.656 42 27 40.18 27 36.184V23zm12.453 0c-3.406 0-5.59 2.18-5.59 5.043 0 3.105 1.832 4.574 4.586 5.746l.953.41c1.739.762 2.598 1.227 2.598 2.535 0 1.09-.828 1.88-2.41 1.88-1.883 0-2.774-1.278-3.59-2.614l-3 2c1.121 2.215 3.133 4 6.676 4C39.3 42 42 40.117 42 36.684c0-3.188-1.828-4.606-5.074-5.996l-.953-.407c-1.637-.71-2.348-1.172-2.348-2.316 0-.926.711-1.637 1.828-1.637 1.098 0 1.8.465 2.453 1.637l2.973-1.906c-1.254-2.215-3-3.059-5.426-3.059z"
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
};

export default SvgComponentLogoJs;
