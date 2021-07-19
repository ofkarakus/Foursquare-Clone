import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMap(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="20"
      height="20"
      {...props}>
      <Path d="M400 0c-61.76 0-112 50.24-112 112 0 57.472 89.856 159.264 100.096 170.688 3.04 3.36 7.36 5.312 11.904 5.312s8.864-1.952 11.904-5.312C422.144 271.264 512 169.472 512 112 512 50.24 461.76 0 400 0zm0 160c-26.496 0-48-21.504-48-48s21.504-48 48-48 48 21.504 48 48-21.504 48-48 48zM10.048 187.968A16.048 16.048 0 000 202.848V496c0 5.312 2.656 10.272 7.04 13.248C9.728 511.04 12.832 512 16 512c2.016 0 4.032-.384 5.952-1.152L160 455.616V128L10.048 187.968z" />
      <Path d="M435.712 304.064C426.624 314.176 413.6 320 400 320c-13.6 0-26.624-5.824-35.712-15.936-3.264-3.616-7.456-8.384-12.288-14.048V512l149.952-59.968c6.08-2.4 10.048-8.32 10.048-14.848V201.952c-26.208 44.384-61.248 85.344-76.288 102.112zM266.08 157.632L192 128v327.616l128 51.2v-256.96c-20.448-27.552-41.792-60.736-53.92-92.224z" />
    </Svg>
  );
}

export default SvgMap;