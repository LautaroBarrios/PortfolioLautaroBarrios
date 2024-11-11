const ArrowLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="#040d0e"
        d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          from="-20 0"
          to="0 0"
          dur="0.4s"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.4s"
          fill="freeze"
        />
      </path>
    </svg>
  );
};

export default ArrowLeft;
