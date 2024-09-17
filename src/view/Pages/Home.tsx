import useGetAllCountries from '../../app/hooks/useGetAllCountries';
import { SearchBar } from '../components/SearchBar';
import SearchedCountryContainer from '../components/SearchedCountryContainer';

export default function Home() {
  const { countries } = useGetAllCountries();

  return (
    <div className="h-full w-full">
      <SearchBar />

      <div className="flex flex-col w-11/12 md:w-3/5 justify-center mx-auto mt-12 gap-4 pb-4">
        {countries?.map(({ countryCode, flag, name }) => (
          <SearchedCountryContainer
            key={countryCode}
            countryCode={countryCode}
            flag={flag}
            name={name}
          />
        ))}
      </div>
    </div>
  );
}
