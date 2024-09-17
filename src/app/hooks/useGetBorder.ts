import { useQuery } from '@tanstack/react-query';
import { getBorders } from '../services/requests/CountryRequests';

export default function useGetBorder(countryCode: string) {
  const { data: searchedBorders, isLoading: areSearchedBordersLoading } =
    useQuery({
      queryKey: ['getBorders', countryCode],
      queryFn: async () => {
        const { data } = await getBorders(countryCode);

        return data;
      },
      enabled: !!countryCode && countryCode.length === 2,
    });

  return { searchedBorders, areSearchedBordersLoading };
}
