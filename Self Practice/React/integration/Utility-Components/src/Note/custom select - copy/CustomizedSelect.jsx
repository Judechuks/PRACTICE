import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #aaa",
    },
  }),
  // option: (styles, { data }) => ({
  //   ...styles,
  //   backgroundColor: data.color,
  //   color: "white",
  // }),
  input: (styles) => ({
    ...styles,
    color: "black",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValue: (styles, { data }) => ({
    ...styles,
    backgroundColor: data.color,
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: "white",
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: "white",
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "gray",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "gray",
    "&:hover": {
      color: "black",
    },
  }),
  clearIndicator: (styles) => ({
    ...styles,
    color: "gray",
    "&:hover": {
      color: "black",
    },
  }),
  menu: (styles) => ({
    ...styles,
    zIndex: 9999,
  }),
  menuList: (styles) => ({
    ...styles,
    padding: 0,
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? "#0052CC"
        : isFocused
        ? "#F0F0F0"
        : null,
      color: isDisabled ? "#ccc" : "#333",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

const CustomeizedSelect = (prop) => {
  const colourOptions = [
    // { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "ocean", label: "Ocean", color: "#00B8D9" },
    // { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    // { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "red", label: "Red", color: "#FF5630" },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];

  return (
    <Select
      {...prop.field}
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[0], colourOptions[1]]}
      isMulti
      options={colourOptions}
      onChange={(selectedOptions) => prop.field.onChange(selectedOptions)}
      // value={prop.value} // Handle default value
      value={prop.field.value || []} // Handle default value
      styles={colourStyles}
      // className="basic-multi-select"
      className={`basic-multi-select ${
        prop.fieldState.error ? "border-red-500" : "border-gray-300"
      }`} // Optional: Add error styling
      classNamePrefix="select"
      placeholder="Select an option"
      isSearchable
      isClearable
      isDisabled={false}
      isLoading={false}
      isRtl={false}
      isOptionDisabled={(option) => option.isDisabled}
      isLoadingMessage={() => "Loading..."}
      isNoOptionsMessage={() => "No options available"}
      isValueSelected={(option) => option.isFixed}
      isOptionSelected={(option) => option.isFixed}
      isOptionFocused={(option) => option.isFocused}
      isOptionHighlighted={(option) => option.isHighlighted}
    />
  );
};

export default CustomeizedSelect;
