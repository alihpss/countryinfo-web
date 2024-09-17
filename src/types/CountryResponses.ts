export interface CountriesWithFlags {
  flag: string;
  countryCode: string;
  name: string;
}

export interface GetSearchedWithFlagResponse {
  error: boolean;
  msg: string;
  data: {
    name: string;
    iso2: string;
    iso3: string;
    unicodeFlag: string;
  };
}

export interface GetOneWithFlagResponse {
  error: boolean;
  msg: string;
  data: {
    name: string;
    iso2: string;
    iso3: string;
    flag: string;
  };
}

export interface GetByCountryCode {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders?: {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: null;
  }[];
}

export interface GetPopulationRequest {
  error: boolean;
  msg: string;
  data: {
    country: string;
    code: string;
    iso3: string;
    populationCounts: {
      year: number;
      value: number;
    }[];
  };
}
