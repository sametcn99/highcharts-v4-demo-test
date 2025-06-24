import "../App.css";
import { Chart, Series, Title } from "@highcharts/react";

export default function CombinationChart() {
	const salesData = [
		29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6,
		54.4,
	];
	const temperaturesData = [
		7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
	];

	return (
		<div className="chart-container">
			<Chart>
				<Title>Sales vs Temperature Data</Title>
				<Series type="column" data={salesData} />
				<Series type="line" data={temperaturesData} />
				<Series
					type="spline"
					data={[10, 15, 20, 25, 30, 35, 30, 25, 20, 15, 10, 5]}
				/>
			</Chart>
		</div>
	);
}
