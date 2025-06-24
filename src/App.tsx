import "./App.css";
import AreaChart from "./charts/AreaChart";
import BarChart from "./charts/BarChart";
import ChartWithOptions from "./charts/ChartWithOptions";
import ColumnChart from "./charts/ColumnChart";
import CombinationChart from "./charts/CombinationChart";
import PieChart from "./charts/PieChart";
import ScatterChart from "./charts/ScatterChart";
import SimpleMultipleChart from "./charts/SimpleMultipleChart";

function App() {
	return (
		<>
			<h1>Highcharts React v4 Demo</h1>

			<div className="chart-grid">
				<div>
					<strong>SimpleMultipleChart.tsx</strong>
					<SimpleMultipleChart />
				</div>
				<div>
					<strong>CombinationChart.tsx</strong>
					<CombinationChart />
				</div>
				<div>
					<strong>PieChart.tsx</strong>
					<PieChart />
				</div>
				<div>
					<strong>ScatterChart.tsx</strong>
					<ScatterChart />
				</div>
				<div>
					<strong>BarChart.tsx</strong>
					<BarChart />
				</div>
				<div>
					<strong>AreaChart.tsx</strong>
					<AreaChart />
				</div>
				<div>
					<strong>ColumnChart.tsx</strong>
					<ColumnChart />
				</div>
				<div>
					<strong>ChartWithOptions.tsx</strong>
					<ChartWithOptions />
				</div>
			</div>
		</>
	);
}

export default App;
