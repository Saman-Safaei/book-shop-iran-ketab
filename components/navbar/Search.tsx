import type { FC } from "react";
import { SearchNormal1 } from "iconsax-react";
import { useRef } from "react";

export interface SearchProps {}

const Search: FC<SearchProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={clickHandler}
      className={`cursor-pointer group flex flex-row items-center gap-0 focus-within:gap-2 focus-within:bg-primary-100 focus-within:py-2 focus-within:px-3 focus-within:rounded-md border-solid border-transparent border-2 focus-within:border-primary-main transition-all duration-300`}>
      <SearchNormal1 size="30" className="text-primary-main group-focus-within:text-text-200 transition-colors duration-300" variant="Linear" />
      <input
        ref={inputRef}
        className="w-0 focus:w-36 focus:outline-0 bg-transparent transition-all duration-300"
        type="text"
        placeholder="جست و جو کنید"
      />
    </div>
  );
};

export default Search;
