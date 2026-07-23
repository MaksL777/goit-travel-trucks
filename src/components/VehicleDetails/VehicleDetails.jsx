import {
  TbSnowflake,
  TbBath,
  TbToolsKitchen2,
  TbDeviceTv,
  TbRadio,
  TbFridge,
  TbMicrowave,
  TbFlame,
  TbDroplet,
  TbAutomaticGearbox,
} from "react-icons/tb";
import { PiGasPump } from "react-icons/pi";
import {
  formatForm,
  formatEngine,
  formatTransmission,
} from "../../utils/format.js";
import css from "./VehicleDetails.module.css";

const EQUIPMENT = [
  {
    key: "transmission",
    label: (camper) => formatTransmission(camper.transmission),
    icon: TbAutomaticGearbox,
  },
  {
    key: "engine",
    label: (camper) => formatEngine(camper.engine),
    icon: PiGasPump,
  },
  { key: "AC", label: () => "AC", icon: TbSnowflake },
  { key: "bathroom", label: () => "Bathroom", icon: TbBath },
  { key: "kitchen", label: () => "Kitchen", icon: TbToolsKitchen2 },
  { key: "TV", label: () => "TV", icon: TbDeviceTv },
  { key: "radio", label: () => "Radio", icon: TbRadio },
  { key: "refrigerator", label: () => "Refrigerator", icon: TbFridge },
  { key: "microwave", label: () => "Microwave", icon: TbMicrowave },
  { key: "gas", label: () => "Gas", icon: TbFlame },
  { key: "water", label: () => "Water", icon: TbDroplet },
];

const DETAILS = [
  { key: "form", label: "Form", format: formatForm },
  { key: "length", label: "Length" },
  { key: "width", label: "Width" },
  { key: "height", label: "Height" },
  { key: "tank", label: "Tank" },
  { key: "consumption", label: "Consumption" },
];

function VehicleDetails({ camper }) {
  const pills = EQUIPMENT.filter(({ key }) => {
    if (key === "transmission" || key === "engine") return Boolean(camper[key]);
    return camper[key] === true;
  });

  const details = DETAILS.filter(({ key }) => camper[key]);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Vehicle details</h2>
      {pills.length > 0 && (
        <ul className={css.pills}>
          {pills.map(({ key, label, icon: Icon }) => (
            <li key={key} className={css.pill}>
              <Icon className={css.pillIcon} />
              {label(camper)}
            </li>
          ))}
        </ul>
      )}

      {details.length > 0 && (
        <dl className={css.specs}>
          {details.map(({ key, label, format }) => (
            <div key={key} className={css.specRow}>
              <dt className={css.specLabel}>{label}</dt>
              <dd className={css.specValue}>
                {format ? format(camper[key]) : camper[key]}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

export default VehicleDetails;
