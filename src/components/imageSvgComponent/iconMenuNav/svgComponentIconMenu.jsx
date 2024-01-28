
const SvgComponentIconMenu = (props) => {
    return (
        <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    viewBox="0 0 48 48"
    {...props}
  >
    <linearGradient
      id="a"
      x1={12.066}
      x2={34.891}
      y1={0.066}
      y2={22.891}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.237} stopColor="#ffffff" />
      <stop offset={0.85} stopColor="#ffffff" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M43 15H5c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h38c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2z"
    />
    <linearGradient
      id="b"
      x1={12.066}
      x2={34.891}
      y1={12.066}
      y2={34.891}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.237} stopColor="#ffffff" />
      <stop offset={0.85} stopColor="#ffffff" />
    </linearGradient>
    <path
      fill="url(#b)"
      d="M43 27H5c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h38c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2z"
    />
    <linearGradient
      id="c"
      x1={12.066}
      x2={34.891}
      y1={24.066}
      y2={46.891}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.237} stopColor="#ffffff" />
      <stop offset={0.85} stopColor="#ffffff" />
    </linearGradient>
    <path
      fill="url(#c)"
      d="M43 39H5c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h38c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2z"
    />
  </svg>
    );
}

export default SvgComponentIconMenu;
