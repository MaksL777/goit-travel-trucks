export const formatPrice = (price) => {
  const numeric = Number(price) || 0;
  return `${numeric.toLocaleString("en-US")},00`;
};
export const formatLocation = (location = "") => {
  const parts = location.split(",").map((part) => part.trim());
  if (parts.length !== 2) return location;
  const [country, city] = parts;
  return `${city}, ${country}`;
};

const FORM_LABELS = {
  alcove: "Alcove",
  panelTruck: "Van",
  fullyIntegrated: "Fully Integrated",
  semiIntegrated: "Semi Integrated",
};

export const formatForm = (form) => FORM_LABELS[form] ?? form;

const capitalize = (value = "") =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const formatEngine = capitalize;
export const formatTransmission = capitalize;
