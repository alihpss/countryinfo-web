import { useNavigate } from 'react-router-dom';

interface BordersProps {
  borders?: {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: null;
  }[];
}

export default function Borders({ borders }: BordersProps) {
  const navigate = useNavigate();

  const handleGoToCountryInfo = (countryCode: string) => {
    navigate(`/${countryCode}`);
  };
  return (
    <div className="mt-12 md:mt-0 flex flex-col">
      <p className="font-semibold text-lg text-center">
        Border countries: Click on them to see more information about.
      </p>
      {borders?.length === 0 && <p>No border countries.</p>}
      {borders?.map((border) => (
        <button
          key={border.commonName}
          className="py-2 block"
          onClick={() => handleGoToCountryInfo(border.countryCode)}
        >
          {border.commonName}
        </button>
      ))}
    </div>
  );
}
