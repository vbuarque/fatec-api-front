import axios from "axios";

type Station = {
  id: number;
  lat: string;
  lon: string;
};

type GetStationResponse = {
  data: Station[];
};

export default class StationLocal {
  public async getStation() {
    try {
      const { data, status } = await axios.get<GetStationResponse>(
        "http://localhost:8080/stations/:id",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log(JSON.stringify(data, null, 4));
      console.log("response status is: ", status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }
}
