interface InfoProps {
  commonName?: string;
  officialName?: string;
  countryCode?: string;
  region?: string;
}

export function CountryInfo({
  commonName,
  countryCode,
  officialName,
  region,
}: InfoProps) {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="">
        <span>Official name: </span>
        <span className="text-lg">{officialName}</span>
      </div>
      <div className="">
        <span>Region: </span>
        <span className="text-lg">{region}</span>
      </div>

      <div className="">
        <span>Country code: </span>
        <span className="text-lg">{countryCode}</span>
      </div>

      <div className="">
        <span>Commom name: </span>
        <span className="text-lg">{commonName}</span>
      </div>
    </div>
  );
}
