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
		<div className="app">
			{/* Charts Demo Section */}
			<section className="charts-section">
				<div className="container">
					<div className="chart-grid">
						<div className="chart-item">
							<div className="chart-header">
								<h3>Simple Multiple Chart</h3>
								<p>Chart with multiple series types</p>
							</div>
							<SimpleMultipleChart />
						</div>
						<div className="chart-item">
							<div className="chart-header">
								<h3>Combination Chart</h3>
								<p>Mixed chart types in one visualization</p>
							</div>
							<CombinationChart />
						</div>
						<div className="chart-item">
							<div className="chart-header">
								<h3>Pie Chart</h3>
								<p>Perfect for showing proportions</p>
							</div>
							<PieChart />
						</div>
						<div className="chart-item">
							<div className="chart-header">
								<h3>Scatter Chart</h3>
								<p>Visualize correlations and patterns</p>
							</div>
							<ScatterChart />
						</div>
						<div className="chart-item">
							<div className="chart-header">
								<h3>Bar Chart</h3>
								<p>Compare data across categories</p>
							</div>
							<BarChart />
						</div>
						<div className="chart-item">
							<div className="chart-header">
								<h3>Area Chart</h3>
								<p>Show trends over time</p>
							</div>
							<AreaChart />
						</div>
						<div className="chart-item">
							<div className="chart-header">
								<h3>Column Chart</h3>
								<p>Essential for data comparison</p>
							</div>
							<ColumnChart />
						</div>
						<div className="chart-item">
							<div className="chart-header">
								<h3>Advanced Options</h3>
								<p>Customizable chart configurations</p>
							</div>
							<ChartWithOptions />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
