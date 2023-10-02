import { useMemo, useState } from "react";
import { ImSearch } from "react-icons/im";
import { MdOutlineClear } from "react-icons/md";
import Select, {
  CSSObjectWithLabel,
  ControlProps,
  GroupBase,
  InputActionMeta,
  InputProps,
  Theme,
  components,
} from "react-select";
import { useDebounce } from "use-debounce";
import GeocodingData from "../../entities/GeocodingData";
import useGlobalStore from "../../globalStore";
import useGeocoding from "../../hooks/useGeocoding";

interface SelectOptionType {
  value: GeocodingData;
  label: string;
}

const Input = (props: InputProps<SelectOptionType, false>) => (
  <components.Input {...props} isHidden={false} />
);
const DropdownIndicator = () => null;
const IndicatorSeparator = () => null;

const SearchBar = () => {
  const [locationQuery, setLocationQuery] = useState("");
  const [debouncedLocationQuery] = useDebounce(locationQuery, 200);

  const [selectValue, setSelectValue] = useState<SelectOptionType>(
    {} as SelectOptionType,
  );

  const setCurrentLocation = useGlobalStore((s) => s.setCurrentLocation);
  const { data: locations, isLoading } = useGeocoding(debouncedLocationQuery);

  const selectOptions: SelectOptionType[] = useMemo(
    () =>
      locations?.map((loc) => ({ value: loc, label: loc.display_name })) || [],
    [locations],
  );

  const handleSelect = (selectedOption: SelectOptionType | null) => {
    if (selectedOption) {
      setCurrentLocation(selectedOption.value);
      setLocationQuery(selectedOption.label);
      setSelectValue(selectedOption);
    }
  };

  const handleInputChange = (input: string, { action }: InputActionMeta) => {
    if (action === "input-change") setLocationQuery(input);
  };

  const handleReset = () => {
    setCurrentLocation({} as GeocodingData);
    setLocationQuery("");
    setSelectValue({} as SelectOptionType);
  };

  const selectTheme = (theme: Theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#e2e8f0", // active color
      primary: "#94a3b8", // selected value color
    },
  });

  const selectStyles = {
    container: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      width: "100px", // disables infinite resizing while typing
    }),
    control: (
      baseStyles: CSSObjectWithLabel,
      state: ControlProps<SelectOptionType, false, GroupBase<SelectOptionType>>,
    ) => ({
      ...baseStyles,
      border: "none",
      boxShadow: "none",
      outline: state.isFocused ? "2px solid black" : "2px solid #e5e7eb",
      borderRadius: "0.75rem",
      cursor: "text",
      paddingLeft: "2.5rem",
      paddingRight: "1.875rem",
    }),
    option: (baseStyles: CSSObjectWithLabel) => ({
      ...baseStyles,
      fontSize: "0.875rem",
      padding: "0.5rem 0.75rem",
      cursor: "pointer",
    }),
  };

  return (
    <div className="relative ml-1 flex w-full items-center justify-center">
      <div className="absolute left-3 z-10">
        <ImSearch />
      </div>
      <Select
        filterOption={null}
        controlShouldRenderValue={false}
        options={selectOptions}
        isLoading={isLoading}
        className="min-w-full"
        placeholder="type your location here"
        value={selectValue}
        inputValue={locationQuery}
        onChange={handleSelect}
        onInputChange={handleInputChange}
        theme={selectTheme}
        styles={selectStyles}
        components={{
          Input,
          DropdownIndicator,
          IndicatorSeparator,
        }}
      />
      <button
        onClick={handleReset}
        className="absolute right-2"
        aria-label="reset location search"
      >
        <MdOutlineClear color="#6B7280" fontSize="0.75rem" />
      </button>
    </div>
  );
};

export default SearchBar;
