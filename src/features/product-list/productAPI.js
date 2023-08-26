// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
};

// selected product APIs
export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products/'+id);
    const data = await response.json();
    resolve({ data });
  });
};


// fetch filter categories APIs
export function fetchProductByFilters(filter, sort, pagination) {
  // filter :{'categories':"smartphone"}
  // sort = {_sort:price, _order:asc}
  // pagination = {_page:1, _limit:10}
  //  TODO : on serer we support multi value filter
  let queryString = "";
  for (let key in filter) {
    const categoriesValue = filter[key];
    if (categoriesValue.length > 0) {
      const lastCategoriesValue = categoriesValue[categoriesValue.length - 1];
      queryString += `${key}=${lastCategoriesValue}&`;
    }
  }

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/products?" + queryString
    );
    const data = await response.json();

    // json server feature for paginatin total items
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
};
