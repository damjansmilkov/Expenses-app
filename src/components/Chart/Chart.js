import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (properties) => {
    
  const valueAray = properties.dataPoint.map(dataPoint => dataPoint.value);
  const totalMax = Math.max(...valueAray);
  return (
    <div className="chart">
      {properties.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
