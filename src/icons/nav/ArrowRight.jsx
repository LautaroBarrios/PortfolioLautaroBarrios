const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="#040d0e"
        d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          from="20 0" // Comienza desplazado hacia la derecha
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

export default ArrowRight;
