import "../App.css";
import { Chart, Series, Title } from "@highcharts/react";

export default function PieChart() {
	const pieData = [
		["Chrome", 61.04],
		["Internet Explorer", 11.84],
		["Firefox", 10.85],
		["Edge", 4.67],
		["Safari", 4.18],
		["Opera", 1.64],
		["Other", 5.78],
	];

	return (
		<div className="chart-container">
			<Chart>
				<Title>Browser Market Share</Title>
				<Series type="pie" data={pieData} />
			</Chart>
		</div>
	);
}
