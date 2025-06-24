import "./App.css";
import { Chart, Title } from "@highcharts/react";
import { Area, Line } from "@highcharts/react/series";

export default function SimpleMultipleChart() {
    return (
        <>
            <Chart>
                <Title>Chart with multiple series types</Title>
                <Area.Series data={[0, 1, 2, 3]} />
                <Line.Series data={[2, 1, 3, 1]} />
            </Chart>
        </>
    );
}
