function getShippingCost(country) {
  const normalizedCountry =
    country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();

  switch (normalizedCountry) {
    case "China":
      return "Shipping to China will cost 100 credits";
    case "Chile":
      return "Shipping to Chile will cost 250 credits";
    case "Australia":
      return "Shipping to Australia will cost 170 credits";
    case "Jamaica":
      return "Shipping to Jamaica will cost 120 credits";
    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
