import store from '../assets/logo/store.png'
import CreditCard from './CreditCard';
  const cardData = {
    backgroundColor: "bg-gradient-to-r from-[#485563] to-[#29323C]",
    name: "Alice Smith",
    cardNumber: "5555 1234 5678 9012",
    expiryDate: "12/24",
    cardBrand: "CardCo",
  };
const MobileCard = () => {
  return (
    <div className="w-full flex items-center justify-center mt-16">
      <div className="flex w-[700px] bg-gradient-to-r from-[#5BB5A2] to-[#3a6b60] rounded-lg text-white px-10 py-10 h-[450px] overflow-hidden">
        <div className="w-1/2 flex flex-col gap-10">
          <h1 className="text-3xl flex flex-col font-semibold">
            <span>One App</span>
            <span>One Banking.</span>
          </h1>
          <span className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dignissimos nesciunt ut quasi? Atque dicta tempore aliquam? Impedit
            sed, quam, minima commodi iste quibusdam{" "}
          </span>
          <div className="flex gap-3">
            <div className="flex items-center justify-start gap-3">
              <div className="flex items-center justify-center bg-bgSecondary rounded-full w-4 h-4">
                {" "}
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49999 12.0228L14.394 5.12805L15.4552 6.18855L7.49999 14.1438L2.72699 9.3708L3.78749 8.3103L7.49999 12.0228Z"
                    fill="#5BB5A2"
                  />
                </svg>
              </div>
              <span className="text-xs font-inter">Lorem Ipsum</span>
            </div>
            <div className="flex items-center justify-start gap-3">
              <div className="flex items-center justify-center bg-bgSecondary rounded-full w-4 h-4">
                {" "}
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49999 12.0228L14.394 5.12805L15.4552 6.18855L7.49999 14.1438L2.72699 9.3708L3.78749 8.3103L7.49999 12.0228Z"
                    fill="#5BB5A2"
                  />
                </svg>
              </div>
              <span className="text-xs font-inter">Lorem Ipsum</span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center justify-start gap-3">
              <div className="flex items-center justify-center bg-bgSecondary rounded-full w-4 h-4">
                {" "}
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49999 12.0228L14.394 5.12805L15.4552 6.18855L7.49999 14.1438L2.72699 9.3708L3.78749 8.3103L7.49999 12.0228Z"
                    fill="#5BB5A2"
                  />
                </svg>
              </div>
              <span className="text-xs font-inter">Lorem Ipsum</span>
            </div>
            <div className="flex items-center justify-start gap-3">
              <div className="flex items-center justify-center bg-bgSecondary rounded-full w-4 h-4">
                {" "}
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49999 12.0228L14.394 5.12805L15.4552 6.18855L7.49999 14.1438L2.72699 9.3708L3.78749 8.3103L7.49999 12.0228Z"
                    fill="#5BB5A2"
                  />
                </svg>
              </div>
              <span className="text-xs font-inter">Lorem Ipsum</span>
            </div>
          </div>
          <img src={store} alt={store} width={200} />
        </div>
        <div className="w-1/2">
          <div className="flex flex-col mt-16 border-[5px] rounded-tl-3xl rounded-tr-3xl bg-bgSecondary text-black border-black px-3 py-2">
            <div className="flex items-center justify-around">
              <span className="text-sm font-inter">Current Balance</span>
              <span className="font-medium text-sm font-sans">$74848.90</span>
            </div>
            <div className="ml-3">
              <CreditCard {...cardData} />
            </div>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="text-sm font-inter font-semibold">
                Sent Money
              </span>
              <div className="flex items-center justify-center bg-[#E8F2EE] rounded-full w-6 h-6">
                {" "}
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.723633"
                    width="40"
                    height="40"
                    rx="20"
                    fill="#E8F2EE"
                  />
                  <path
                    d="M21.8333 22.788V24.7039C21.0037 24.4106 20.1158 24.3206 19.2441 24.4415C18.3725 24.5625 17.5426 24.8908 16.8241 25.3989C16.1057 25.907 15.5196 26.5801 15.1152 27.3617C14.7108 28.1432 14.4998 29.0104 14.5 29.8904L12.6667 29.8895C12.6664 28.7701 12.9223 27.6655 13.4149 26.6604C13.9075 25.6553 14.6237 24.7762 15.5085 24.0907C16.3934 23.4051 17.4234 22.9312 18.5197 22.7052C19.616 22.4793 20.7495 22.5073 21.8333 22.7871V22.788ZM20 21.6404C16.9612 21.6404 14.5 19.1791 14.5 16.1404C14.5 13.1016 16.9612 10.6404 20 10.6404C23.0388 10.6404 25.5 13.1016 25.5 16.1404C25.5 19.1791 23.0388 21.6404 20 21.6404ZM20 19.807C22.0258 19.807 23.6667 18.1662 23.6667 16.1404C23.6667 14.1145 22.0258 12.4737 20 12.4737C17.9742 12.4737 16.3333 14.1145 16.3333 16.1404C16.3333 18.1662 17.9742 19.807 20 19.807ZM25.5 25.307V22.0987L30.0833 26.2237L25.5 30.3487V27.1404H22.75V25.307H25.5Z"
                    fill="#5BB5A2"
                  />
                </svg>
              </div>
              <span className="text-sm font-inter font-semibold">
                Sent Money
              </span>
              <div className="flex items-center justify-center bg-[#E8F2EE] rounded-full w-6 h-6">
                {" "}
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.723633"
                    width="40"
                    height="40"
                    rx="20"
                    fill="#E8F2EE"
                  />
                  <path
                    d="M21.8333 22.788V24.7039C21.0037 24.4106 20.1158 24.3206 19.2441 24.4415C18.3725 24.5625 17.5426 24.8908 16.8241 25.3989C16.1057 25.907 15.5196 26.5801 15.1152 27.3617C14.7108 28.1432 14.4998 29.0104 14.5 29.8904L12.6667 29.8895C12.6664 28.7701 12.9223 27.6655 13.4149 26.6604C13.9075 25.6553 14.6237 24.7762 15.5085 24.0907C16.3934 23.4051 17.4234 22.9312 18.5197 22.7052C19.616 22.4793 20.7495 22.5073 21.8333 22.7871V22.788ZM20 21.6404C16.9612 21.6404 14.5 19.1791 14.5 16.1404C14.5 13.1016 16.9612 10.6404 20 10.6404C23.0388 10.6404 25.5 13.1016 25.5 16.1404C25.5 19.1791 23.0388 21.6404 20 21.6404ZM20 19.807C22.0258 19.807 23.6667 18.1662 23.6667 16.1404C23.6667 14.1145 22.0258 12.4737 20 12.4737C17.9742 12.4737 16.3333 14.1145 16.3333 16.1404C16.3333 18.1662 17.9742 19.807 20 19.807ZM25.5 25.307V22.0987L30.0833 26.2237L25.5 30.3487V27.1404H22.75V25.307H25.5Z"
                    fill="#5BB5A2"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6 mt-5 text-sm font-inter">
              <span className="text-xs">View All</span>
              <span className="text-primary  flex text-xs gap-2">
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
              </span>
            </div>
            <div className="bg-bgGray rounded-lg p-1 mt-3 flex items-center justify-between">
              <div className="bg-primary rounded-lg px-2 py-2">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6553 6.84369C9.85233 6.84369 8.60933 5.93069 7.30033 5.96369C5.57333 5.98569 3.98933 6.96468 3.09833 8.51568C1.30533 11.6287 2.63633 16.2267 4.38533 18.7567C5.24333 19.9887 6.25533 21.3747 7.59733 21.3307C8.88433 21.2757 9.36833 20.4947 10.9303 20.4947C12.4813 20.4947 12.9213 21.3307 14.2853 21.2977C15.6713 21.2757 16.5513 20.0437 17.3983 18.8007C18.3773 17.3707 18.7843 15.9847 18.8063 15.9077C18.7733 15.8967 16.1113 14.8737 16.0783 11.7937C16.0563 9.21968 18.1793 7.98769 18.2783 7.93269C17.0683 6.16169 15.2093 5.96369 14.5603 5.91969C12.8663 5.78769 11.4473 6.84369 10.6553 6.84369ZM13.5153 4.24769C14.2303 3.38969 14.7033 2.19069 14.5713 1.00269C13.5483 1.04669 12.3163 1.68469 11.5793 2.54269C10.9193 3.30169 10.3473 4.52269 10.5013 5.68869C11.6343 5.77669 12.8003 5.10569 13.5153 4.24769Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex flex-col text-sm font-inter">
                <span className="font-semibold">Apple</span>
                <span>Electronic</span>
              </div>
              <span className="font-semibold text-sm font-sans">-$337.80</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
