import Repository, { baseUrl, serializeQuery } from "./Repository";

const get_Candidates = async (filter) => {
  try {
    let res = [];

    await Repository.get(`${baseUrl}/candidates`).then(
      (response) => (res = response.data)
    );

    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
  }
};

const get_Candidate = async (id) => {
  try {
    const url = `${baseUrl}/candidates/${id}`;

    let res = {};

    await Repository.get(url).then((response) => (res = response.data));

    return res;
  } catch (e) {
    console.error(e);
  }
};
export default { get_Candidates, get_Candidate };
