import React, { useContext, useEffect } from "react";
import "./UserPage.css";
import { MainContext } from "../Index/Index";

const UserPage = () => {
  const {setClassIndex }= useContext(MainContext)
  useEffect(()=> {
    setClassIndex("Profile")
  }, [])
  
  return (
    <div data-v-36ad2db4 data-v-2120bbd4 className="profileContent">
      <div data-v-36ad2db4 className="bgColorBlue6">
        <div data-v-36ad2db4 className="profileContent">
          <div data-v-36ad2db4 className="container">
            <div data-v-36ad2db4 className="row justify-content-center">
              <div data-v-36ad2db4 className="col-lg-12">
                <div
                  data-v-36ad2db4
                  className="profile-personal panel bgSecondary4 borderRounded borderSecondary2 overflow-hidden mb-3"
                >
                  <div data-v-36ad2db4 className="panel-header">
                    <h3 data-v-36ad2db4 className="my-0 colorSecondary">
                      Thông tin cá nhân
                    </h3>
                  </div>
                  <div data-v-36ad2db4 className="panel-body">
                    <div data-v-36ad2db4 className="row">
                      <div data-v-36ad2db4 className="col-md-6 col-lg-4">
                        <div
                          data-v-36ad2db4
                          className="uploadAvatar d-flex mb-3"
                        >
                          <div
                            data-v-36ad2db4
                            className="d-flex align-items-center justify-content-lg-start justify-content-between w-100"
                          >
                            <div data-v-7f4a977d data-v-36ad2db4>
                              <div data-v-7f4a977d className="user-avatar">
                                {/**/}
                              </div>
                              <div
                                data-v-7f4a977d
                                data-backdrop="static"
                                tabIndex={-1}
                                role="dialog"
                                aria-hidden="true"
                                className="modal fade"
                              >
                                <div data-v-7f4a977d className="mask" />
                                <div
                                  data-v-7f4a977d
                                  className="modal-dialog simple modal-sm modal-upload-img"
                                >
                                  <div
                                    data-v-7f4a977d
                                    className="modal-content p-3"
                                  >
                                    <div className="loading">
                                      <div className="loading__ring">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          version="1.1"
                                          x="0px"
                                          y="0px"
                                          viewBox="0 0 100 100"
                                          style={{
                                            enableBackground: "new 0 0 100 100",
                                          }}
                                          xmlSpace="preserve"
                                        >
                                          <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                                        </svg>
                                      </div>
                                      <div className="loading__ring">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          version="1.1"
                                          x="0px"
                                          y="0px"
                                          viewBox="0 0 100 100"
                                          style={{
                                            enableBackground: "new 0 0 100 100",
                                          }}
                                          xmlSpace="preserve"
                                        >
                                          <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div
                                      data-v-7f4a977d
                                      className="modal-header d-flex justify-content-between align-items-center"
                                    >
                                      <h3
                                        data-v-7f4a977d
                                        className="modalTitle"
                                      >
                                        Tải hình từ máy tính
                                      </h3>
                                      <button
                                        data-v-7f4a977d
                                        type="button"
                                        aria-label="Close"
                                        className="btnclose"
                                      >
                                        <img
                                          data-v-7f4a977d
                                          src="/img/iconDelete.15f82b3e.svg"
                                        />
                                      </button>
                                    </div>
                                    <div data-v-7f4a977d className="modal-body">
                                      <div
                                        data-v-7f4a977d
                                        className="upload-example"
                                      >
                                        <div className="loading">
                                          <div className="loading__ring">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              version="1.1"
                                              x="0px"
                                              y="0px"
                                              viewBox="0 0 100 100"
                                              style={{
                                                enableBackground:
                                                  "new 0 0 100 100",
                                              }}
                                              xmlSpace="preserve"
                                            >
                                              <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                                            </svg>
                                          </div>
                                          <div className="loading__ring">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlnsXlink="http://www.w3.org/1999/xlink"
                                              version="1.1"
                                              x="0px"
                                              y="0px"
                                              viewBox="0 0 100 100"
                                              style={{
                                                enableBackground:
                                                  "new 0 0 100 100",
                                              }}
                                              xmlSpace="preserve"
                                            >
                                              <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                                            </svg>
                                          </div>
                                        </div>
                                        <div data-v-7f4a977d>
                                          <div
                                            data-v-7f4a977d
                                            className="avatarEmpty text-center"
                                          >
                                            <input
                                              data-v-7f4a977d
                                              type="file"
                                              accept=".jpg,.jpeg,.png"
                                              className="fileUpload"
                                            />
                                            <svg
                                              data-v-7f4a977d
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="89.156"
                                              height="95.1"
                                              viewBox="0 0 89.156 95.1"
                                            >
                                              <g
                                                data-v-7f4a977d
                                                id="upload-and-send"
                                                transform="translate(0 0)"
                                                opacity="0.3"
                                              >
                                                <path
                                                  data-v-7f4a977d
                                                  id="Path_34910"
                                                  data-name="Path 34910"
                                                  d="M25.038,1.016a2.972,2.972,0,0,1,4.476,0l20.8,23.775a2.972,2.972,0,0,1-2.241,4.927H36.188V68.353a2.972,2.972,0,0,1-2.972,2.972H21.329a2.972,2.972,0,0,1-2.972-2.972V29.719H6.469a2.972,2.972,0,0,1-2.235-4.927Z"
                                                  transform="translate(17.306 0)"
                                                  fill="#fefefe"
                                                />
                                                <path
                                                  data-v-7f4a977d
                                                  id="Path_34911"
                                                  data-name="Path 34911"
                                                  d="M77.269,11V28.831H11.888V11H0V34.775a5.944,5.944,0,0,0,5.944,5.944H83.213a5.944,5.944,0,0,0,5.944-5.944V11Z"
                                                  transform="translate(0 54.381)"
                                                  fill="#fefefe"
                                                />
                                              </g>
                                            </svg>
                                            <p
                                              data-v-7f4a977d
                                              className="colorSecondary2"
                                            >
                                              Nhấp vào đây để tải ảnh lên
                                            </p>
                                          </div>
                                          {/**/}
                                          <div
                                            data-v-7f4a977d
                                            className="imgInfo"
                                          >
                                            <p data-v-7f4a977d>
                                              <span
                                                data-v-7f4a977d
                                                className="fileSize"
                                              >
                                                Kích thước:{" "}
                                              </span>
                                              <span
                                                data-v-7f4a977d
                                                className="size colorSuccess"
                                              >
                                                <b data-v-7f4a977d>MB</b>
                                              </span>
                                            </p>
                                            <p data-v-7f4a977d>
                                              Ảnh tải lên cần dưới 5MB*
                                            </p>
                                            <p data-v-7f4a977d>
                                              *Lưu ý: Xin hãy thu nhỏ hoặc di
                                              chuyển ảnh để giảm kích thước
                                            </p>
                                          </div>
                                          <div
                                            data-v-7f4a977d
                                            className="d-flex justify-content-center align-items-center submit"
                                          >
                                            <button
                                              data-v-7f4a977d
                                              disabled="disabled"
                                              className="buttonSubmit button primary btn-disable"
                                            >
                                              Cập nhật
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              data-v-36ad2db4
                              className="btn btn-primary btn-upload ml-4 d-flex colorSecondary font-16 p-3"
                            >
                              Thay ảnh
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-36ad2db4 className="d-flex block">
                      <div data-v-36ad2db4 className="frm mb-2 w-100">
                        <form data-v-36ad2db4 disabled="disabled">
                          <div data-v-36ad2db4 className="row ">
                            <div data-v-36ad2db4 className="col-md-6 col-lg-4">
                              <div data-v-36ad2db4 className="form-group">
                                <span data-v-36ad2db4 className="labelInput">
                                  Địa chỉ Email
                                </span>
                                <p data-v-36ad2db4 className="winput">
                                  giang10a1dz@gmail.com
                                </p>
                              </div>
                            </div>
                            <div data-v-36ad2db4 className="col-md-6 col-lg-4">
                              <div data-v-36ad2db4 className="form-group">
                                <span data-v-36ad2db4 className="labelInput">
                                  Biệt danh
                                </span>
                                <p data-v-36ad2db4 className="winput">
                                  datistx
                                </p>
                              </div>
                            </div>
                          </div>
                          <div data-v-36ad2db4 className="row mb-1">
                            <div data-v-36ad2db4 className="col-md-6 col-lg-4">
                              <div data-v-36ad2db4 className="form-group">
                                <span data-v-36ad2db4 className="labelInput">
                                  Tên
                                </span>
                                <input
                                  data-v-36ad2db4
                                  type="text"
                                  readOnly="readonly"
                                  maxLength={20}
                                  className="form-control mb-2 winput"
                                />
                                <small
                                  data-v-36ad2db4
                                  className="colorDanger font-italic"
                                >
                                  * Bạn phải bật 2FA để điều chỉnh
                                </small>
                              </div>
                            </div>
                            <div data-v-36ad2db4 className="col-md-6 col-lg-4">
                              <div data-v-36ad2db4 className="form-group">
                                <span data-v-36ad2db4 className="labelInput">
                                  Họ
                                </span>
                                <input
                                  data-v-36ad2db4
                                  type="text"
                                  readOnly="readonly"
                                  maxLength={20}
                                  className="form-control mb-2 winput"
                                />
                                <small
                                  data-v-36ad2db4
                                  className="colorDanger font-italic"
                                >
                                  * Bạn phải bật 2FA để điều chỉnh
                                </small>
                              </div>
                            </div>
                          </div>
                          <div data-v-36ad2db4 className="row">
                            <div data-v-36ad2db4 className="col-md-6">
                              <div data-v-36ad2db4 className="form-group">
                                <span data-v-36ad2db4 className="labelInput">
                                  Mã 2FA
                                </span>
                                <input
                                  data-v-36ad2db4
                                  type="number"
                                  disabled="disabled"
                                  className="form-control mb-2 winput"
                                />
                              </div>
                            </div>
                          </div>
                          <div data-v-36ad2db4 className="bottomTools">
                            <div data-v-36ad2db4 className="row">
                              <div
                                data-v-36ad2db4
                                className="col-lg-5 col-md-12 offset-md-0"
                              >
                                <button
                                  data-v-36ad2db4
                                  type="submit"
                                  disabled="disabled"
                                  className="btn btn-primary font-16 py-3 px-5"
                                >
                                  Cập nhật Tài khoản
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-36ad2db4
                  className="profile profile-kyc borderRounded borderSecondary2 overflow-hidden mb-3"
                >
                  <div data-v-36ad2db4 className="row">
                    <div data-v-36ad2db4 className="col">
                      <div data-v-36ad2db4 className="panel bgSecondary4">
                        <div
                          data-v-36ad2db4
                          className="panel-header colorSecondary"
                        >
                          <h3 data-v-36ad2db4>Xác minh Tài khoản</h3>
                        </div>
                        <div data-v-36ad2db4 className="panel-body">
                          <div data-v-36ad2db4 className="colorWhite block">
                            <div data-v-36ad2db4 className="row">
                              <div
                                data-v-36ad2db4
                                className="col-8 col-md-3 font-14 margin-bottom-8 margin-top-8 color-white sub-title"
                              >
                                Xác minh Danh tính:
                              </div>
                              <div
                                data-v-36ad2db4
                                className="col-md-9 confirm-content"
                              >
                                <p
                                  data-v-36ad2db4
                                  className="colorSecondary2 font-14 flex-fill"
                                >
                                  Để đảm bảo an toàn cho tài sản của bạn, chúng
                                  tôi cần xác minh danh tính.
                                  <br />
                                  Hãy điền thông tin thật chính xác, khi đã hoàn
                                  tất xác minh danh tính thì thông tin sẽ không
                                  chỉnh sửa được nữa.
                                </p>
                                <div data-v-36ad2db4 className="wrap-button">
                                  <button
                                    data-v-36ad2db4
                                    className="btn btn-primary btn-verify"
                                  >
                                    Xác nhận ngay
                                  </button>
                                  {/**/}
                                  {/**/}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-36ad2db4
                  className="profile profile-mobile borderRounded borderSecondary2 overflow-hidden mb-3"
                >
                  <div data-v-36ad2db4 className="row">
                    <div data-v-36ad2db4 className="col">
                      <div data-v-36ad2db4 className="panel bgSecondary4">
                        <div
                          data-v-36ad2db4
                          className="panel-header colorSecondary"
                        >
                          <h3 data-v-36ad2db4>Bảo mật</h3>
                        </div>
                        <div data-v-36ad2db4 className="panel-body">
                          <div data-v-36ad2db4 className="colorWhite block">
                            <div data-v-36ad2db4 className="row mb-5">
                              <div
                                data-v-36ad2db4
                                className="col-8 col-md-3 font-14 margin-bottom-8 margin-top-8 color-white sub-title"
                              >
                                Mật khẩu:
                              </div>
                              <div
                                data-v-36ad2db4
                                className="col-md-9 change-password-content d-flex"
                              >
                                <p
                                  data-v-36ad2db4
                                  className="colorSecondary2 font-14 flex-fill"
                                >
                                  Bạn có muốn thay đổi mật khẩu không? Nhấp vào
                                  nút phía dưới để thay đổi.
                                </p>
                                <div data-v-36ad2db4 className="off">
                                  <button
                                    data-v-36ad2db4
                                    disabled="disabled"
                                    className="btn btn-primary btn-change-password"
                                  >
                                    Đổi mật khẩu
                                  </button>
                                </div>
                              </div>
                              <div
                                data-v-36ad2db4
                                className="col-12 text-xl-right"
                              >
                                <small
                                  data-v-36ad2db4
                                  className="colorDanger font-italic mt-2 d-inline-block"
                                >
                                  * Bạn phải bật 2FA để đổi mật khẩu
                                </small>
                              </div>
                            </div>
                            <div
                              data-v-36ad2db4
                              className="row changeAuthWrap mb-5"
                            >
                              <div
                                data-v-36ad2db4
                                className="col-8 col-md-3 margin-bottom-8"
                              >
                                <div
                                  data-v-36ad2db4
                                  className="d-flex align-items-center h-100 margin5 font-14 color-white sub-title"
                                >
                                  Mã 2FA:
                                </div>
                              </div>
                              <div
                                data-v-36ad2db4
                                className="col-md-7 d-sm-block"
                              >
                                <div
                                  data-v-36ad2db4
                                  className="d-flex align-items-center h-100"
                                >
                                  <p
                                    data-v-36ad2db4
                                    className="colorSecondary2 font-14 d-flex flex-column justify-conntent-center mb-0"
                                  >
                                    <span data-v-36ad2db4>
                                      Bắt buộc để rút tiền hoặc cập nhật các bảo
                                      mật.
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div
                                data-v-36ad2db4
                                className="col-4 col-md-2 changeAuth"
                              >
                                <label
                                  data-v-50ef41aa
                                  data-v-36ad2db4
                                  className="toogle mb-0"
                                >
                                  <input
                                    data-v-50ef41aa
                                    type="checkbox"
                                    className="switch-input"
                                  />
                                  <div
                                    data-v-50ef41aa
                                    className="switch-core off"
                                  >
                                    <span
                                      data-v-50ef41aa
                                      className="switch-label right"
                                    >
                                      Off
                                    </span>
                                    <div
                                      data-v-50ef41aa
                                      className="switch-button left"
                                    />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div
                              data-v-36ad2db4
                              className="row hide-sensitive-data mb-5"
                            >
                              <div className="col-8 col-md-3 margin-bottom-8">
                                <div className="d-flex align-items-center h-100 margin5 font-14 color-white sub-title">
                                  Ẩn dữ liệu nhạy cảm:
                                </div>
                              </div>
                              <div className="col-md-7 d-sm-block">
                                <div className="d-flex align-items-center h-100">
                                  <p className="colorSecondary2 font-14 d-flex flex-column justify-conntent-center mb-0">
                                    <span data-v-3d6c2fda>
                                      Bật cài đặt này để ẩn thông tin thống kê
                                      tài khoản của bạn.
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="col-4 col-md-2 text-right change-hide">
                                <label data-v-50ef41aa className="toogle mb-0">
                                  <input
                                    data-v-50ef41aa
                                    type="checkbox"
                                    className="switch-input"
                                  />
                                  <div
                                    data-v-50ef41aa
                                    className="switch-core off"
                                  >
                                    <span
                                      data-v-50ef41aa
                                      className="switch-label right"
                                    >
                                      Off
                                    </span>
                                    <div
                                      data-v-50ef41aa
                                      className="switch-button left"
                                    />
                                  </div>
                                </label>
                              </div>
                            </div>
                            {/**/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-36ad2db4
                  className="profile profile-confirm borderRounded borderSecondary2 overflow-hidden"
                >
                  <div
                    data-v-4ceb877c
                    data-v-36ad2db4
                    className="panel panel__confirm-acount bgSecondary4"
                  >
                    <div
                      data-v-4ceb877c
                      className="panel-header colorSecondary"
                    >
                      <h3 data-v-4ceb877c>Quản lý API</h3>
                    </div>
                    <div data-v-4ceb877c className="panel-body">
                      <div data-v-4ceb877c className="row">
                        <div
                          data-v-4ceb877c
                          className="col-md-3 font-14 mb-2 mb-lg-0 mt-2 mt-lg-0 color-white"
                        >
                          Quản lý API:
                        </div>
                        <div
                          data-v-4ceb877c
                          className="col-md-9 confirm-content"
                        >
                          <div data-v-4ceb877c className="flex-fill">
                            <p
                              data-v-4ceb877c
                              className="colorSecondary2 font-14 mb-0"
                            >
                              Không tiết lộ Mã API của bạn cho bất kỳ ai để
                              tránh thất thoát tài sản. Lưu ý rằng Mã API của
                              bạn có thể bị tiết lộ khi ủy quyền cho một nền
                              tảng bên thứ ba.
                            </p>
                            {/**/}
                          </div>
                          <div
                            data-v-4ceb877c
                            className="wrap-button mt-3 mt-md-0"
                          >
                            <div data-v-4ceb877c className="off">
                              <button
                                data-v-4ceb877c
                                id="btnApi"
                                className="btn-border button wbtn btn-md btn-radius font-weight-400 color-white btn-create-api"
                              >
                                Tạo API
                              </button>
                            </div>
                            <small
                              data-v-4ceb877c
                              className="colorRed font-italic mt-2 d-inline-block"
                            >
                              * Bạn phải bật 2FA để tạo API
                            </small>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-d66a4508
                        data-v-4ceb877c
                        className="modal fade modalEnable"
                      >
                        <div data-v-d66a4508 className="mask" />
                        <div
                          data-v-d66a4508
                          className="modal-dialog simple modal-sm modal-2fa-custom modal-apikey"
                        >
                          <form data-v-d66a4508>
                            <div data-v-d66a4508 className="modal-content">
                              <div className="loading">
                                <div className="loading__ring">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 100 100"
                                    style={{
                                      enableBackground: "new 0 0 100 100",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                                  </svg>
                                </div>
                                <div className="loading__ring">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 100 100"
                                    style={{
                                      enableBackground: "new 0 0 100 100",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                                  </svg>
                                </div>
                              </div>
                              <button
                                data-v-d66a4508
                                type="button"
                                className="close"
                              >
                                <img
                                  data-v-d66a4508
                                  src="/img/close.bea60152.svg"
                                  alt=""
                                />
                              </button>
                              <div data-v-d66a4508 className="modal-body px-3">
                                <div data-v-d66a4508 className="subtitle mb-3">
                                  <h3
                                    data-v-d66a4508
                                    className="color-white font-weight-bold text-center mb-0"
                                  >
                                    Tạo API
                                  </h3>
                                </div>
                                <p
                                  data-v-d66a4508
                                  className="description color-white-50 text-center"
                                >
                                  Không tiết lộ Mã API của bạn cho bất kỳ ai để
                                  tránh thất thoát tài sản. Lưu ý rằng Mã API
                                  của bạn có thể bị tiết lộ khi ủy quyền cho một
                                  nền tảng bên thứ ba.
                                </p>
                                <div
                                  data-v-d66a4508
                                  className="boxContent g_auth"
                                >
                                  <div data-v-d66a4508 className="row h-100">
                                    <div
                                      data-v-d66a4508
                                      className="col-12 d-flex flex-column"
                                    >
                                      <div
                                        data-v-d66a4508
                                        className="form-group"
                                      >
                                        <label
                                          data-v-d66a4508
                                          className="color-white-50"
                                        >
                                          Token API will expire in
                                        </label>
                                        <select
                                          data-v-d66a4508
                                          value={30}
                                          className="form-control"
                                        >
                                          <option data-v-d66a4508 value={30}>
                                            30 ngày
                                          </option>
                                          <option data-v-d66a4508 value={60}>
                                            60 ngày
                                          </option>
                                          <option data-v-d66a4508 value={90}>
                                            90 ngày
                                          </option>
                                          <option data-v-d66a4508 value={180}>
                                            180 ngày
                                          </option>
                                        </select>
                                      </div>
                                      <div
                                        data-v-d66a4508
                                        className="form-group"
                                      >
                                        <label
                                          data-v-d66a4508
                                          className="color-white-50"
                                        >
                                          Mật khẩu
                                        </label>
                                        <input
                                          data-v-d66a4508
                                          type="password"
                                          className="form-control"
                                        />
                                      </div>
                                      <div
                                        data-v-d66a4508
                                        className="form-group verification-code"
                                      >
                                        <label
                                          data-v-d66a4508
                                          className="color-white-50"
                                        >
                                          Mã Xác nhận Email
                                        </label>
                                        <div
                                          data-v-d66a4508
                                          className="input-group mb-3"
                                        >
                                          <div
                                            data-v-d66a4508
                                            className="position-relative"
                                          >
                                            <input
                                              data-v-d66a4508
                                              type="text"
                                              placeholder="Mã Xác nhận"
                                              className="form-control"
                                            />
                                            <span
                                              data-v-d66a4508
                                              className="paste"
                                            >
                                              Paste
                                            </span>
                                          </div>
                                          <button
                                            data-v-d66a4508
                                            type="button"
                                            className="btn btn-primary"
                                          >
                                            Gửi Mã
                                          </button>
                                        </div>
                                      </div>
                                      <div
                                        data-v-d66a4508
                                        className="form-group"
                                      >
                                        <label
                                          data-v-d66a4508
                                          className="color-white-50"
                                        >
                                          Mã 2FA
                                        </label>
                                        <div
                                          data-v-d66a4508
                                          className="position-relative"
                                        >
                                          <input
                                            data-v-d66a4508
                                            type="number"
                                            className="form-control"
                                          />
                                          <span
                                            data-v-d66a4508
                                            className="paste"
                                          >
                                            Paste
                                          </span>
                                        </div>
                                      </div>
                                      <div
                                        data-v-d66a4508
                                        style={{ display: "none" }}
                                      >
                                        <div
                                          className="grecaptcha-badge"
                                          data-style="bottomright"
                                          style={{
                                            width: "256px",
                                            height: "60px",
                                            display: "block",
                                            transition: "right 0.3s ease 0s",
                                            position: "fixed",
                                            bottom: "14px",
                                            right: "-186px",
                                            boxShadow: "gray 0px 0px 5px",
                                            borderRadius: "2px",
                                            overflow: "hidden",
                                          }}
                                        >
                                          <div className="grecaptcha-logo">
                                            <iframe
                                              title="reCAPTCHA"
                                              src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeMmvckAAAAAJrKCdFPgm8-o0dwbnC4gh1foIYl&co=aHR0cHM6Ly9zdGFyaXNhMi5uZXQ6NDQz&hl=en&v=khH7Ei3klcvfRI74FvDcfuOo&size=invisible&cb=sei46il8ez7k"
                                              width={256}
                                              height={60}
                                              role="presentation"
                                              name="a-8qbj3q39yq9p"
                                              frameBorder={0}
                                              scrolling="no"
                                              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                            />
                                          </div>
                                          <div className="grecaptcha-error" />
                                          <textarea
                                            id="g-recaptcha-response-8"
                                            name="g-recaptcha-response"
                                            className="g-recaptcha-response"
                                            style={{
                                              width: "250px",
                                              height: "40px",
                                              border:
                                                "1px solid rgb(193, 193, 193)",
                                              margin: "10px 25px",
                                              padding: "0px",
                                              resize: "none",
                                              display: "none",
                                            }}
                                            defaultValue={""}
                                          />
                                        </div>
                                      </div>
                                      {/**/}
                                      <div
                                        data-v-d66a4508
                                        className="row mt-auto"
                                      >
                                        <div
                                          data-v-d66a4508
                                          className="col-md-8 col-sm-8 m-auto"
                                        >
                                          <button
                                            data-v-d66a4508
                                            type="submit"
                                            disabled="disabled"
                                            className="btn btn-primary btn-lg btn-block"
                                          >
                                            Xác nhận
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div
                        data-v-47eef2bd
                        data-v-4ceb877c
                        className="modal fade modalEnable"
                      >
                        <div data-v-47eef2bd className="mask" />
                        <div
                          data-v-47eef2bd
                          className="modal-dialog simple modal-sm modal-2fa-custom modal-apikey"
                        >
                          <form data-v-47eef2bd>
                            <div data-v-47eef2bd className="modal-content">
                              <div className="loading">
                                <div className="loading__ring">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 100 100"
                                    style={{
                                      enableBackground: "new 0 0 100 100",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                                  </svg>
                                </div>
                                <div className="loading__ring">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 100 100"
                                    style={{
                                      enableBackground: "new 0 0 100 100",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                                  </svg>
                                </div>
                              </div>
                              <button
                                data-v-47eef2bd
                                type="button"
                                className="close"
                              >
                                <img
                                  data-v-47eef2bd
                                  src="/img/close.bea60152.svg"
                                  alt=""
                                />
                              </button>
                              <div data-v-47eef2bd className="modal-body">
                                <div
                                  data-v-47eef2bd
                                  className="text-center mb-3"
                                >
                                  <svg
                                    data-v-47eef2bd
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="104.552"
                                    height="104.553"
                                    viewBox="0 0 104.552 104.553"
                                  >
                                    <g
                                      data-v-47eef2bd
                                      id="plug-2"
                                      transform="translate(0.536 0.536)"
                                    >
                                      <line
                                        data-v-47eef2bd
                                        id="Line_1707"
                                        data-name="Line 1707"
                                        y1="11.44"
                                        x2="11.44"
                                        transform="translate(3 89.041)"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={5}
                                      />
                                      <path
                                        data-v-47eef2bd
                                        id="Path_67232"
                                        data-name="Path 67232"
                                        d="M21.082,21.929,11.8,31.213A23.21,23.21,0,1,0,44.622,64.036l9.284-9.284Z"
                                        transform="translate(2.642 25.005)"
                                        fill="none"
                                        stroke="#ff4764"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={5}
                                      />
                                      <line
                                        data-v-47eef2bd
                                        id="Line_1708"
                                        data-name="Line 1708"
                                        x1="11.44"
                                        y2="11.44"
                                        transform="translate(89.041 3)"
                                        fill="none"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={5}
                                      />
                                      <path
                                        data-v-47eef2bd
                                        id="Path_67233"
                                        data-name="Path 67233"
                                        d="M54.752,53.906l9.284-9.284A23.21,23.21,0,1,0,31.213,11.8l-9.284,9.284Z"
                                        transform="translate(25.005 2.642)"
                                        fill="none"
                                        stroke="#ff4764"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={5}
                                      />
                                      <line
                                        data-v-47eef2bd
                                        id="Line_1709"
                                        data-name="Line 1709"
                                        x1="9.323"
                                        y2="9.323"
                                        transform="translate(33.095 47.079)"
                                        fill="none"
                                        stroke="#ff4764"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={5}
                                      />
                                      <line
                                        data-v-47eef2bd
                                        id="Line_1710"
                                        data-name="Line 1710"
                                        x1="9.323"
                                        y2="9.323"
                                        transform="translate(47.079 61.064)"
                                        fill="none"
                                        stroke="#ff4764"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={5}
                                      />
                                    </g>
                                  </svg>
                                </div>
                                <div data-v-47eef2bd className="subtitle mb-3">
                                  <h3
                                    data-v-47eef2bd
                                    className="color-white font-weight-bold text-center mb-0"
                                  >
                                    Sau khi xóa, bạn sẽ không thể sử dụng API
                                    hiện tại nữa. Nếu bạn muốn sử dụng lại API,
                                    bạn phải tạo một API mới.
                                  </h3>
                                </div>
                                <p
                                  data-v-47eef2bd
                                  className="description color-white-50 text-center"
                                />
                                <div data-v-47eef2bd>
                                  <div data-v-47eef2bd className="row">
                                    <div
                                      data-v-47eef2bd
                                      className="col-12 d-flex flex-column"
                                    >
                                      <div
                                        data-v-47eef2bd
                                        className="row mt-auto"
                                      >
                                        <div
                                          data-v-47eef2bd
                                          className="col-md-6 col-sm-8 m-auto"
                                        >
                                          <button
                                            data-v-47eef2bd
                                            type="submit"
                                            className="btn btn-primary btn-lg btn-block"
                                          >
                                            Xác nhận
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**/}
      <div
        data-v-2f6da925
        data-v-36ad2db4
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
        className="modal fade changepassword"
      >
        <div data-v-2f6da925 className="modal-dialog simple">
          <form data-v-2f6da925>{/**/}</form>
        </div>
      </div>
      {/**/}
      <div
        data-v-75a05eee
        data-v-36ad2db4
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
        className="modal fade modalEnable"
      >
        <div data-v-75a05eee className="mask" />
        <div
          data-v-75a05eee
          className="modal-dialog simple modal-sm modal-2fa-custom"
        >
          <form data-v-75a05eee disabled="disabled">
            <div data-v-75a05eee className="modal-content">
              <div className="loading">
                <div className="loading__ring">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    style={{ enableBackground: "new 0 0 100 100" }}
                    xmlSpace="preserve"
                  >
                    <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                  </svg>
                </div>
                <div className="loading__ring">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    style={{ enableBackground: "new 0 0 100 100" }}
                    xmlSpace="preserve"
                  >
                    <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                  </svg>
                </div>
              </div>
              <button
                data-v-75a05eee
                type="button"
                aria-label="Close"
                className="close"
              >
                <svg
                  data-v-75a05eee
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <g
                    data-v-75a05eee
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={2}
                    fill="#ffffff"
                    stroke="#ffffff"
                    className="nc-icon-wrapper"
                  >
                    <g
                      data-v-75a05eee
                      className="nc-interact_menu-close-2-o-32"
                    >
                      <path
                        data-v-75a05eee
                        fill="none"
                        stroke="#ffffff"
                        strokeMiterlimit={10}
                        d="M2 6h28"
                        transform="translate(0 10.00) rotate(45.00 16 6)"
                      />
                      <path
                        data-v-75a05eee
                        data-color="color-2"
                        fill="none"
                        strokeMiterlimit={10}
                        d="M2 16h28"
                        opacity={0}
                      />
                      <path
                        data-v-75a05eee
                        fill="none"
                        stroke="#ffffff"
                        strokeMiterlimit={10}
                        d="M2 26h28"
                        transform="translate(0 -10) rotate(-45 16 26)"
                      />
                    </g>
                  </g>
                </svg>
              </button>
              <div data-v-75a05eee className="modal-body">
                <div data-v-75a05eee className="subtitle mb-2">
                  <h3
                    data-v-75a05eee
                    className="colorSecondary font-weight-bold text-center mb-0 no-wrap modal-title"
                  >
                    Xác Thực Google
                  </h3>
                </div>
                <div data-v-75a05eee className="row mb-4">
                  <div data-v-75a05eee className="col-12 text-center">
                    <p data-v-75a05eee className="desc mb-0">
                      <small data-v-75a05eee className="description">
                        <span data-v-75a05eee className="noted colorDanger">
                          Mở ứng dụng Google Authenticator của bạn và quét mã QR
                          bên dưới hoặc nhập khóa vào ứng dụng. Khóa này dùng để
                          khôi phục Xác thực Google của bạn khi bạn đổi hoặc mất
                          điện thoại. Vui lòng sao lưu khóa này trước khi kích
                          hoạt Xác thực Google.
                        </span>
                      </small>
                    </p>
                  </div>
                </div>
                <div data-v-75a05eee className="boxContent g_auth">
                  <div data-v-75a05eee className="row h-100">
                    <div
                      data-v-75a05eee
                      className="col-12 d-flex flex-column px-0"
                    >
                      <div data-v-75a05eee className="text-center qr-code-wrap">
                        <div
                          data-v-6863642f
                          data-v-75a05eee
                          className="qr-code-container qr-200 mx-auto"
                        >
                          <canvas
                            data-v-6863642f
                            height={100}
                            width={100}
                            style={{ height: "100px", width: "100px" }}
                          />
                        </div>
                      </div>
                      <div data-v-75a05eee className="row backupkey">
                        <div
                          data-v-75a05eee
                          className="col-md-3 label colorSecondary2 pl-3"
                        >
                          Mã sao lưu:
                        </div>
                        <div data-v-75a05eee className="col-md-9 key pr-lg-3">
                          <div data-v-75a05eee className="grouplabel">
                            <div
                              data-v-75a05eee
                              className="input-group transparent"
                            >
                              <input
                                data-v-75a05eee
                                type="text"
                                readOnly="readonly"
                                className="form-control pl-3 pl-sm-0"
                              />
                              <div
                                data-v-75a05eee
                                className="input-group-append"
                              >
                                <a
                                  data-v-75a05eee
                                  href="#"
                                  className="input-group-addon"
                                >
                                  <svg
                                    data-v-75a05eee
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 14 16"
                                  >
                                    <g
                                      data-v-75a05eee
                                      id="single-copy-04"
                                      transform="translate(-2)"
                                    >
                                      <g
                                        data-v-75a05eee
                                        id="Group_190"
                                        data-name="Group 190"
                                      >
                                        <rect
                                          data-v-75a05eee
                                          id="Rectangle_502"
                                          data-name="Rectangle 502"
                                          width={10}
                                          height={12}
                                          transform="translate(2.5 3.5)"
                                          className="icon-copy"
                                        />
                                        <path
                                          data-v-75a05eee
                                          id="Path_90"
                                          data-name="Path 90"
                                          d="M4.5.5h11v13"
                                          className="icon-copy"
                                        />
                                        <line
                                          data-v-75a05eee
                                          id="Line_187"
                                          data-name="Line 187"
                                          x2={4}
                                          transform="translate(5.5 6.5)"
                                          className="icon-copy"
                                        />
                                        <line
                                          data-v-75a05eee
                                          id="Line_188"
                                          data-name="Line 188"
                                          x2={4}
                                          transform="translate(5.5 9.5)"
                                          className="icon-copy"
                                        />
                                        <line
                                          data-v-75a05eee
                                          id="Line_189"
                                          data-name="Line 189"
                                          x2={4}
                                          transform="translate(5.5 12.5)"
                                          className="icon-copy"
                                        />
                                      </g>
                                    </g>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-v-75a05eee className="form-group">
                        <label data-v-75a05eee className="color-white-50">
                          Mật khẩu
                        </label>
                        <input
                          data-v-75a05eee
                          type="password"
                          id="current-password"
                          className="form-control"
                        />
                      </div>
                      <div
                        data-v-75a05eee
                        className="form-group verification-code"
                      >
                        <label data-v-75a05eee className="color-white-50">
                          Mã Xác nhận Email
                        </label>
                        <div data-v-75a05eee className="input-group">
                          <div data-v-75a05eee className="position-relative">
                            <input
                              data-v-75a05eee
                              type="text"
                              className="form-control"
                            />
                            <span data-v-75a05eee className="paste">
                              Paste
                            </span>
                          </div>
                          <button
                            data-v-75a05eee
                            type="button"
                            className="btn btn-primary"
                          >
                            Gửi Mã
                          </button>
                        </div>
                      </div>
                      <div data-v-75a05eee className="form-group">
                        <label data-v-75a05eee className="color-white-50">
                          Mã 2FA
                        </label>
                        <input
                          data-v-75a05eee
                          type="number"
                          className="form-control"
                        />
                      </div>
                      <div data-v-75a05eee style={{ display: "none" }}>
                        <div
                          className="grecaptcha-badge"
                          data-style="none"
                          style={{
                            width: "256px",
                            height: "60px",
                            position: "fixed",
                            visibility: "hidden",
                          }}
                        >
                          <div className="grecaptcha-logo">
                            <iframe
                              title="reCAPTCHA"
                              src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeMmvckAAAAAJrKCdFPgm8-o0dwbnC4gh1foIYl&co=aHR0cHM6Ly9zdGFyaXNhMi5uZXQ6NDQz&hl=en&v=khH7Ei3klcvfRI74FvDcfuOo&size=invisible&cb=93ee98e40sh9"
                              width={256}
                              height={60}
                              role="presentation"
                              name="a-6qvxcokds0rb"
                              frameBorder={0}
                              scrolling="no"
                              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                            />
                          </div>
                          <div className="grecaptcha-error" />
                          <textarea
                            id="g-recaptcha-response-9"
                            name="g-recaptcha-response"
                            className="g-recaptcha-response"
                            style={{
                              width: "250px",
                              height: "40px",
                              border: "1px solid rgb(193, 193, 193)",
                              margin: "10px 25px",
                              padding: "0px",
                              resize: "none",
                              display: "none",
                            }}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      {/**/}
                      <div data-v-75a05eee className="listTools mt-auto">
                        <div data-v-75a05eee className="row">
                          <div data-v-75a05eee className="col-md-6 offset-md-3">
                            <button
                              data-v-75a05eee
                              disabled="disabled"
                              type="submit"
                              className="button btn-block btn-large round btn-blue-light btn-hover investor btn-bounce primary disableButton"
                            >
                              Bật
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        data-v-1b37d240
        data-v-36ad2db4
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
        className="modal fade modalDisable"
      >
        <div data-v-1b37d240 className="mask" />
        <div
          data-v-1b37d240
          className="modal-dialog simple modal-sm modal-2fa-custom"
        >
          <div data-v-1b37d240 className="modal-content">
            <div className="loading">
              <div className="loading__ring">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  style={{ enableBackground: "new 0 0 100 100" }}
                  xmlSpace="preserve"
                >
                  <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                </svg>
              </div>
              <div className="loading__ring">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  style={{ enableBackground: "new 0 0 100 100" }}
                  xmlSpace="preserve"
                >
                  <path d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z" />
                </svg>
              </div>
            </div>
            <button
              data-v-1b37d240
              type="button"
              aria-label="Close"
              className="close"
            >
              <svg
                data-v-1b37d240
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <g
                  data-v-1b37d240
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth={2}
                  fill="#ffffff"
                  stroke="#ffffff"
                  className="nc-icon-wrapper"
                >
                  <g data-v-1b37d240 className="nc-interact_menu-close-2-o-32">
                    <path
                      data-v-1b37d240
                      fill="none"
                      stroke="#ffffff"
                      strokeMiterlimit={10}
                      d="M2 6h28"
                      transform="translate(0 10.00) rotate(45.00 16 6)"
                    />
                    <path
                      data-v-1b37d240
                      data-color="color-2"
                      fill="none"
                      strokeMiterlimit={10}
                      d="M2 16h28"
                      opacity={0}
                    />
                    <path
                      data-v-1b37d240
                      fill="none"
                      stroke="#ffffff"
                      strokeMiterlimit={10}
                      d="M2 26h28"
                      transform="translate(0 -10) rotate(-45 16 26)"
                    />
                  </g>
                </g>
              </svg>
            </button>
            <form data-v-1b37d240>
              <div data-v-1b37d240 className="modal-body">
                <div data-v-1b37d240 className="subtitle mb-3">
                  <h3
                    data-v-1b37d240
                    className="colorSecondary font-weight-bold text-center modal-title"
                  >
                    Google Authenticator
                  </h3>
                </div>
                <div data-v-1b37d240 className="row">
                  <div data-v-1b37d240 className="col-12 text-center">
                    <div data-v-1b37d240 className="description">
                      <p data-v-1b37d240 className="color-white-50">
                        Google Authenticator đã được bật. Để hủy kích hoạt, nhập
                        mã Google Authenticator và nhấn Hủy kích hoạt.
                      </p>
                    </div>
                  </div>
                </div>
                <div data-v-1b37d240 className="boxContent">
                  <div data-v-1b37d240 className="row">
                    <div
                      data-v-1b37d240
                      className="col-12 position-static-mobile"
                    >
                      <div data-v-1b37d240 className="form-group">
                        <label data-v-1b37d240 className="color-white-50">
                          Mật khẩu
                        </label>
                        <input
                          data-v-1b37d240
                          type="password"
                          id="current-password"
                          className="form-control"
                        />
                      </div>
                      <div
                        data-v-1b37d240
                        className="form-group verification-code"
                      >
                        <label data-v-1b37d240 className="color-white-50">
                          Mã Xác nhận Email
                        </label>
                        <div data-v-1b37d240 className="input-group mb-3">
                          <div data-v-1b37d240 className="position-relative">
                            <input
                              data-v-1b37d240
                              type="text"
                              className="form-control"
                            />
                            <span data-v-1b37d240 className="paste">
                              Paste
                            </span>
                          </div>
                          <button
                            data-v-1b37d240
                            type="button"
                            className="btn btn-primary"
                          >
                            Gửi Mã
                          </button>
                        </div>
                      </div>
                      <div data-v-1b37d240 className="form-group">
                        <label data-v-1b37d240 className="color-white-50">
                          Mã 2FA
                        </label>
                        <input
                          data-v-1b37d240
                          type="number"
                          className="form-control"
                        />
                      </div>
                      <div data-v-1b37d240 style={{ display: "none" }}>
                        <div
                          className="grecaptcha-badge"
                          data-style="none"
                          style={{
                            width: "256px",
                            height: "60px",
                            position: "fixed",
                            visibility: "hidden",
                          }}
                        >
                          <div className="grecaptcha-logo">
                            <iframe
                              title="reCAPTCHA"
                              src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeMmvckAAAAAJrKCdFPgm8-o0dwbnC4gh1foIYl&co=aHR0cHM6Ly9zdGFyaXNhMi5uZXQ6NDQz&hl=en&v=khH7Ei3klcvfRI74FvDcfuOo&size=invisible&cb=2yv3erqz50tu"
                              width={256}
                              height={60}
                              role="presentation"
                              name="a-cwncqsowm2w"
                              frameBorder={0}
                              scrolling="no"
                              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                            />
                          </div>
                          <div className="grecaptcha-error" />
                          <textarea
                            id="g-recaptcha-response-10"
                            name="g-recaptcha-response"
                            className="g-recaptcha-response"
                            style={{
                              width: "250px",
                              height: "40px",
                              border: "1px solid rgb(193, 193, 193)",
                              margin: "10px 25px",
                              padding: "0px",
                              resize: "none",
                              display: "none",
                            }}
                            defaultValue={""}
                          />
                        </div>
                        <iframe style={{ display: "none" }} />
                      </div>
                      {/**/}
                      <div data-v-1b37d240 className="form-group">
                        <div data-v-1b37d240 className="row">
                          <div
                            data-v-1b37d240
                            className="col-md-6 offset-md-3 position-static-mobile"
                          >
                            <button
                              data-v-1b37d240
                              disabled="disabled"
                              type="submit"
                              className="button btn-block btn-large round btn-blue-light btn-active disableButton"
                            >
                              Hủy kích hoạt
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
