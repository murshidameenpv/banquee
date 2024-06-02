

// eslint-disable-next-line react/prop-types
const FeatureCards = ({ name, price, logo, bg }) => {
  return (  
    <div className="flex flex-col gap-1 px-3 py-3">
      <div className={`px-10 py-10 rounded-xl`} style={{ backgroundColor: bg }}>
        <span className="text-2xl">{logo}</span>
      </div>
      <span className="font-sans text-xs font-semibold">{name}</span>
      <span className="font-sans text-xs">{price}</span>
    </div>
  );
};

export default FeatureCards