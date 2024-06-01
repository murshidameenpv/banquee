import CreditCard from "./CreditCard";
const cardData = [
  {
    backgroundColor: "bg-gradient-to-r from-[#E3C79E] to-[#D6AE7B]",
    name: "Bob Johnson",
    cardNumber: "9876 5432 1098 7654",
    expiryDate: "09/23",
    cardBrand: "GoldCard",
  },
  {
    backgroundColor: "bg-gradient-to-r from-[#485563] to-[#29323C]",
    name: "John Henry",
    cardNumber: "1332 4343 23434 543",
    expiryDate: "03/26",
    cardBrand: "Banquee",
  },
  {
    backgroundColor: "bg-gradient-to-r from-[#5BB5A2] to-[#53A191]",
    name: "Alice Smith",
    cardNumber: "5555 1234 5678 9012",
    expiryDate: "12/24",
    cardBrand: "CardCo",
  },
  {
    backgroundColor: "bg-gradient-to-r from-[#485563] to-[#29323C]",
    name: "John Henry",
    cardNumber: "1332 4343 23434 543",
    expiryDate: "03/26",
    cardBrand: "Banquee",
  },
  {
    backgroundColor: "bg-gradient-to-r from-[#E3C79E] to-[#D6AE7B]",
    name: "Bob Johnson",
    cardNumber: "9876 5432 1098 7654",
    expiryDate: "09/23",
    cardBrand: "GoldCard",
  },
];
        const Hero = () => {
        return (
          <section className="flex w-full h-full flex-col items-center justify-center gap-2 bg-bgSecondary font-sans overflow-hidden">
            <p className="text-sm font-semibold mt-16">Features</p>
            <h1 className="mt-5 text-5xl font-medium leading-[1.15] text-black sm:text-6xl">
              All in one card.
            </h1>
            <div className="text-center">
              <p className="mt-3 font-medium">
                <span className="block">
                  Senectus et netus et malesuada fames ac turpis.
                </span>
                <span className="block">
                  Sagittis vitae et leo duis ut diam.
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 text-sm">
              <button className="bg-primary text-white px-3 py-2 rounded-md">
                Open Account
              </button>
              <button className="text-primary px-3 py-2 flex items-center justify-center gap-2">
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
            <div className="flex h-full">
              {cardData.map((card, index) => (
                <div key={index}  className=" transform rotate-90 mt-16">
                  <CreditCard {...card} />
                </div>
              ))}
            </div>
          </section>
        );
        }

        export default Hero