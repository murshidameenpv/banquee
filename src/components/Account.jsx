import CreditCardStack from "./CreditCardStack";

const Account = () => {
  return (
    <div className="flex flex-col items-center gap-3 mt-16">
      <span className="text-sm px-2 py-3">Account</span>
      <h1 className="text-4xl font-sans flex flex-col gap-3">
        <span>Perfect Cards</span>
        <span>All Your Needs</span>
      </h1>
      <span className="w-96 text-sm px-2 py-3 mb-32">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat alias
        illo nostrum, explicabo atque animie somie
      </span>
      <div className="my-2">
        <CreditCardStack />
      </div>
      <div className="flex items-center justify-center gap-2 mt-4 text-sm z-10">
        <button className="bg-primary text-white px-3 py-2 rounded-md">
          Open Account
        </button>
        <button className="bg-transparent border-2 border-black text-black px-3 py-2 rounded-md">
          Compare Card
        </button>
      </div>
    </div>
  );
};

export default Account;
