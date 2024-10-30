import PricingCard from "./PricingCard";


const PricingOptons = () => {

  const pricingOptions=  [
        {
          "id": 1,
          "pricing_name": "Basic Membership",
          "price": "$30/month",
          "facilities": [
            "Access to gym equipment",
            "Locker room access",
            "Free fitness assessment"
          ]
        },
        {
          "id": 2,
          "pricing_name": "Standard Membership",
          "price": "$50/month",
          "facilities": [
            "Access to gym equipment",
            "Locker room access",
            "Free fitness assessment",
            "Access to group fitness classes",
            "Personalized workout plan"
          ]
        },
        {
          "id": 3,
          "pricing_name": "Premium Membership",
          "price": "$80/month",
          "facilities": [
            "Access to gym equipment",
            "Locker room access",
            "Free fitness assessment",
            "Unlimited access to group fitness classes",
            "Personalized workout plan",
            "1 Personal Training Session per month",
            "24/7 Gym Access"
          ]
        }
      ]
      
    return (
        <div>
            <h1 className="text-4xl text-gray-400 font-semibold mt-10">Best Pricing in the town!</h1>
                <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 py-5">
            {
                pricingOptions.map((option)=><PricingCard key={option.id} option={option}></PricingCard>)
            }
          
        </div>
    </div>
    );
};

export default PricingOptons;