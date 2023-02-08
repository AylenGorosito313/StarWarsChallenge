import axios from "axios";

const GetInfo = async () => {
  const res = await axios.get(
    "https://akabab.github.io/starwars-api/api/all.json"
  );
  return res.data;
};

export default GetInfo;
