import { useQuery } from '@tanstack/react-query';
import { getFlag } from '../services/requests/CountryRequests';

export default function useGetFlag(countryCode: string) {
  const { data: searchedFlag, isLoading: isSearchedFlagLoading } = useQuery({
    queryKey: ['getFlag', countryCode],
    queryFn: async () => {
      const { data } = await getFlag(countryCode);

      return data.data;
    },
    enabled: !!countryCode && countryCode.length === 2,
  });

  return { searchedFlag, isSearchedFlagLoading };
}
