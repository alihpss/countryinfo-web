import { useState } from 'react';
import { cn } from '../../app/utils/cn';

import closeIcon from '../../../public/images/close.svg';
import useGetCountryBySearch from '../../app/hooks/useGetBySearch';
import SearchedCountryContainer from './SearchedCountryContainer';

export function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const { searchedCountry } = useGetCountryBySearch(searchValue);

  return (
    <div className="flex items-center justify-center w-10/12 max-w-lg mx-auto mt-12 relative">
      <div className="w-full">
        <label htmlFor="search" className="ml-2 text-gray-700">
          Search country
        </label>

        <div className="w-full relative">
          <input
            type="text"
            name="search"
            maxLength={2}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Country code Ex: UK"
            className="bg-blue-200 w-full p-3 placeholder:text-black rounded-md outline-none mt-1"
          />

          {searchValue && (
            <div className=" absolute right-0 p-2 top-1/2 -translate-y-1/2">
              <button type="button" onClick={() => setSearchValue('')}>
                <img src={closeIcon} alt="Close" className="" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className={cn(
          'absolute bg-blue-200 bottom-[-140px] h-36 w-full overflow-y-scroll p-3 space-y-4 rounded-b-md',
          !searchValue && 'hidden'
        )}
      >
        {!searchedCountry && searchValue.length !== 1 && (
          <p className="text-center mt-4">No countries found.</p>
        )}

        {searchValue.length === 1 && (
          <p className="text-center mt-4">Fill the complete code</p>
        )}

        {searchedCountry && (
          <SearchedCountryContainer
            countryCode={searchedCountry?.iso2 || ''}
            flag={searchedCountry?.unicodeFlag || ''}
            name={searchedCountry?.name || ''}
          />
        )}
      </div>
    </div>
  );
}
