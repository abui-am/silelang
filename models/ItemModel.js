import { getApi } from "../api/Api";

const initializeItem = (item) => {
  return {
    ...item,
    getImages: () => getApi().get(`items/${item.id_barang}/images`),
  };
};

export { initializeItem };
