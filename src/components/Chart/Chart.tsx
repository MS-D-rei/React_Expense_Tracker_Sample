import ChartBar from '@/components/Chart/ChartBar';
import '@/components/Chart/Chart.css';
import { ExpenseChartData } from '@/components/Expenses/types';

function Chart(props: { dataPoints: ExpenseChartData[] }) {
  const dataPointValueArray = props.dataPoints.map((dataPoint) => dataPoint.value)
  const maxValueInMonths = Math.max(...dataPointValueArray)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValueInMonths}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
