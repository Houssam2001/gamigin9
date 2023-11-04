import axios from 'axios';
import { useInfiniteQuery } from 'react-query';

const useFeed = () => {
  const fetchFeedData = async ({ pageParam = 1 }) => {
    try {
      const response = await axios.get(`https://gamigin-api.vercel.app
/api/scraped_data?page=${pageParam}`);
      return response.data; // Assuming the API response contains 'data' and 'totalPages' properties
    } catch (error) {
      throw new Error('Error fetching feed data: ' + error.message);
    }
  };

  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'feedData',
    fetchFeedData,
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.totalPages > allPages.length ? allPages.length + 1 : undefined;
      },
    }
  );

  return { data, isLoading, isError, fetchNextPage, hasNextPage };
};

export default useFeed;
