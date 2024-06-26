import Axios from 'axios';

export async function getImages(query, currentPage) {
  const axios = Axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
      key: '43101979-d4b3d95f27087e7220544f5cb',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: 15,
    },
  });

  const response = await axios.get('');
  return response.data;
}

// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

// key — твій унікальний ключ доступу до API.  43101979-d4b3d95f27087e7220544f5cb
// q — слово для пошуку. Те, що буде вводити користувач.
// image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
// orientation — орієнтація фотографії. Постав значення horizontal.
// safesearch — фільтр за віком. Постав значення true.
