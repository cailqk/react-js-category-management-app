const baseUrl = "http://localhost:5010/";

async function getAll(url) {
  return fetch(baseUrl + url)
    .then((res) => {
      let link = res.headers.get("Link");
      let pagination = {};

      if (link !== null && link !== "") {
        let head = link.split(", ");

        head.map((el) => {
          let info = el.split("; ");
          let page = parseInt(info[0].split("_page=")[1].split(">")[0]);
          let sign = info[1].split('"')[1];

          pagination[sign] = page;
        });
      }
      const response = {
        pagination,
        data: res.json(),
      };

      return response;
    })
    .then((data) => {
      return data.data.then((res) => {
        const response = {
          pagination: data.pagination,
          data: res,
        };

        return response;
      });
    });
}

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  if (data) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  return fetch(baseUrl + url, options)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

async function get(url) {
  return fetch(baseUrl + url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

const post = request.bind({}, "POST");
const del = request.bind({}, "DELETE");
const patch = request.bind({}, "PATCH");

export { getAll, post, del, patch, get };
