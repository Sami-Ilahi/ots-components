interface Props {
  options: string[];
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectFilter = ({ options, handleChange }: Props) => {
  console.log("options", options);

  return (
    <div className="w-full bg-gray-100 p-4 rounded-lg text-black">
      <label className=" w-32">Filter By: </label>
      <select
        className="w-full h-full outline-none"
        name="selectFilter"
        onChange={handleChange}
      >
        {options.map((optionz: string) => (
          <option key={optionz} value={optionz} className="capitalize">
            {optionz}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
