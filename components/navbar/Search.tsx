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
      className={`group flex cursor-pointer flex-row items-center gap-0 border-2 border-solid border-transparent text-sm transition-all duration-300 focus-within:gap-2 focus-within:rounded-md focus-within:border-primary-main focus-within:bg-primary-50 focus-within:px-3 focus-within:py-2 lg:text-base`}>
      <SearchNormal1
        size="30"
        className="text-primary-main transition-colors duration-300 group-focus-within:hidden group-focus-within:text-text-200 group-focus-within:lg:block"
        variant="Linear"
      />
      <input
        ref={inputRef}
        className="w-0 bg-transparent transition-all duration-300 focus:w-32 focus:outline-0 focus:lg:w-36"
        type="text"
        placeholder="جست و جو کنید"
      />
    </div>
  );
};

export default Search;
