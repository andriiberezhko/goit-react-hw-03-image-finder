const fetchImages = (search, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=27647410-982364d22ed3d662a246a223c&image_type=photo&orientation=horizontal&per_page=12`
  ).then(r => r.json());
};

export default fetchImages;
