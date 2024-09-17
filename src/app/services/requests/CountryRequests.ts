import {
  CountriesWithFlags,
  GetByCountryCode,
  GetOneWithFlagResponse,
  GetPopulationRequest,
  GetSearchedWithFlagResponse,
} from '../../../types/CountryResponses';
import { ApiError, ApiResponse } from '../../../types/IRequests';
import { httpClient } from '../httpClient';

const getAllCountries = async () => {
  try {
    const { data } =
      await httpClient.get<ApiResponse<CountriesWithFlags[]>>('/all');

    if (!data.success) {
      throw new Error();
    }

    return data;
  } catch (error) {
    const apiError = error as ApiError;

    if (apiError.response && apiError.response.data) {
      throw new Error(apiError.response.data.message);
    }

    throw new Error('Error to list countries.');
  }
};

const getBySearch = async (countryCode: string) => {
  try {
    const { data } = await httpClient.get<
      ApiResponse<GetSearchedWithFlagResponse>
    >(`find?countryCode=${countryCode}`);

    if (!data.success) {
      throw new Error();
    }

    return data;
  } catch (error) {
    const apiError = error as ApiError;

    if (apiError.response && apiError.response.data) {
      throw new Error(apiError.response.data.message);
    }

    throw new Error('Error when search country.');
  }
};

const getFlag = async (countryCode: string) => {
  try {
    const { data } = await httpClient.get<ApiResponse<GetOneWithFlagResponse>>(
      `flag?countryCode=${countryCode}`
    );

    if (!data.success) {
      throw new Error();
    }

    return data;
  } catch (error) {
    const apiError = error as ApiError;

    if (apiError.response && apiError.response.data) {
      throw new Error(apiError.response.data.message);
    }

    throw new Error('Error to show flag.');
  }
};

const getBorders = async (countryCode: string) => {
  try {
    const { data } = await httpClient.get<ApiResponse<GetByCountryCode>>(
      `borders/${countryCode}`
    );

    if (!data.success) {
      throw new Error();
    }

    return data;
  } catch (error) {
    const apiError = error as ApiError;

    if (apiError.response && apiError.response.data) {
      throw new Error(apiError.response.data.message);
    }

    throw new Error('Error to get border countries.');
  }
};

const getPopulation = async (country?: string) => {
  try {
    const { data } = await httpClient.get<ApiResponse<GetPopulationRequest>>(
      `population/${country}`
    );

    if (!data.success) {
      throw new Error();
    }

    return data;
  } catch (error) {
    const apiError = error as ApiError;

    if (apiError.response && apiError.response.data) {
      throw new Error(apiError.response.data.message);
    }

    throw new Error('Error to get population.');
  }
};

export { getAllCountries, getBySearch, getFlag, getBorders, getPopulation };
