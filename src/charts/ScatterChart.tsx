import "../App.css";
import { Chart, Series, Title } from "@highcharts/react";

export default function ScatterChart() {
	const maleData = [
		[174.0, 65.6],
		[175.3, 71.8],
		[193.5, 80.7],
		[186.5, 72.6],
		[187.2, 78.8],
		[181.5, 74.8],
		[184.0, 86.4],
		[184.5, 78.4],
		[175.0, 62.0],
		[184.0, 81.6],
		[180.0, 76.6],
		[177.8, 83.6],
		[192.0, 90.0],
		[176.0, 74.6],
		[174.0, 71.0],
		[184.0, 79.6],
		[192.7, 93.8],
		[171.5, 70.0],
		[173.0, 72.4],
		[176.0, 85.9],
	];

	const femaleData = [
		[161.2, 51.6],
		[167.5, 59.0],
		[159.5, 49.2],
		[157.0, 63.0],
		[155.8, 53.6],
		[170.0, 59.0],
		[159.1, 47.6],
		[166.0, 69.8],
		[176.2, 66.8],
		[160.2, 75.2],
		[172.5, 55.2],
		[170.9, 54.2],
		[172.9, 62.5],
		[153.4, 42.0],
		[160.0, 50.0],
		[147.2, 49.8],
		[168.2, 49.2],
		[175.0, 73.2],
		[157.0, 47.8],
		[167.6, 68.8],
	];

	return (
		<div className="chart-container">
			<Chart>
				<Title>Height vs Weight Scatter Plot</Title>
				<Series type="scatter" data={maleData} />
				<Series type="scatter" data={femaleData} />
			</Chart>
		</div>
	);
}
