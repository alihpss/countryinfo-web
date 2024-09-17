import Borders from './Borders';
import { CountryInfo } from './Info';
export interface CountryDetailsProps {
  commonName?: string;
  officialName?: string;
  countryCode?: string;
  region?: string;
  borders?: {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: null;
  }[];
}

export default function CountryDetails({
  borders,
  commonName,
  countryCode,
  officialName,
  region,
}: CountryDetailsProps) {
  return (
    <div className="flex flex-col items-center justify-around mx-4 md:flex-row">
      <CountryInfo
        commonName={commonName}
        countryCode={countryCode}
        officialName={officialName}
        region={region}
      />
      <Borders borders={borders} />
    </div>
  );
}
