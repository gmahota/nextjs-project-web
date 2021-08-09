import Repository, { baseUrl, serializeQuery } from './Repository';

const get_Projects = async (filter) => {
  try {



    let res = [];

    await Repository.get(`${baseUrl}/projects`)
      .then((response) => res =response.data)


      console.log(res)
    return res;
  } catch (e) {
    console.error(e);
  }
};

const get_Project = async (id) => {
  try {
    const url =`${baseUrl}/projects/${id}`;

    let res = {};

    await Repository.get(url)
      .then((response) => (res = response.data));

    return res;
  } catch (e) {
    console.error(e);
  }
};
export default { get_Projects, get_Project };
