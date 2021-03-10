import useAPI from './useAPI';

const useSearch = (name) => {
  const {response: eventDetails, loading, error} = useAPI({mode: 'search', name});
  
  return {
    conditions,
    loading,
    error
  }
}

export default useSearch;