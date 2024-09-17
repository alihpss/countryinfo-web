import { useQuery } from '@tanstack/react-query';
import { getBySearch } from '../services/requests/CountryRequests';

export default function useGetCountryBySearch(countryCode: string) {
  const { data: searchedCountry, isLoading: isSearchedCountryLoading } =
    useQuery({
      queryKey: ['getBySearch', countryCode],
      queryFn: async () => {
        const { data } = await getBySearch(countryCode);

        return data.data;
      },
      enabled: countryCode.length === 2,
    });

  return { searchedCountry, isSearchedCountryLoading };
}
