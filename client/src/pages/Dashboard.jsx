import { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function Dashboard() {
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/metrics').then((res) => setData(res.data));
  }, []);

  return (
    <div style={{ display: 'flex', background: darkMode ? '#0A2540' : 'white', color: darkMode ? 'white' : 'black', minHeight: '100vh' }}>
      <div style={{ width: '200px', background: '#0A2540', color: 'white', height: '100vh', padding: '20px' }}>
        Sidebar
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <h2>Dashboard</h2>
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
        <h3>Revenue</h3>
        <LineChart width={500} height={250} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#2563EB" />
        </LineChart>
        <h3>Users</h3>
        <BarChart width={500} height={250} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#0D9488" />
        </BarChart>

        <h3>Monthly Data</h3>
        <table border="1" cellPadding="8">
          <thead>
            <tr><th>Month</th><th>Revenue</th><th>Users</th><th>Churn %</th></tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row._id}>
                <td>{row.month}</td>
                <td>{row.revenue}</td>
                <td>{row.users}</td>
                <td>{row.churn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;