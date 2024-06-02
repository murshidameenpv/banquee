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
];

const CreditCardStack = () => {
  return (
    <div className="grid grid-flow-row-dense gap-0">
      {cardData.map((cardData, index) => (
        <div key={index} className="-mt-32">
          <CreditCard
            backgroundColor={cardData.backgroundColor}
            name={cardData.name}
            cardNumber={cardData.cardNumber}
            expiryDate={cardData.expiryDate}
            cardBrand={cardData.cardBrand}
          />
        </div>
      ))}
    </div>
  );
};

export default CreditCardStack;
