import React from 'react';
import './App.css';

function Calculator() {
  const [startingPrice, setStartingPrice] = React.useState(0);
  const [residualValue, setResidualValue] = React.useState(0);
  const priceAfterResidual = (startingPrice * residualValue).toFixed(2);
  const [nationalRebate, setNationalRebate] = React.useState(0);
  const [dealerDiscount, setDealerDiscount] = React.useState(0);
  const [downPayment, setDownPayment] = React.useState(0);
  const salesPrice = (priceAfterResidual - nationalRebate - dealerDiscount - downPayment);
  const salesPriceFormatted = Intl.NumberFormat("en-US",{
    style:"currency",
    currency: "USD"
  }).format(salesPrice);
  const [additionalFees, setAdditionalFees] = React.useState(0);
  const finalPrice = parseInt(salesPrice) + parseInt(additionalFees);
  const finalPriceFormatted = Intl.NumberFormat("en-US",{
    style:"currency",
    currency: "USD"
  }).format(finalPrice);
  const leaseterm = 36;
  const [goalMonthlyPayment, setGoalMonthlyPayment] = React.useState(0);
  const realMonthlyPayment = parseInt(finalPrice / leaseterm);
  const [aboveGoal, setAboveGoal] = React.useState(false);



  return (
    <div className="main-div">
      <h1> Car Payment calculator </h1>
      <div className="calc">
        <form className="calcForm">
          <div>
            <label>Monthly Goal: </label>
            <input onChange={e => setGoalMonthlyPayment(e.target.value)}></input><br /><br />
            <label>Starting Price: </label>
            <input onChange={e => setStartingPrice(e.target.value)}></input><br /><br />
            <span>Residual Value: </span>
            <a className="residualValue" onClick={() => setResidualValue(.53)}>53%</a>
            <a className="residualValue" onClick={() => setResidualValue(.62)}>62%</a>
            <a className="residualValue" onClick={() => setResidualValue(.68)}>68%</a><br /><br />
            <div>Select Residual Value: {residualValue * 100} %</div><br />
            <label>Rebate: </label>
            <input onChange={e => setNationalRebate(e.target.value)}></input><br /><br />
            <label>Discount: </label>
            <input onChange={e => setDealerDiscount(e.target.value)}></input><br /><br />
            <label>Down Payment: </label>
            <input onChange={e => setDownPayment(e.target.value)}></input><br /><br />
            <label>Additional Fees: </label>
            <input onChange={e => setAdditionalFees(e.target.value)}></input><br /><br />
          </div>
          <div className="formOutput">
            <span> Goal Monthly Payment: <span className="displayValue">${goalMonthlyPayment}</span></span><br /><br />
            <span> MSRP: <span className="displayValue">${startingPrice}</span></span><br /><br />
            <span> Residual Sale Price: <span className="displayValue">${priceAfterResidual}</span></span><br /><br />
            <span className="displayValue"> Sales Price: <span className="displayValue">{salesPriceFormatted}</span></span><br /><br />
            <span> Additional Fees: <span className="displayValue">${additionalFees}</span></span><br /><br />
            <span className="displayValue"> Final Price: {finalPriceFormatted}</span><br /><br />
            <span className={(realMonthlyPayment >= goalMonthlyPayment? "highlightOver" : "highlightUnder")}>Actual Monthly Payment: $ <span onChange={() => (realMonthlyPayment >= goalMonthlyPayment? setAboveGoal(true): setAboveGoal(false))}>{realMonthlyPayment}</span></span><br /><br />
            <span>{realMonthlyPayment >= goalMonthlyPayment ? "OVER GOAL":"UNDER GOAL"}</span>
          </div>

        </form>
      </div>



    </div>
  );
}

export default Calculator;
