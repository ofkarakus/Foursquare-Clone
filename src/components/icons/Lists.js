import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function SvgLists(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60.123 60.123"
      width="20"
      height="20"
      {...props}>
      <Path d="M57.124 51.893H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6zM57.124 33.062H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6zM57.124 14.231H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6z" />
      <Circle cx={4.029} cy={11.463} r={4.029} />
      <Circle cx={4.029} cy={30.062} r={4.029} />
      <Circle cx={4.029} cy={48.661} r={4.029} />
    </Svg>
  );
}

export default SvgLists;
