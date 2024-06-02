import FeatureCards from "./FeatureCards";
const cardData = [
  {
    name: "New Laptop",
    price: "800$",
    logo: "💻",
    bg: "#E8F2EE",
  },
  {
    name: "Dream Bike",
    price: "400$",
    logo: "🏍️",
    bg: "#F1DFDF",
  },
  {
    name: "Holiday",
    price: "1000$",
    logo: "✈️",
    bg: "#DFE1F1",
  },
  {
    name: "Camera",
    price: "700$",
    logo: "📷",
    bg: "#DFEBF1",
  },
];

const Savings = () => {
    return (
      <div className="flex-col flex mt-16 ml-20 gap-4">
        <span className="font-inter text-sm">Savings Account</span>
        <h1 className="text-4xl font-sans flex flex-col">
          <span>Organize your</span>
          <span>money the right way</span>
        </h1>
        <div className="flex items-center justify-between">
          <div   className="w-1/2">
            {" "}
            <span className="text-xs font-inter">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. ipsum,
              dolor sit amet consectetur adipisicing elit{" "}
            </span>
          </div>
          <button className="text-primary text-xs ml-10 px-3 py-2 flex items-center justify-center gap-2">
            Compare Cards
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2284 7.00795L7.79189 1.6874L9.225 0.284857L17.1081 7.99985L9.225 15.7148L7.79189 14.3123L13.2284 8.99175H0.891893L0.891893 7.00795H13.2284Z"
                fill="#5BB5A2"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col md:flex-row  ml-2 px-16  items-center justify-center gap-4">
          {cardData.map((card, index) => (
            <FeatureCards key={index} {...card} />
          ))}
         
        </div>
      </div>
    );}

export default Savings