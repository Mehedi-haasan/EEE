import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const { CanvasJSChart } = CanvasJSReact;

const Charts3 = () => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Company Revenue by Year"
    },
    axisY: {
      title: "Revenue in USD",
      valueFormatString: "#0,,.",
      suffix: "mn",
      prefix: "$"
    },
    data: [{
      type: "splineArea",
      color: "rgba(54,158,173,.7)",
      markerSize: 5,
      xValueFormatString: "YYYY",
      yValueFormatString: "$#,##0.##",
      dataPoints: [
        { x: new Date(2007, 0), y: 3289000 },
        { x: new Date(2008, 0), y: 3830000 },
        { x: new Date(2009, 0), y: 2009000 },
        { x: new Date(2010, 0), y: 2840000 },
        { x: new Date(2011, 0), y: 2396000 },
        { x: new Date(2012, 0), y: 1613000 },
        { x: new Date(2013, 0), y: 2821000 },
        { x: new Date(2014, 0), y: 2000000 },
        { x: new Date(2015, 0), y: 1397000 },
        { x: new Date(2016, 0), y: 2506000 },
        { x: new Date(2017, 0), y: 2798000 },
        { x: new Date(2018, 0), y: 3386000 },
        { x: new Date(2019, 0), y: 6704000 },
        { x: new Date(2020, 0), y: 6026000 },
        { x: new Date(2021, 0), y: 2394000 },
        { x: new Date(2022, 0), y: 1872000 },
        { x: new Date(2024, 0), y: 2140000 }
      ]
    }]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Charts3;
