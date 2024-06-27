interface SuccessResponse {
  status: "success";
  data: any;
}

interface ErrorResponse {
  status: "error";
  message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse) {
  switch (response.status) {
    case "success":
      console.log("Data:", response.data);
      break;
    case "error":
      console.log("Error:", response.message);
      break;
    default:
      const _exhaustiveCheck: never = response;
      return _exhaustiveCheck;
  }
}

const successResponse: ApiResponse = {
  status: "success",
  data: { key: "value" },
};
const errorResponse: ApiResponse = {
  status: "error",
  message: "An error occurred",
};

handleResponse(successResponse);
handleResponse(errorResponse);
