import React from "react";
import "./Custom.css";
import { SnackbarContent, useSnackbar } from "notistack";

const SuccessToast = React.forwardRef((props, ref) => {
  const { id, message, allowDownload, ...other } = props;

  const { closeSnackbar } = useSnackbar();
  return (
    <SnackbarContent ref={ref} role="alert" {...other}>
      <div data-v-049fb53f id={9957851742} style={{ marginRight: 20 }}>
        <div data-v-049fb53f className="wrapNotify success">
          <div data-v-049fb53f className="boxNotify">
            <div data-v-049fb53f className="d-flex align-items-center">
              <div data-v-049fb53f>
                <span data-v-049fb53f className="icon">
                  <svg
                    data-v-049fb53f
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="check"
                    role="img"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-check fa-w-16"
                  >
                    <path
                      data-v-049fb53f
                      fill="currentColor"
                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    />
                  </svg>
                  {/**/}
                  {/**/}
                </span>
              </div>
              <div data-v-049fb53f className="ml-2">
                <div data-v-049fb53f className="boxContent">
                  <span data-v-049fb53f className="message">
                    {message}
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
                  onClick={() => closeSnackbar()}
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

export default SuccessToast;
