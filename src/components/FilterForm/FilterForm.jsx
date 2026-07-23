import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClear } from "react-icons/md";
import {
  setLocation,
  setForm,
  setEngine,
  setTransmission,
  applyFilters,
  clearFilters,
} from "../../redux/filtersSlice.js";
import { fetchCampers } from "../../redux/campersSlice.js";
import css from "./FilterForm.module.css";

// Import your custom SVG asset
import mapIcon from "../../assets/Map.svg";

const CAMPER_FORMS = [
  { value: "alcove", label: "Alcove" },
  { value: "panelTruck", label: "Panel Van" },
  { value: "fullyIntegrated", label: "Integrated" },
  { value: "semiIntegrated", label: "Semi Integrated" },
];

const ENGINES = [
  { value: "diesel", label: "Diesel" },
  { value: "petrol", label: "Petrol" },
  { value: "hybrid", label: "Hybrid" },
  { value: "electric", label: "Electric" },
];

const TRANSMISSIONS = [
  { value: "automatic", label: "Automatic" },
  { value: "manual", label: "Manual" },
];

function RadioGroup({ title, options, selected, onChange }) {
  return (
    <fieldset className={css.group}>
      <legend className={css.groupTitle}>{title}</legend>
      {options.map(({ value, label }) => (
        <label key={value} className={css.option}>
          <input
            type="radio"
            name={title}
            checked={selected === value}
            onClick={() => {
              if (selected === value) onChange("");
            }}
            onChange={() => onChange(value)}
          />
          <span className={css.radioMark} />
          {label}
        </label>
      ))}
    </fieldset>
  );
}

function FilterForm() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const [location, setLocationDraft] = useState(filters.location);
  const [form, setFormDraft] = useState(filters.form);
  const [engine, setEngineDraft] = useState(filters.engine);
  const [transmission, setTransmissionDraft] = useState(filters.transmission);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setLocation(location));
    dispatch(setForm(form));
    dispatch(setEngine(engine));
    dispatch(setTransmission(transmission));
    dispatch(applyFilters());
    dispatch(fetchCampers());
  };

  const handleClear = () => {
    setLocationDraft("");
    setFormDraft("");
    setEngineDraft("");
    setTransmissionDraft("");
    dispatch(clearFilters());
    dispatch(fetchCampers());
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.field}>
        <label className={css.label} htmlFor="location">
          Location
        </label>
        <div className={css.inputWrapper}>
          <img
            src={mapIcon}
            alt="Location"
            className={css.inputIcon}
            width={22}
            height={22}
          />
          <input
            id="location"
            type="text"
            placeholder="City"
            value={location}
            onChange={(event) => setLocationDraft(event.target.value)}
            className={css.input}
          />
        </div>
      </div>

      <h2 className={css.filtersHeading}>Filters</h2>

      <RadioGroup
        title="Camper form"
        options={CAMPER_FORMS}
        selected={form}
        onChange={setFormDraft}
      />
      <RadioGroup
        title="Engine"
        options={ENGINES}
        selected={engine}
        onChange={setEngineDraft}
      />
      <RadioGroup
        title="Transmission"
        options={TRANSMISSIONS}
        selected={transmission}
        onChange={setTransmissionDraft}
      />

      <button type="submit" className={css.searchButton}>
        Search
      </button>
      <button type="button" className={css.clearButton} onClick={handleClear}>
        <MdClear size={20} /> Clear filters
      </button>
    </form>
  );
}

export default FilterForm;
