interface AllApiResponse {
  statusCode: number;
  status: string;
}

interface UserAPIResponse extends AllApiResponse {
  body: {
    username: string;
    email: string;
  };
}

interface FavouriteAPIResponse extends AllApiResponse {
  body: {
    name: string;
    episode: string;
  };
}

interface BBCApiResponse<DataType> {
  statusCode: number;
  status: string;
  body: DataType;
}

const response: BBCApiResponse<Array<{ headline: string; content: string }>> =
  null;

type NewsApi = BBCApiResponse<{ headline: string }[]>;
