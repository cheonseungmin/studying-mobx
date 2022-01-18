import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

export const request = async <D>(
  httpMethod: Method,
  url: string,
  config?: AxiosRequestConfig<D>,
): Promise<AxiosResponse> => axios.request({
  ...config,
  method: httpMethod,
  url
});

export const findFooData = async (
  param: string
): Promise<any> => {
  const requestConfig = {
    data: {
      param
    }
  };

  const response = await request(
    'POST',
    'http://localhost:3000/find-data',
    requestConfig
  )
    .then((response) => {
      const {
        data
      } = response;
      window.alert(data);
    })
    .catch((error) => {
      window.alert(error);
    });

  return response;
};
