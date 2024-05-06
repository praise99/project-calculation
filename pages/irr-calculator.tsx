"use client";

import { ChangeEvent, useState } from "react";

import { useRecoilState, useResetRecoilState } from "recoil";

import {
  BottomGradient,
  EMI,
  Layout,
  LoanRepaymentScheduleTable,
  PaymentBreakUp,
  TextField,
} from "@/components";
import { useRecoilValue } from "recoil";

import { OutcomeProps } from "@/types";
import { toCurrency, toSecondCurrency } from "@/utils";

import { CURRENCY_SYMBOL } from "@/constants";
import { calculateEmiOutcome, validateForm } from "@/utils";

import stateAtom from "@/atoms/stateAtom";

export default function Home() {
  const [state, setState] = useRecoilState(stateAtom);
  const resetState = useResetRecoilState(stateAtom);
  const [oilPrice, setOilPrice] = useState(0);
  const [fixedCost, setFixedCost] = useState(0);
  const [overhead, setOverhead] = useState(0);
  const [oilExpense, setOilExpense] = useState(0);
  const [oilSeverance, setOilSeverance] = useState(0);
  const [oilSeveranceTwo, setOilSeveranceTwo] = useState(0);
  const [revenueRate, setRevenueRate] = useState(0);
  const [workingRate, setWorkingRate] = useState(0);
  const [adValerom, setAdValerom] = useState(0);
  const { loanAmount, interestRate, loanTenure, prepayments, errors } = state;
  const [result, setResult] = useState(0);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  const onresetState = () => {
    setFixedCost(0);
    setWorkingRate(0);
    setRevenueRate(0);
    setOverhead(0);
    setOilExpense(0);
    setOilPrice(0);
    setOilSeverance(0);
    setOilSeveranceTwo(0);
    setAdValerom(0);
    setResult(0);
  };
  const onCalculate = () => {
    console.log(
      fixedCost,
      workingRate,
      revenueRate,
      overhead,
      oilExpense,
      oilPrice,
      oilSeverance,
      oilSeveranceTwo,
      adValerom,
      "here"
    );
    if (
      fixedCost !== 0 &&
      workingRate !== 0 &&
      revenueRate !== 0 &&
      overhead !== 0 &&
      oilExpense !== 0 &&
      oilPrice !== 0 &&
      oilSeverance !== 0 &&
      oilSeveranceTwo !== 0 &&
      adValerom !== 0
    ) {
      let topCalculation = workingRate * revenueRate;
      let middleCalculation =
        fixedCost * (1 - oilSeveranceTwo) * (oilExpense / 1000);
      let firstCalc = oilPrice * (1 - oilSeverance);
      let bottomCalcu = 1 - adValerom;
      console.log(topCalculation, middleCalculation, firstCalc, bottomCalcu);
      const data =
        topCalculation /
        (overhead * (firstCalc + middleCalculation) * bottomCalcu);
      console.log("dat", data);
      setResult(data);
    }
  };

  const resetStatus =
    fixedCost !== 0 ||
    workingRate !== 0 ||
    revenueRate !== 0 ||
    overhead !== 0 ||
    oilExpense !== 0 ||
    oilPrice !== 0 ||
    oilSeverance !== 0 ||
    oilSeveranceTwo !== 0 ||
    adValerom !== 0;
  const { outcome } = useRecoilValue(stateAtom);
  return (
    <Layout>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:py-12">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Project
              </div>
            </div>
            <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ECONOMIC LIMIT
            </h1>
            <p className="text-center mt-6 text-lg leading-8 text-gray-600">
              Economic limit of an oil well specifies the production rate beyond
              which the net income becomes negative. The economic limit is the
              minimum production rate at which the net income is zero. The
              economic limit is important since the definition of reserve
              dictate that reserves are those volumes which can be produced
              economically or up to the economic limit.
            </p>
            <div className="py-6 px-6 sm:py-12 lg:px-8">
              <form
                action="#"
                method="post"
                className="mx-auto max-w-xl"
                autoComplete="off"
              >
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                  <TextField
                    name="revenueRate"
                    label="Lease Operating Expenses"
                    placeholder="9"
                    unit="$/well/month"
                    value={revenueRate}
                    className="sm:col-span-1"
                    onChange={(e) => {
                      setRevenueRate(Number(e.target.value));
                    }}
                  />
                  <TextField
                    name="workingRate"
                    label="Working Interest"
                    placeholder="9"
                    unit=""
                    value={workingRate}
                    className="sm:col-span-1"
                    onChange={(e) => {
                      setWorkingRate(Number(e.target.value));
                    }}
                  />
                  <TextField
                    name="oilPrice"
                    label="Oil Price"
                    placeholder="50,00,000"
                    unit="$/stb"
                    className="sm:col-span-1"
                    value={oilPrice}
                    onChange={(e) => {
                      setOilPrice(Number(e.target.value));
                    }}
                  />
                  <TextField
                    name="fixedCost"
                    label="Gas Price"
                    placeholder="50,00,000"
                    unit="$/M Scf"
                    className="sm:col-span-1"
                    value={fixedCost}
                    onChange={(e) => {
                      setFixedCost(Number(e.target.value));
                    }}
                  />
                  <TextField
                    name="overhead"
                    label="Net Revenue Interest"
                    placeholder="50,00,000"
                    unit=""
                    className="sm:col-span-1"
                    value={overhead}
                    onChange={(e) => {
                      setOverhead(Number(e.target.value));
                    }}
                  />
                  <TextField
                    name="oilExpense"
                    label="Gas Oil Ratio"
                    placeholder="50,00,000"
                    className="sm:col-span-1"
                    unit="scf/otb"
                    value={oilExpense}
                    onChange={(e) => {
                      setOilExpense(Number(e.target.value));
                    }}
                  />
                  <TextField
                    name="oilSeverance"
                    label="Oil Severance"
                    placeholder="9"
                    unit=""
                    value={oilSeverance}
                    className="sm:col-span-1"
                    onChange={(e) => {
                      setOilSeverance(Number(e.target.value));
                    }}
                  />
                  <TextField
                    name="oilSeveranceTwo"
                    className="sm:col-span-1"
                    label="Gas Severance"
                    placeholder="9"
                    unit=""
                    value={oilSeveranceTwo}
                    onChange={(e) => {
                      setOilSeveranceTwo(Number(e.target.value));
                    }}
                  />
                  <TextField
                    name="adValerom"
                    className="sm:col-span-1"
                    label="Ad valorem tax"
                    placeholder="9"
                    unit=""
                    value={adValerom}
                    onChange={(e) => {
                      setAdValerom(Number(e.target.value));
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2">
                  <button
                    type="button"
                    onClick={onCalculate}
                    className="btn btn-primary"
                  >
                    Calculate
                  </button>

                  <button
                    type="button"
                    onClick={onresetState}
                    className="btn btn-secondary"
                    disabled={!resetStatus}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-1 sm:py-3">
            <dl className="grid grid-cols-1 gap-y-16 gap-x-6 text-center lg:grid-cols-1">
              <Outcome label="ECONOMIC LIMIT" value={result} />
              {/* <Outcome
                label="Total Interest Payable"
                value={outcome?.totalInterestPayable}
              />
              <Outcome
                label="Principal Amount"
                value={outcome?.principalAmount}
              />
              <Outcome
                label="Total Payment (Principal + Interest)"
                value={outcome?.totalPayment}
              /> */}
            </dl>
          </div>
        </div>
      </main>
    </Layout>
  );
}

function Outcome({ label, value }: OutcomeProps) {
  return (
    <div className="mx-auto flex items-center max-w-xs flex-col gap-y-4">
      <dt className="text-base leading-7 text-gray-600">{label}</dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        {toSecondCurrency(value)} {value ? " bbl/m" : ""}
      </dd>
    </div>
  );
}
