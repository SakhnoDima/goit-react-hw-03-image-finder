import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchArticlesWithQuery = async (searchQuery, page) => {
  const KAY = '38565810-29740f5778639307be3f3659c';

  const response = await axios.get(
    `/?q=${searchQuery}&page=${page}&key=${KAY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};
