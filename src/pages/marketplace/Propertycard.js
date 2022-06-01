import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/bed.jpg'
function Propertycard() {
    return (
        <div>
            <div className='market-card'>
                <div className='content'>
                    <div className='image'>
                        <img src={image} alt="" />
                    </div>
                    <div className='details'>
                        <div className='pricing'>
                            <div className='total-price'>
                                <p>
                                    <span style={{ color: "white", fontSize: "20px" }}>
                                        TOTAL PRICE
                                    </span>
                                    <br />
                                    $ 714,402
                                    <br />
                                    <span style={{ color: "white", fontSize: "20px" }}>
                                        TOTAL TOKENS
                                    </span>
                                    <br />
                                    1400
                                </p>
                            </div>
                            <div className="token-price">
                                <p>
                                    <span style={{ color: "white", fontSize: "20px" }}>
                                        TOKEN's PRICE
                                    </span>
                                    <br />
                                    $ 50.31
                                    <br />
                                    <span style={{ color: "#fff", fontSize: "20px" }}>
                                        Available TOKEN's
                                    </span>
                                    <br />
                                    500
                                </p>
                            </div>
                            <div className="up">
                                <div className="expected-income">
                                    <p>
                                        <span style={{ color: "#fff", fontSize: "20px" }}>
                                            EXPECTED INCOME
                                        </span>
                                        <br />
                                        <span style={{ color: "#fff", fontSize: "20px" }}>
                                            RENT PER TOKEN
                                        </span>
                                    </p>
                                </div>
                                <div className="digits">
                                    <p>
                                        +10%
                                        <br />
                                        $ 5.28/YEAR
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link to="/propertydetails/highlights" className='view'>View Property</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Propertycard