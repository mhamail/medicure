import React from 'react'

import dynamic from 'next/dynamic';

const GaugeChart = dynamic(() => import('react-gauge-chart'), {
  ssr: false // Set ssr to false if the component is not server-side rendering compatible
});

const MeterChart = () => {
  return (
    <div>
    <GaugeChart
      id="gauge-chart3"
      nrOfLevels={2}
      arcsLength={[1, 0.25]}
      colors={["#3F435B", "#F2CD91"]}
      arcWidth={0.3}
      needleColor={"#3F435B"}
      needleBaseColor={"#F2CD91"}
      percent={0.80}
      textColor={'black'}
      // hideText={true} // If you want to hide the text
    />
  </div>
  )
}

export default MeterChart