import { useQuery } from '@tanstack/react-query';
import { getPopulation } from '../services/requests/CountryRequests';

export default function useGetPopulation(country?: string) {
  const { data: searchedPopulation, isLoading: isSearchedPopulationLoading } =
    useQuery({
      queryKey: ['getBySearch', country],
      queryFn: async () => {
        const { data } = await getPopulation(country);

        return data.data;
      },
      enabled: !!country,
    });

  return { searchedPopulation, isSearchedPopulationLoading };
}
