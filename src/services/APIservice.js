import { useHttp } from "../hooks/http.hooks";

const useApiService = () => {

  const { loading, request, error, clearError } = useHttp();
  const username = 'Bilostenko';

  const getRepoCount = async () => {
    return await request(`https://api.github.com/users/${username}/repos?per_page=200`);
  }

  const getCodeWarsCount = async () => {
    return await request(`https://www.codewars.com/api/v1/users/${username}`);
  }


  return {
    loading,
    error,
    clearError,
    getRepoCount,
    getCodeWarsCount
  };
}

export default useApiService;

