import "../App.css";
import { Chart, Series, Title } from "@highcharts/react";

export default function BarChart() {
	const historicData = [107, 31, 635, 203, 2];
	const projectedData = [133, 156, 947, 408, 6];

	return (
		<div className="chart-container">
			<Chart>
				<Title>Historic and Projected Population</Title>
				<Series type="bar" data={historicData} />
				<Series type="bar" data={projectedData} />
			</Chart>
		</div>
	);
}
