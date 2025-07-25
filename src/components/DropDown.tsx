import { Info } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface DropDownProps {
  defaultValue?: string;
  options?: string[];
  onSelect?: (value: string) => void;
}

export default function DropDown({
  defaultValue = "Limit",
  options = ["No Limit", "10 items", "25 items", "50 items", "100 items"],
  onSelect,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (option: string): void => {
    setSelectedValue(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 bg-[#F5F5F5] rounded-[4px] border border-[#E9E9E9]"
      >
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5" color="#1F1F1F" />
          <span className="text-[#000000] text-xs font-medium">
            {selectedValue}
          </span>
        </div>
        {/* <ChevronDown
          className={`w-[7px] h-[7px] text-gray-600 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          color="#1F1F1F"
        /> */}
        <img
          src="/arrow.svg"
          className={`w-[8px] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors duration-150"
            >
              <span className="text-gray-800">{option}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
