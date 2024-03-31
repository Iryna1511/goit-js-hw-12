export function getImages(query) {
  const API_KEY = "43101979-d4b3d95f27087e7220544f5cb";
  const baseURL = "https://pixabay.com/api/?";
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });
  const URL = baseURL + params;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

// key — твій унікальний ключ доступу до API.  43101979-d4b3d95f27087e7220544f5cb
// q — слово для пошуку. Те, що буде вводити користувач.
// image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
// orientation — орієнтація фотографії. Постав значення horizontal.
// safesearch — фільтр за віком. Постав значення true.
