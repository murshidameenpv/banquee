/* eslint-disable react/prop-types */

const ThirdPartyCard = ({alt,logo}) => {
  return (
    <div className="px-2 py-3 bg-bgGray">
      <img src={logo} alt={alt} className="w-16 object-contain h-4" />
    </div>
  );
}

export default ThirdPartyCard;