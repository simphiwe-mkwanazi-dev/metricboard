function Dashboard() { 
  return ( 
    <div style={{ display: 'flex' }}> 
      <div style={{ width: '200px', background: '#0A2540', color: 'white', height: '100vh', padding: '20px' }}> 
        Sidebar 
      </div> 
      <div style={{ flex: 1, padding: '20px' }}> 
        <h2>Dashboard</h2> 
        <p>Charts and data will go here.</p> 
      </div> 
    </div> 
  ); 
} 
 
export default Dashboard; 