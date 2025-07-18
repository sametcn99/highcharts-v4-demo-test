import "../App.css";
import { Chart, Series, Title } from "@highcharts/react";

export default function ColumnChart() {
	const berlinData = [
		-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5,
	];
	const londonData = [
		3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8,
	];
	const newYorkData = [
		-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0,
	];
	const tokyoData = [
		7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
	];

	return (
		<div className="chart-container">
			<Chart>
				<Title>Average Temperature by City</Title>
				<Series type="column" data={berlinData} />
				<Series type="column" data={londonData} />
				<Series type="column" data={newYorkData} />
				<Series type="column" data={tokyoData} />
			</Chart>
		</div>
	);
}
