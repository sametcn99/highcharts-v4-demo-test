import "../App.css";
import { Chart, Series, Title } from "@highcharts/react";

export default function ChartWithOptions() {
	const asiaData = [502, 635, 809, 947, 1402, 3634, 5268];
	const africaData = [106, 107, 111, 133, 221, 767, 1766];
	const europeData = [163, 203, 276, 408, 547, 729, 628];

	return (
		<div className="chart-container">
			<Chart>
				<Title>Chart With Options</Title>
				<Series
					type="area"
					options={{
						name: "Asia",
						zoomEnabled: true,
						legendSymbol: "areaMarker",
						includeInDataExport: true,
						skipKeyboardNavigation: false,
						accessibility: {
							descriptionFormat: "{series.name} data for {point.x}: {point.y}",
							exposeAsGroupOnly: true,
							point: {
								valueDescriptionFormat: "{point.y} people",
								valueSuffix: " people",
							},
							description: "Population data for Asia over time",
						},
					}}
					data={asiaData}
				/>
				<Series type="area" data={africaData} />
				<Series type="area" data={europeData} />
			</Chart>
		</div>
	);
}
