import "./App.css";
import AreaChart from "./charts/AreaChart";
import BarChart from "./charts/BarChart";
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
				<SimpleMultipleChart />
				<CombinationChart />
				<PieChart />
				<ScatterChart />
				<BarChart />
				<AreaChart />
				<ColumnChart />
			</div>
		</>
	);
}

export default App;
