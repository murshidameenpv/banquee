import ThirdPartyCard from "./ThirdPartyCard";
import amazone from "../assets/logo/amazone.jpeg";
import apple from "../assets/logo/applepay.jpeg";
import bitcoin from "../assets/logo/bitcoin.jpeg";
import google from "../assets/logo/google.jpeg";
import master from "../assets/logo/master.jpeg";
import shopify from "../assets/logo/shopify.jpeg";
import visa from "../assets/logo/visa.jpeg";
import webflow from "../assets/logo/webflow.jpeg";
import zapier from "../assets/logo/zapier.jpeg";

const ThirdParty = () => {
  return (
    <div className="mt-10 ml-16 flex flex-col gap-4">
      <div className="flex gap-3">
        <ThirdPartyCard logo={amazone} alt="Amazon" />
        <ThirdPartyCard logo={apple} alt="Apple Pay" />
        <ThirdPartyCard logo={bitcoin} alt="Bitcoin" />
        <ThirdPartyCard logo={google} alt="Google Pay" />
      </div>
      <div className="flex gap-3">
        <ThirdPartyCard logo={master} alt="Mastercard" />
        <ThirdPartyCard logo={shopify} alt="Shopify" />
        <ThirdPartyCard logo={visa} alt="Visa" />
        <ThirdPartyCard logo={webflow} alt="Webflow" />
        <ThirdPartyCard logo={zapier} alt="Zapier" />
      </div>
    </div>
  );
};

export default ThirdParty;
