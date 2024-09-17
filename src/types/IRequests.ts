export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ApiError {
  response: {
    data: {
      message: string;
      success: boolean;
    };
  };
  message: string;
}
