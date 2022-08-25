import './MintModel.css'
import React from 'react'

function MintModel({setOpenModal}) {
  return (
    <div>
    <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
              <p>Enter No of tokens you want to buy and price of 1 token</p>
            </div>
            <div className="body">
            <p>TOKEN STOCK : 8980 </p>
            <p> Enter Tokens: <input type="number"  min={0} /> X 1 token price = <input type="number" min={0}/> = <span></span>
                </p>
            </div>
            <div className="footer">
              <button
               id="calculateBtn"
              >
                Calculate
              </button>
              <button>Buy tokens</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MintModel