import React, { useState, useEffect } from 'react';
import Chart from 'react-google-charts';

const PieChart = (props) => {
  const { data } = props;

  const [formatedData, setFormatedData] = useState([]);

  useEffect(() => {
    const newData = data.map((item) => ([
      `${item.firstName} ${item.lastName}`, item.participation,
    ]));
    newData.unshift(['Name', 'Participation']);
    setFormatedData(newData);
  }, [data]);

  return (
    <Chart
      width="500px"
      height="300px"
      chartType="PieChart"
      pieSliceText="label"
      loader={<div>Loading Chart</div>}
      data={formatedData}
      options={{
        pieHole: 0.5,
      }}
    />
  );
};

export default PieChart;
