import SortDropdown from "./SortDropdown";
import FilterButtons from "./FilterButtons";
import RangeInput from "./RangeInput";

export default function MainSection() {
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <SortDropdown />
          <RangeInput />
        </div>
        <FilterButtons />
      </div>
    </div>
  );
} 