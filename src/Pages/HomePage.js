import React, { useState } from 'react';

const HomePage=()=> {
  const [stateName, setStateName] = useState('');
  const [districts, setDistricts] = useState([]);

  const handleStateChange = (e) => {
    setStateName(e.target.value);
  };

  const handleGetDistricts = async () => {
    const response = await fetch(`https://districts.nic.in/api/v1/state/${stateName}/district`);
    const data = await response.json();
    setDistricts(data.districts);
  };

  return (
    <div>
      <label htmlFor="state-name">State Name:</label>
      <input type="text" id="state-name" value={stateName} onChange={handleStateChange} />
      <button onClick={handleGetDistricts}>Get Districts</button>
      <ul>
        {districts.map((district) => (
          <li key={district.district_code}>{district.district_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
