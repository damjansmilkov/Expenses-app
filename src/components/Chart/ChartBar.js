import "./ChartBar.css";

const ChartBar = (properties) => {
  let barFiller = "0%";

  if (properties.maxValue > 0) {
    barFiller =
      Math.round((properties.value / properties.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFiller }}></div>
      </div>
      <div className="chart-bar__label">{properties.label}</div>
    </div>
  );
};
export default ChartBar;
