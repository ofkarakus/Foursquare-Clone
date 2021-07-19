import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCoffeeTea(props) {
  return (
    <Svg
      height="20"
      viewBox="0 0 512.084 512"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M425.969 230.414c-3.38-13.238-22.508-23.5-58.528-31.223a644.414 644.414 0 00-128.507-11.414 644.427 644.427 0 00-128.512 11.414c-39.848 8.543-59.223 20.157-59.223 35.52a223.395 223.395 0 0049.664 141.527C33.95 386.176 0 401.691 0 422.441c0 51.086 102.723 89.602 238.934 89.602 136.21 0 238.933-38.516 238.933-89.602 0-13.023-13.113-23.78-39.82-32.628C487.09 372.023 512 347.207 512 315.777a80.37 80.37 0 00-25.734-62.695 100.595 100.595 0 00-60.297-22.668zm-4.098 51.082a52.513 52.513 0 0133.34 13.203 21.105 21.105 0 013.164 23.54c-4.727 9.644-16.687 15.433-28.914 20.261a268.174 268.174 0 01-33.469 10.535 220.876 220.876 0 0025.875-67.539zM68.266 234.72c.21-2.004 8.812-11.094 47.054-19.114a632.613 632.613 0 01123.614-10.761 632.91 632.91 0 01123.613 10.758c38.195 8.007 46.824 17.09 47.055 19.109-.055.207-.141.406-.258.59l-.008.02c-1.059 1.843-6.016 6.429-20.785 11.542-21.68-23.62-126.645-24.953-149.617-24.953s-127.93 1.332-149.61 24.95c-16.758-5.794-20.922-10.958-21.058-12.141zm298.457 18.152c-4.23.95-8.621 1.86-13.27 2.703-.848.156-1.781.285-2.644.438-4.125.718-8.364 1.41-12.766 2.047-1.855.27-3.809.503-5.711.757-3.57.477-7.18.942-10.898 1.356-2.204.25-4.461.476-6.715.703a716.49 716.49 0 01-10.973 1.027c-2.375.2-4.77.391-7.18.567-3.8.281-7.656.527-11.546.75-2.395.14-4.778.285-7.204.402-4.285.207-8.629.36-12.992.5-2.082.067-4.137.156-6.23.207-6.496.152-13.051.246-19.66.246s-13.164-.094-19.66-.25c-2.09-.05-4.137-.14-6.208-.203-4.382-.14-8.746-.297-13.043-.504a584.426 584.426 0 01-7.125-.398 747.532 747.532 0 01-11.636-.754 639.615 639.615 0 01-7.102-.563c-3.754-.316-7.45-.66-11.09-1.035-2.21-.222-4.425-.445-6.59-.691a516.973 516.973 0 01-11.144-1.387c-1.816-.242-3.68-.465-5.453-.723a415.486 415.486 0 01-13.52-2.168c-.61-.109-1.277-.199-1.875-.312a327.784 327.784 0 01-13.336-2.715c17.926-6.34 60.86-13.894 127.782-13.894s109.867 7.558 127.789 13.894zm-297.207 4.086a122.733 122.733 0 0022.117 8.55c34.383 10.102 89.449 16.134 147.3 16.134 14.462 0 28.75-.375 42.583-1.098a488.352 488.352 0 00104.703-15.023c7.66-2.141 15.094-5.02 22.195-8.598-9.816 95.437-82.059 169.789-169.48 169.789a159.89 159.89 0 01-114.977-50.16A201.663 201.663 0 0169.52 256.957zm234.129 174.012c29.414 4.11 41.898 9.98 45.437 12.84-6.398 5.496-36.586 14.84-91.445 16.761l-.61.012c-4.957.148-10.086.2-15.214.223-.954.011-1.899.05-2.88.039h-.203c-6.027 0-12.082-.086-18.015-.258h-.067c-55.21-1.918-85.46-11.274-91.863-16.774 3.543-2.867 16.07-8.757 45.625-12.867a169.253 169.253 0 00129.235.028zM17.066 422.44c0-3.867 16.875-20.242 97.93-30.93a187.82 187.82 0 0034.16 26.645c-38.066 8.77-38.222 21.098-38.222 25.621a14.847 14.847 0 003.718 9.582c-64.37-8.527-97.586-22.484-97.586-30.918zm221.868 72.536c-86.34 0-155.371-16.672-192.325-37.875 47.739 14.27 122.059 19.77 173.727 20.55 6.059.168 12.289.254 18.598.254 2.168 0 4.324 0 6.144-.086 2.16 0 4.238 0 6.059-.086l2.55-.039c1.215-.027 2.524-.015 3.72-.05 51.75-.782 126.109-6.282 173.855-20.551-36.95 21.207-105.985 37.883-192.328 37.883zM460.8 422.44c0 8.434-33.196 22.383-97.582 30.914a14.849 14.849 0 003.715-9.578c0-4.523-.157-16.82-38.09-25.59 3.23-1.972 6.386-4.074 9.5-6.246a566.921 566.921 0 0069.027-12.75c43.496 9.715 53.43 20.282 53.43 23.25zm-54.93-40.425a8.11 8.11 0 00-.812.171c-12.836 3.348-26.809 6.239-41.559 8.754a201.869 201.869 0 0018.578-21.18 329.33 329.33 0 0053.652-15.382c15.415-6.082 30.68-13.766 37.97-28.617a38.13 38.13 0 00-6.329-43.043 68.552 68.552 0 00-42.656-18.067 229.39 229.39 0 001.566-17.101 82.65 82.65 0 0148.614 18.261 63.993 63.993 0 0120.039 49.965c0 35.082-48.266 55.364-89.063 66.239zm0 0" />
      <Path d="M110.934 298.71a8.534 8.534 0 10-8.536 8.532 7.854 7.854 0 002.477-.426 8.448 8.448 0 006.059-8.105zm0 0M157.398 382.61a8.55 8.55 0 008.559.605 8.535 8.535 0 00.91-14.805 147.523 147.523 0 01-44.082-44.426 8.532 8.532 0 00-14.918.371 8.522 8.522 0 00.434 8.645 164.28 164.28 0 0049.097 49.61zm0 0M202.3 53.742a8.53 8.53 0 00-12.066 0A45.294 45.294 0 00179.2 85.375a45.324 45.324 0 0010.938 31.535 29.534 29.534 0 016.129 19.664 29.639 29.639 0 01-6.118 19.653 8.537 8.537 0 00.165 11.984 8.534 8.534 0 0011.988-.004 45.303 45.303 0 0011.031-31.633 45.29 45.29 0 00-10.937-31.531 29.593 29.593 0 01-6.13-19.668 29.691 29.691 0 016.036-19.566 8.53 8.53 0 000-12.066zm0 0M253.5 2.543a8.53 8.53 0 00-12.066 0 45.313 45.313 0 00-11.036 31.633 45.327 45.327 0 0010.938 31.531 29.551 29.551 0 016.129 19.668 29.636 29.636 0 01-6.113 19.652 8.53 8.53 0 00.164 11.985 8.53 8.53 0 0011.984-.004 45.313 45.313 0 0011.035-31.633 45.327 45.327 0 00-10.937-31.531 29.575 29.575 0 01-6.133-19.668 29.685 29.685 0 016.035-19.567 8.53 8.53 0 000-12.066zm0 0M304.7 53.742a8.53 8.53 0 00-12.066 0A45.291 45.291 0 00281.6 85.375a45.306 45.306 0 0010.937 31.535 29.576 29.576 0 016.129 19.664 29.66 29.66 0 01-6.117 19.653 8.53 8.53 0 00.164 11.984 8.53 8.53 0 0011.984-.004 45.288 45.288 0 0011.035-31.633 45.308 45.308 0 00-10.937-31.531 29.551 29.551 0 01-6.129-19.668 29.667 29.667 0 016.031-19.566 8.53 8.53 0 000-12.066zm0 0" />
    </Svg>
  );
}

export default SvgCoffeeTea;
