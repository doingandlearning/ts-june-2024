import { ApiResponse } from "../types";

interface Props {
	data: ApiResponse
	error?: string
}

const DisplayData = ({ data, error }: Props) => (
	<div className="display-data">
		{error && <p>Error: {error}</p>}
		{data && <pre>{JSON.stringify(data, null, 2)}</pre>}
	</div>
);

export default DisplayData