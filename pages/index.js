/*import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function Home() {
  const [data, setData] = useState([]);

  const addRow = () => {
    setData([...data, { project: "", revenue: 0, cost: 0 }]);
  };

  const update = (i, key, value) => {
    const copy = [...data];
    copy[i][key] = value;
    setData(copy);
  };

  const totalRevenue = data.reduce((a, b) => a + Number(b.revenue || 0), 0);
  const totalCost = data.reduce((a, b) => a + Number(b.cost || 0), 0);

  const chartData = data.map((d, i) => ({
    name: d.project || `Item ${i + 1}`,
    profit: d.revenue - d.cost
  }));

  return (
    <div style={{ padding: 20 }}>
      <h1>📊 MIS Dashboard</h1>

      <button onClick={addRow}>Add Entry</button>

      {data.map((row, i) => (
        <div key={i}>
          <input placeholder="Project" onChange={e => update(i,"project",e.target.value)} />
          <input type="number" placeholder="Revenue" onChange={e => update(i,"revenue",e.target.value)} />
          <input type="number" placeholder="Cost" onChange={e => update(i,"cost",e.target.value)} />
        </div>
      ))}

      <h2>Total Revenue: {totalRevenue}</h2>
      <h2>Total Cost: {totalCost}</h2>
      <h2>Profit: {totalRevenue - totalCost}</h2>

      <LineChart width={500} height={300} data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line dataKey="profit" />
      </LineChart>
    </div>*/
export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>🔥 MIS Dashboard is Working</h1>
    </div>
  );
}
  );
}
