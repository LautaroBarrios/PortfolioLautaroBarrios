const Gmail = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="mt-0.5"
    >
      <path
        fill="#ffffff"
        d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
        fillOpacity="0"
      >
        <animate
          attributeName="fill-opacity"
          begin="0.8s"
          dur="0.2s"
          values="0;1"
          fill="freeze"
        />
      </path>
      <g
        fill="none"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path strokeDasharray="22" strokeDashoffset="22" d="M4 5l8 5l8-5">
          <animate
            attributeName="stroke-dashoffset"
            begin="0s"
            dur="0.3s"
            values="22;0"
            fill="freeze"
          />
        </path>
        <path strokeDasharray="16" strokeDashoffset="16" d="M3 6v12">
          <animate
            attributeName="stroke-dashoffset"
            begin="0.3s"
            dur="0.2s"
            values="16;0"
            fill="freeze"
          />
        </path>
        <path strokeDasharray="16" strokeDashoffset="16" d="M21 6v12">
          <animate
            attributeName="stroke-dashoffset"
            begin="0.3s"
            dur="0.2s"
            values="16;0"
            fill="freeze"
          />
        </path>
        <path strokeDasharray="16" strokeDashoffset="16" d="M4 19h16">
          <animate
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.2s"
            values="16;0"
            fill="freeze"
          />
        </path>
      </g>
    </svg>
  );
};

export default Gmail;
