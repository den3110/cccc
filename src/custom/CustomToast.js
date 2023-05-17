import React from "react";
import "./Custom.css"
import { SnackbarContent } from 'notistack'

const CustomToast = React.forwardRef((props, ref) => {const {
  // You have access to notistack props and options 👇🏼
  id,
  message,
  // as well as your own custom props 👇🏼
  allowDownload,
  ...other
} = props
  return (
    <SnackbarContent ref={ref} role="alert" {...other}>
      <div data-v-049fb53f id={9957851742} style={{marginRight: 20}}>
        <div data-v-049fb53f className="wrapNotify error">
          <div data-v-049fb53f className="boxNotify">
            <div data-v-049fb53f className="d-flex align-items-center">
              <div data-v-049fb53f>
                <span data-v-049fb53f className="icon">
                  {/**/}
                  <svg
                    data-v-049fb53f
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="times"
                    role="img"
                    viewBox="0 0 352 512"
                    className="svg-inline--fa fa-times fa-w-11"
                  >
                    <path
                      data-v-049fb53f
                      fill="currentColor"
                      d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                    />
                  </svg>
                  {/**/}
                </span>
              </div>
              <div data-v-049fb53f className="ml-2">
                <div data-v-049fb53f className="boxContent">
                  <span data-v-049fb53f className="message">
                    Email hoặc mật khẩu sai. Vui lòng thử lại.
                  </span>
                </div>
              </div>
            </div>
            <span data-v-049fb53f>
              <svg
                data-v-049fb53f
                xmlns="http://www.w3.org/2000/svg"
                width={34}
                height={34}
                viewBox="0 0 34 34"
                className="close-notify"
              >
                <g
                  data-v-049fb53f
                  id="Group_11134"
                  data-name="Group 11134"
                  transform="translate(-1268 -28)"
                >
                  <circle
                    data-v-049fb53f
                    id="Ellipse_201"
                    data-name="Ellipse 201"
                    cx={17}
                    cy={17}
                    r={17}
                    transform="translate(1268 28)"
                    opacity="0.081"
                  />
                  <g
                    data-v-049fb53f
                    id="e-remove"
                    transform="translate(1278.49 38.49)"
                  >
                    <path
                      data-v-049fb53f
                      id="Path_13784"
                      data-name="Path 13784"
                      d="M13.742,1.279a.9.9,0,0,0-1.3,0L7.51,6.208,2.581,1.279a.9.9,0,0,0-1.3,0,.9.9,0,0,0,0,1.3L6.208,7.51,1.279,12.44a.9.9,0,0,0,0,1.3.844.844,0,0,0,.651.279.844.844,0,0,0,.651-.279L7.51,8.813l4.929,4.929a.9.9,0,0,0,1.3,0,.9.9,0,0,0,0-1.3L8.813,7.51l4.929-4.929A.9.9,0,0,0,13.742,1.279Z"
                      transform="translate(-1 -1)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </SnackbarContent>
  );
});

export default CustomToast;
