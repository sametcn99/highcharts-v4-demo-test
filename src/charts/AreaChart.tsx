import "../App.css";
import { Chart, Series, Title } from "@highcharts/react";

export default function AreaChart() {
	const asiaData = [502, 635, 809, 947, 1402, 3634, 5268];
	const africaData = [106, 107, 111, 133, 221, 767, 1766];
	const europeData = [163, 203, 276, 408, 547, 729, 628];

	return (
		<div className="chart-container">
			<Chart>
				<Title>Population by Continent Over Time</Title>
				<Series type="area" data={asiaData} />
				<Series type="area" data={africaData} />
				<Series type="area" data={europeData} />
			</Chart>
		</div>
	);
}
