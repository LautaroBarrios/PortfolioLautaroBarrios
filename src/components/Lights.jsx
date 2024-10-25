const Lights = () => {
  return Array.from({ length: 15 }, (_, index) => (
    <div key={index} className="firefly" />
  ));
};

export default Lights;
