import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PopulationData {
  year: number;
  value: number;
}

interface PopulationChartProps {
  populationData: PopulationData[];
}

export default function PopulationChart({
  populationData,
}: PopulationChartProps) {
  const years = populationData.map((item) => item.year);
  const populationValues = populationData.map((item) => item.value);

  const data: ChartData<'line'> = {
    labels: years,
    datasets: [
      {
        label: 'Population',
        data: populationValues,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toLocaleString();
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Population',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="font-semibold text-lg my-4">Population data:</h1>
      <Line data={data} options={options} />
    </div>
  );
}
