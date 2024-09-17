import { useQuery } from '@tanstack/react-query';
import { getAllCountries } from '../services/requests/CountryRequests';

export default function useGetAllCountries() {
  const { data: countries, isLoading: areCountriesLoading } = useQuery({
    queryKey: ['getAll'],
    queryFn: async () => {
      const res = await getAllCountries();

      return res.data;
    },
  });

  return { countries, areCountriesLoading };
}
