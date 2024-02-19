import axios from "axios";

type fetchData = {
  page: string;
  method?: string;
  data?: null;
  headers?: {};
};

export const fetchData = async ({
  page,
  method = "GET",
  data,
  headers,
}: fetchData) => {
  try {
    const response = await axios({
      url: `http://localhost:3000/${page}`,
      method,
      data,
      headers,
    });

    const dataServ = response.data;
    return dataServ;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from server");
  }
};
