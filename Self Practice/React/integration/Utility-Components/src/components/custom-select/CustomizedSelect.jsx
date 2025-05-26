import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const colourStyles = (error) => ({
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    border: error ? "1.5px solid #ef4444" : "1px solid #ccc",
    boxShadow: "none",
    "&:hover": {
      border: error ? "1.5px solid #ef4444" : "1px solid #aaa",
    },
  }),
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
  option: (styles, { isDisabled, isFocused, isSelected }) => ({
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
  }),
});

const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9" },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630" },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

const CustomizedSelect = (prop) => {
  const error = !!prop.fieldState?.error;

  return (
    <div>
      <Select
        {...prop.field}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={colourOptions}
        onChange={(selectedOptions) => prop.field.onChange(selectedOptions)}
        value={prop.field.value || []}
        styles={colourStyles(error)}
        className={`basic-multi-select ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        classNamePrefix="select"
        placeholder="Select an option"
        isSearchable
        isClearable
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        isOptionDisabled={(option) => option.isDisabled}
        hideSelectedOptions={true}
        // Removed unnecessary props
      />
      {/* {error && (
        <p className="text-red-500 text-sm mt-1">
          {prop.fieldState.error.message}
        </p>
      )} */}
    </div>
  );
};

export default CustomizedSelect;
