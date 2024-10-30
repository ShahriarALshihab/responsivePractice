/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";

const PricingCard = ({ option }) => {
  const { pricing_name, price, facilities } = option;
  return (
    <div className="flex flex-col rounded-md py-5 bg-slate-950">
      <div className=" rounded-lg text-white py-8">
        <h3>
          <span className="text-2xl md:text-3xl lg:text-5xl">{price}</span>
        </h3>
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          {pricing_name}
        </h4>
      </div>
      <div className="flex flex-col flex-grow items-start mt-5 ml-4 text-gray-300 ">
        {facilities.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
              
      </div>

      <button className="bg-slate-500 text-white hover:bg-green-200 hover:text-gray-800 px-3 py-2 rounded-xl text-xl font-semibold mt-5 mx-auto">
        Join Now!
      </button>
    </div>
  );
};

PricingCard.propTypes = {
  option: PropTypes.object,
};
export default PricingCard;
