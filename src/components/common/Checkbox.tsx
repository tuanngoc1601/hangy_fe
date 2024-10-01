const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <label className="relative block cursor-pointer checkbox-container w-[18px] h-[18px]">
      <input
        type="checkbox"
        name=""
        checked={checked}
        onChange={onChange}
        className="absolute opacity-0 cursor-pointer w-0 h-0"
      />
      <div className="absolute top-0 left-0 border w-full h-full rounded-sm border-[#00000024] shadow-[0_2px_0_0_rgba(0,0,0,0.02)] checkmark"></div>
    </label>
  );
};

export default Checkbox;
