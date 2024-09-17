import { Navigate, useParams } from 'react-router-dom';
import useGetBorder from '../../app/hooks/useGetBorder';
import useGetFlag from '../../app/hooks/useGetFlag';
import useGetPopulation from '../../app/hooks/useGetPopulation';
import RedirectToHome from '../components/RedirectToHome';
import PopulationChart from '../components/PopulationChart';
import CountryDetails from '../components/CountryDetails';
import { Spinner } from '../components/Spinner';

export default function CountryInfo() {
  const { countryCode } = useParams();

  if (!countryCode) {
    return <Navigate to="/" replace />;
  }

  const { searchedBorders, areSearchedBordersLoading } =
    useGetBorder(countryCode);
  const { searchedFlag, isSearchedFlagLoading } = useGetFlag(countryCode);
  const { searchedPopulation, isSearchedPopulationLoading } = useGetPopulation(
    searchedBorders?.commonName
  );

  if (
    countryCode &&
    !searchedBorders?.commonName &&
    !areSearchedBordersLoading
  ) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="mt-8">
      {isSearchedFlagLoading && <Spinner />}

      {!isSearchedFlagLoading && (
        <div className=" flex items-center w-full justify-around md:w-80 m-auto">
          <h1 className="font-semibold text-4xl">{searchedFlag?.name}</h1>

          <div className="w-16 h-16 flex items-center">
            <img src={searchedFlag?.flag} alt="Country flag" />
          </div>
        </div>
      )}

      <div className="mt-10">
        {areSearchedBordersLoading && <Spinner />}

        {!areSearchedBordersLoading && (
          <CountryDetails
            commonName={searchedBorders?.commonName}
            countryCode={searchedBorders?.countryCode}
            borders={searchedBorders?.borders}
            officialName={searchedBorders?.region}
            region={searchedBorders?.region}
          />
        )}

        {isSearchedPopulationLoading && <Spinner />}

        {searchedPopulation && !isSearchedPopulationLoading && (
          <div className="">
            <PopulationChart
              populationData={searchedPopulation.populationCounts}
            />
          </div>
        )}
      </div>

      <RedirectToHome />
    </div>
  );
}
