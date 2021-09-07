import React from "react";
import "../product.css";

const productContent = () => {
  return (
    <div className="products">
      <div className="product-content">
        <div className="product-content-bottom">
          <div className="product-content-values">
            <div className="product-content-values-row">
              <div className="product-content-values-item">
                <div className="product-content-card-image-one"></div>
                <h5 className="product-content-values-h3">Gold</h5>
                <ul className="product-content-values-p">
                  <li className="produict0content-values-li">
                    Symbol:{" "}
                    <span
                      style={{
                        color: "#e4b912",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      Au
                    </span>
                  </li>
                  <li className="produict0content-values-li">
                    Atomin Number:{" "}
                    <span
                      style={{
                        color: "#e4b912",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      79
                    </span>
                  </li>
                </ul>
              </div>
              <div className="product-content-values-item">
                <div className="product-content-card-image-seven"></div>
                <h5 className="product-content-values-h3">Silver</h5>
                <ul className="product-content-values-p">
                  <li className="produict0content-values-li">
                    Symbol:{" "}
                    <span
                      style={{
                        color: "#636267",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      Ag
                    </span>
                  </li>
                  <li className="produict0content-values-li">
                    Atomin Number:{" "}
                    <span
                      style={{
                        color: "#636267",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      109
                    </span>
                  </li>
                </ul>
              </div>
              <div
                to="/services-ocean"
                className="product-content-values-item"
              >
                <div className="product-content-card-image-three"></div>
                <h5 className="product-content-values-h3">Copper cathode</h5>
                <ul className="product-content-values-p">
                  <li className="produict0content-values-li">
                    Symbol:{" "}
                    <span
                      style={{
                        color: "#81281b",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      Cu
                    </span>
                  </li>
                  <li className="produict0content-values-li">
                    Atomin Number:{" "}
                    <span
                      style={{
                        color: "#81281b",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      29
                    </span>
                  </li>
                </ul>
              </div>
              <div to="/services-air" className="product-content-values-item">
                <div className="product-content-card-image-two"></div>
                <h5 className="product-content-values-h3">Diamond</h5>
                <ul className="product-content-values-p">
                  <li className="produict0content-values-li">
                    Symbol:{" "}
                    <span
                      style={{
                        color: "#c4c6c3",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      Cu
                    </span>
                  </li>
                  <li className="produict0content-values-li">
                    Atomin Number:{" "}
                    <span
                      style={{
                        color: "#c4c6c3",
                        fontWeight: "bolder",
                        fontSize: "18px",
                      }}
                    >
                      29
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="product-content-values-row">
              <div
                to="/services-advisory"
                className="product-content-values-item"
              >
                <div className="product-content-card-image-eight"></div>
                <h5 className="product-content-values-h3">Gemstones</h5>
                <p className="product-content-values-p">
                  We have a team of experts who diligently address any
                  challenges you are facing in the value chain...
                </p>
              </div>
              <div
                to="/services-linkages"
                className="product-content-values-item"
              >
                <div className="product-content-card-image-four"></div>
                <h5 className="product-content-values-h3">
                  Colombo Tantalite (Coltan)
                </h5>
                <p className="product-content-values-p">
                  Over time we have been able to create valuable relationships
                  with Buyers, Sellers, Refiners etc., and...
                </p>
              </div>
              <div
                to="/services-brokerage"
                className="product-content-values-item"
              >
                <div className="product-content-card-image-five"></div>
                <h5 className="product-content-values-h3">Cassiterite</h5>
                <p className="product-content-values-p">
                  From our vast connections with fully licensed customs
                  brokerage companies, we provide our clients...
                </p>
              </div>
              <div className="product-content-values-item">
                <div className="product-content-card-image-six"></div>
                <h5 className="product-content-values-h3">Cobalt</h5>
                <p className="product-content-values-p">
                  At a reasonable pre-negotiated fee we source, inspect,
                  transport and refine precious stones on behalf of private
                  investors...
                </p>
              </div>
            </div>
            <div className="lower-button-group">
              <div to="/service-type">
                <button className="storage-content-button">
                  Request a quote
                </button>
              </div>
              <div to="/quotation">
                <button className="storage-content-button">Make enquiry</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productContent;
