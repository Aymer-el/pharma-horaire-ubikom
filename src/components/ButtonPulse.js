import React from 'react';
import PulseLoader from 'react-native-pulse';
 
const PulseButton = ({}) => (
    <PulseLoader color='green' numPulses={3} diameter={400} 
    speed={20} duration={2000} />
);

export default PulseButton;