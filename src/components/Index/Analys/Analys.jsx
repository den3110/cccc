import React, { useContext, useEffect, useRef, useState } from "react";
import "./Analys.css"
import { SocketContainerContext } from "../../../utils/SocketContainer/SocketContainer";

const Analys = () => {
  const restTimeRef = useRef()
  const buttonBuyRef = useRef()
  const buttonSellRef = useRef()
  const percentSellRef= useRef()
  const percentSellTextRef= useRef()
  const percentBuyTextRef= useRef()
  const textTradeRef= useRef()
  const [amount, setAmount]= useState(10)

  const { socketWeb } = useContext(SocketContainerContext);
  useEffect(() => {
    if (socketWeb) {
      socketWeb.onmessage = (e) => {
        if (
          e.data.indexOf("BO_PRICE") > -1 ||
          e.data.indexOf("TRADER_SENTIMENT") > -1 ||
          e.data.indexOf("BO_CHART_INDICATORS") > -1
        ) {
          // lastUpdatePrice = new Date();
          let data = e.data.replace("42[", "[");
          //   handleDataWs(data);
            const newData = JSON.parse(data);
            if (newData[0] === "BO_PRICE") {
              onReceiveSocketData(newData[1]);
              
            }
            if(newData[0] === "TRADER_SENTIMENT") {
              onReceiveSocketData2(newData[1])
            }

        }
      };
    }
  }, [socketWeb]);

  const onReceiveSocketData= (data)=> {
    restTimeRef.current.innerHTML= data.order + "s"
    if(parseInt(data?.session) % 2 === 0 ) {
      buttonBuyRef?.current?.setAttribute("disabled", true)
      buttonBuyRef?.current?.classList?.add("colorDisable")
      buttonSellRef?.current?.setAttribute("disabled", true)
      buttonSellRef?.current?.classList?.add("colorDisable")
      textTradeRef.current.innerHTML= "Wait time"

    }
    else {
      buttonBuyRef?.current?.removeAttribute("disabled")
      buttonBuyRef?.current?.classList?.remove("colorDisable")
      buttonSellRef?.current?.removeAttribute("disabled")
      buttonSellRef?.current?.classList?.remove("colorDisable")
      textTradeRef.current.innerHTML= "Please Trade"

    }
  }

  const onReceiveSocketData2= (data)=> {
    percentSellRef.current.style.width= data?.dPercent + "%"
    percentBuyTextRef.current.innerHTML= data?.uPercent + "%"
    percentSellTextRef.current.innerHTML= data?.dPercent + "%"
  }

  const handleSubtractAmount= ()=> {
    if(amount > 0) {
      setAmount(parseInt(amount) - parseInt(5))
    }
  }

  const handleAddAmount= ()=> {
    setAmount(parseInt(amount) + parseInt(5))

  }

  return (
    <div data-v-0dc9f329 id="analysis-bet-wrapper" className="wrap">
      {/**/}
      <div
        data-v-0dc9f329
        id="rightContent"
        className="rightContent h-100 hideTransaction"
      >
        <div data-v-0dc9f329 className="d-flex h-100">
          <div data-v-0dc9f329 className="flex-50 col-bet flex-100">
            <div
              data-v-2860c586
              data-v-0dc9f329
              id="betAmount"
              className="colorSecondary bgSecondary3"
            >
              <p data-v-2860c586 className="font-14 font-12m mb-2 mb1Landscape">
                Amount
              </p>
              <div data-v-2860c586>
                <div
                  data-v-15011326
                  data-v-2860c586
                  className="align-items-center wrapInputAmount d-flex"
                >
                  <button
                    data-v-15011326
                    className="btnPrice"
                    style={{
                      backgroundColor: "rgb(29, 35, 59)",
                      color: "rgb(255, 255, 255)",
                    }}
                    onClick={handleSubtractAmount}
                  >
                    -
                  </button>
                  <div
                    data-v-15011326
                    className="inputGroup"
                    style={{
                      backgroundColor: "rgb(255, 255, 255)",
                      color: "rgb(23, 27, 44)",
                    }}
                  >
                    {/**/}
                    <input
                      data-v-39ad19b4
                      data-v-15011326
                      value={amount}
                      onChange={(e)=> setAmount(e.target.value)}
                      type="text"
                      id="InputNumber"
                      className="font-16  inputAmount"
                      style={{ color: "rgb(23, 27, 44)", width: "100%" }}
                    />
                    <span data-v-15011326 className="icon font-16">
                      $
                    </span>
                  </div>
                  <button
                    data-v-15011326
                    className="btnPrice"
                    style={{
                      backgroundColor: "rgb(29, 35, 59)",
                      color: "rgb(255, 255, 255)",
                    }}
                    onClick={handleAddAmount}
                  >
                    +
                  </button>
                </div>
                <div data-v-2860c586>
                  <div data-v-7285a2e4>
                    <div data-v-7285a2e4 className="keyboardAmount mt-2">
                      <div data-v-7285a2e4 className="row">
                        <div data-v-7285a2e4 className="col-4 amountItem">
                          <a data-v-7285a2e4 href="#">
                            <span
                              data-v-7285a2e4
                              className="bagItem colorSecondary primary-hover"
                              style={{ borderRadius: "10px" }}
                            >
                              <span data-v-7285a2e4>+</span>5
                            </span>
                          </a>
                        </div>
                        <div data-v-7285a2e4 className="col-4 amountItem">
                          <a data-v-7285a2e4 href="#">
                            <span
                              data-v-7285a2e4
                              className="bagItem colorSecondary primary-hover"
                              style={{ borderRadius: "10px" }}
                            >
                              <span data-v-7285a2e4>+</span>10
                            </span>
                          </a>
                        </div>
                        <div data-v-7285a2e4 className="col-4 amountItem">
                          <a data-v-7285a2e4 href="#">
                            <span
                              data-v-7285a2e4
                              className="bagItem colorSecondary primary-hover"
                              style={{ borderRadius: "10px" }}
                            >
                              <span data-v-7285a2e4>+</span>20
                            </span>
                          </a>
                        </div>
                        <div data-v-7285a2e4 className="col-4 amountItem">
                          <a data-v-7285a2e4 href="#">
                            <span
                              data-v-7285a2e4
                              className="bagItem colorSecondary primary-hover"
                              style={{ borderRadius: "10px" }}
                            >
                              <span data-v-7285a2e4>+</span>50
                            </span>
                          </a>
                        </div>
                        <div data-v-7285a2e4 className="col-4 amountItem">
                          <a data-v-7285a2e4 href="#">
                            <span
                              data-v-7285a2e4
                              className="bagItem colorSecondary primary-hover"
                              style={{ borderRadius: "10px" }}
                            >
                              <span data-v-7285a2e4>+</span>100
                            </span>
                          </a>
                        </div>
                        <div data-v-7285a2e4 className="col-4 amountItem">
                          <a data-v-7285a2e4 href="#">
                            <span
                              data-v-7285a2e4
                              className="bagItem colorSecondary primary-hover all"
                              style={{ borderRadius: "10px" }}
                            >
                              {/**/}All
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-2860c586>
                <div data-v-0bab5d8e>
                  <div data-v-0bab5d8e className="profit my-lg-3">
                    <div
                      data-v-0bab5d8e
                      className="d-flex justify-content-center mb-lg-2"
                    >
                      <p data-v-0bab5d8e className="m-2 mr-2 profit">
                        Profit
                      </p>
                      <p
                        data-v-0bab5d8e
                        className="profitPercent color-light-blue my-auto"
                        style={{ color: "rgb(255, 255, 255)" }}
                      >
                        95%
                      </p>
                    </div>
                    <div
                      data-v-0bab5d8e
                      className="color-green font-30 font-weight-700 text-center"
                      style={{ color: "rgb(1, 181, 140)" }}
                    >
                      +$19.5
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-2860c586>
                <div data-v-4708bf56>
                  <div
                    data-v-4708bf56
                    className="slider mb-4"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <p
                      data-v-4708bf56
                      className="mt-3 pb-1"
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      Traders sentiments
                    </p>
                    <div data-v-4708bf56>
                      <div
                        data-v-4708bf56
                        className="progress active mb-2"
                        style={{ backgroundColor: "rgb(1, 181, 140)" }}
                      >
                        <div
                          ref={percentSellRef}
                          data-v-4708bf56
                          role="progressbar"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          className="progress-bar"
                          style={{
                            
                            backgroundColor: "rgb(250, 40, 67)",
                          }}
                        />
                      </div>
                      <div
                        data-v-4708bf56
                        className="d-flex justify-content-between"
                      >
                        <span
                          ref={percentSellTextRef}
                          data-v-4708bf56
                          style={{ color: "rgb(250, 40, 67)" }}
                        >
                          0%
                        </span>
                        <span
                          ref={percentBuyTextRef}
                          data-v-4708bf56
                          style={{ color: "rgb(1, 181, 140)" }}
                        >
                          100%
                        </span>
                      </div>
                    </div>
                  </div>
                  {/**/}
                </div>
              </div>
              {/**/}
              {/**/}
              {/**/}
              <div data-v-2860c586>
                <div data-v-76861cc0 className="groupButton mt-lg-2 row">
                  <div data-v-76861cc0 className=" pb-1 col-md-12 col-4">
                    <button
                    
                      ref={buttonBuyRef}
                      data-v-76861cc0
                      type="button"
                      className="btn button btnSuccess colorSuccess w-100 colorDisable"
                      style={{
                        backgroundColor: "rgb(1, 181, 140)",
                        borderRadius: "10px",
                      }}
                    >
                      <span data-v-76861cc0 className="text-uppercase font-20">
                        Buy
                      </span>
                      <svg
                        data-v-76861cc0
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.087"
                        height="11.668"
                        viewBox="0 0 23.087 11.668"
                        className="ml-1"
                      >
                        <path
                          data-v-76861cc0
                          id="Path_26233"
                          data-name="Path 26233"
                          d="M23.429,8H14.678l3.86,3.86-6.016,6.016L7.2,11.891a.728.728,0,0,0-1.025-.065l-5.834,5.1.96,1.1L6.592,13.4l5.353,6.022a.732.732,0,0,0,.524.245h.021a.727.727,0,0,0,.516-.214l6.563-6.563,3.86,3.86Z"
                          transform="translate(-0.342 -8)"
                          fill="#fff"
                        />
                      </svg>
                    </button>
                  </div>
                  <div data-v-76861cc0 className="  pb-1 col-md-12 col-4 my-2">
                    <a
                      data-v-76861cc0
                      className="btn btnTransparent w-100 d-flex flex-column justify-content-center align-items-center"
                      style={{
                        cursor: "default",
                        backgroundColor: "rgb(29, 35, 59)",
                        borderRadius: "10px",
                      }}
                    >
                      <p
                        ref={textTradeRef}
                        data-v-76861cc0
                        className="font-14 mb-0"
                        style={{ lineHeight: "normal" }}
                      >
                        Wait time
                      </p>
                      <p
                        data-v-76861cc0
                        className="font-18 mb-0 font-weight-700"
                        style={{ lineHeight: "normal" }}
                        ref={restTimeRef}
                      >
                        0
                      </p>
                    </a>
                  </div>
                  <div data-v-76861cc0 className=" pb-1 col-md-12 col-4">
                    <button
                      ref={buttonSellRef}
                      data-v-76861cc0
                      type="button"
                      className="btn button btnDown colorDanger w-100 colorDisable"
                      style={{
                        backgroundColor: "rgb(248, 16, 87)",
                        borderRadius: "10px",
                      }}
                    >
                      <span data-v-76861cc0 className="text-uppercase font-20">
                        Sell
                      </span>
                      <svg
                        data-v-76861cc0
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.587"
                        height="11.921"
                        viewBox="0 0 23.587 11.921"
                        className="ml-1"
                      >
                        <g
                          data-v-76861cc0
                          id="trend-down"
                          transform="translate(-0.342 -8)"
                        >
                          <path
                            data-v-76861cc0
                            id="Path_26234"
                            data-name="Path 26234"
                            d="M23.929,19.921H14.988l3.944-3.944L12.785,9.831,7.35,15.945a.744.744,0,0,1-1.048.066L.342,10.8l.981-1.122,5.4,4.729L12.2,8.25A.747.747,0,0,1,12.731,8h.022a.743.743,0,0,1,.527.218l6.705,6.705,3.944-3.944Z"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                data-v-ec19f30c
                data-v-2860c586
                className="keyboard-input-wrap"
                style={{ display: "none" }}
              >
                <div data-v-ec19f30c className="numKeyboardInput">
                  <div
                    data-v-0261f4c4
                    data-v-ec19f30c
                    className="keyboard colorSecondary hidden"
                  >
                    <div
                      data-v-0261f4c4
                      id="amountWrapper"
                      className="amountWrapper"
                    >
                      <div data-v-0261f4c4 className="headerAmount">
                        <span data-v-0261f4c4>Trade amount</span>
                      </div>
                      {/**/}
                      <div
                        data-v-0261f4c4
                        className="d-flex align-items-center justify-content-center profit-wrapper"
                      >
                        <span data-v-0261f4c4 className="colorSecondary2">
                          Profit
                        </span>
                        <span data-v-0261f4c4 className="profit colorSuccess">
                          95%
                        </span>
                        <span
                          data-v-0261f4c4
                          className="colorSuccess profitPrice"
                        >
                          +$19.5
                        </span>
                      </div>
                    </div>
                    <table
                      data-v-0261f4c4
                      id="keyboardLandscape"
                      className="primary1"
                    >
                      <tbody data-v-0261f4c4>
                        <tr data-v-0261f4c4 className="suggestion">
                          <td
                            data-v-0261f4c4
                            data-code="H"
                            className="borderSecondary8"
                          >
                            +5
                          </td>
                          <td
                            data-v-0261f4c4
                            data-code="H"
                            className="borderSecondary8"
                          >
                            +10
                          </td>
                          <td
                            data-v-0261f4c4
                            data-code="H"
                            className="borderSecondary8"
                          >
                            +50
                          </td>
                          <td
                            data-v-0261f4c4
                            data-code="H"
                            className="borderSecondary8"
                          >
                            +100
                          </td>
                        </tr>
                        <tr data-v-0261f4c4>
                          <td
                            data-v-0261f4c4
                            className="bgSecondary3 borderSecondary8"
                          >
                            1
                          </td>
                          <td
                            data-v-0261f4c4
                            className="bgSecondary3 borderSecondary8"
                          >
                            2
                          </td>
                          <td
                            data-v-0261f4c4
                            className="bgSecondary3 borderSecondary8"
                          >
                            3
                          </td>
                          <td
                            data-v-0261f4c4
                            data-code="ALL"
                            rowSpan={2}
                            className="bgSecondary3 borderSecondary8"
                          >
                            <span data-v-0261f4c4>All</span>
                          </td>
                        </tr>
                        <tr data-v-0261f4c4>
                          <td
                            data-v-0261f4c4
                            className="bgSecondary3 borderSecondary8"
                          >
                            4
                          </td>
                          <td
                            data-v-0261f4c4
                            className="bgSecondary3 borderSecondary8"
                          >
                            5
                          </td>
                          <td
                            data-v-0261f4c4
                            className="bgSecondary3 borderSecondary8"
                          >
                            6
                          </td>
                        </tr>
                        <tr data-v-0261f4c4>
                          <td
                            data-v-0261f4c4
                            className="bgSecondary3 borderSecondary8"
                          >
                            7
                          </td>
                          <td
                            data-v-0261f4c4
                            className="bgSecondary3 borderSecondary8"
                          >
                            8
                          </td>
                          <td
                            data-v-0261f4c4
                            className="bgSecondary3 borderSecondary8"
                          >
                            9
                          </td>
                          <td
                            data-v-0261f4c4
                            data-code="K"
                            rowSpan={2}
                            className="bgSecondary3 borderSecondary8"
                          >
                            Done
                          </td>
                        </tr>
                        <tr data-v-0261f4c4>
                          <td
                            data-v-0261f4c4
                            className="bgSecondary3 borderSecondary8"
                          >
                            .
                          </td>
                          <td
                            data-v-0261f4c4
                            className="bgSecondary3 borderSecondary8"
                          >
                            0
                          </td>
                          <td
                            data-v-0261f4c4
                            data-code="D"
                            className="bgSecondary3 borderSecondary8"
                          >
                            <span data-v-0261f4c4 className="icon del">
                              <svg
                                data-v-0261f4c4
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48.361 36"
                              >
                                <path
                                  data-v-0261f4c4
                                  id="del"
                                  fill="#fff"
                                  d="M29.4,19.7,35.6,26l1.7-1.7L31.1,18l6.3-6.3L35.6,10l-6.3,6.3L23.1,10l-1.7,1.7L27.6,18l-6.3,6.3L23.1,26l6.3-6.3ZM39.9,3.2a5.3,5.3,0,0,1,5.4,5.3v19a5.3,5.3,0,0,1-5.4,5.3h-20A5.4,5.4,0,0,1,16,31.2L3.5,18.8a1,1,0,0,1,0-1.5L16,4.8a5.4,5.4,0,0,1,3.9-1.6h20Zm0-3.2H20.7a8.6,8.6,0,0,0-6.2,2.6L1.3,15a4.2,4.2,0,0,0,0,6L14.6,33.4A8.6,8.6,0,0,0,20.7,36H39.9a8.5,8.5,0,0,0,8.5-8.5V8.5A8.5,8.5,0,0,0,39.9,0Z"
                                  transform="translate(-0.039)"
                                  className="cls-1"
                                />
                              </svg>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/**/}
        </div>
      </div>
    </div>
  );
};

export default Analys;
