import { useNavigate } from 'react-router-dom';

interface SearchedCountryContainerProps {
  name: string;
  countryCode: string;
  flag: string;
}

export default function SearchedCountryContainer({
  flag,
  name,
  countryCode,
}: SearchedCountryContainerProps) {
  const navigate = useNavigate();

  const handleGoToCountryInfo = (countryCode: string) => {
    navigate(`/${countryCode}`);
  };

  return (
    <button
      className="w-full"
      onClick={() => handleGoToCountryInfo(countryCode)}
    >
      <div className="bg-purple-50 flex items-center justify-between py-4 px-5 cursor-pointer border-[1px] rounded-md">
        <p>
          {name} - {countryCode}
        </p>
        <p>{flag}</p>
      </div>
    </button>
  );
}
