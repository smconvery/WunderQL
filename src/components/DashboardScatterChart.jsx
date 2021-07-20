import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { numChildProcesses: 50, avgResponseTime: 500 },
  { numChildProcesses: 50, avgResponseTime: 400 },
  { numChildProcesses: 50, avgResponseTime: 550 },
  { numChildProcesses: 50, avgResponseTime: 600 },
  { numChildProcesses: 75, avgResponseTime: 700 },
  { numChildProcesses: 25, avgResponseTime: 200 },
  { numChildProcesses: 100, avgResponseTime: 900 },
]

// display data of num child processes versus average response time

const ScatterChartComponent = ({ loadTestHistory }) => {
  console.log('loadtesthistory: ', loadTestHistory)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        width={500}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis 
          type="number" 
          dataKey="number_of_child_processes" 
          name="Num Child Processes" 
          // unit="" 
          />
        <YAxis 
          yAxisId="left" 
          type="number" 
          dataKey="average_response_time" 
          name="Avg Response Time" 
          unit="ms" 
          stroke="#8884d8" 
          domain={['dataMin - 50', 'dataMax + 50']} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter yAxisId="left" name="A school" data={loadTestHistory} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default ScatterChartComponent;