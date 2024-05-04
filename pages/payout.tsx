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
import { toCurrency } from "@/utils";

import { CURRENCY_SYMBOL } from "@/constants";
import { calculateEmiOutcome, validateForm } from "@/utils";

import stateAtom from "@/atoms/stateAtom";

export default function Home() {
  const [state, setState] = useRecoilState(stateAtom);
  const resetState = useResetRecoilState(stateAtom);
  const [netIncome, setNetIncome] = useState(0);
  const [discountRate, setDiscountRate] = useState(0);
  const { loanAmount, interestRate, loanTenure, prepayments, errors } = state;
  const [result, setResult] = useState(0);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  const onresetState = () => {
    setDiscountRate(0);
    setNetIncome(0);
    setResult(0);
  };
  const onCalculate = () => {
    if (netIncome !== 0 && discountRate !== 0) {
      const data = netIncome / discountRate;
      setResult(data);
    }
  };

  const resetStatus = netIncome !== 0 || discountRate !== 0;
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
              PAYOUT Calculator
            </h1>
            <p className="text-center mt-6 text-lg leading-8 text-gray-600">
              An NPV (Net Present Value) calculator is a financial tool used to
              estimate the present value of all future cash flows generated by
              an investment or project, considering the time value of money. It
              takes into account factors such as the initial investment,
              expected cash inflows, discount rate, and the duration of the
              investment to determine whether the investment is expected to
              generate positive or negative returns when discounted back to the
              present.
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
                    name="netIncome"
                    label="Capital Cost($)"
                    placeholder="50,00,000"
                    unit={CURRENCY_SYMBOL}
                    value={netIncome}
                    onChange={(e) => {
                      setNetIncome(Number(e.target.value));
                    }}
                  />
                  <TextField
                    name="discountRate"
                    label="Net Income per Month ($/Month)"
                    placeholder="9"
                    unit="%"
                    value={discountRate}
                    onChange={(e) => {
                      setDiscountRate(Number(e.target.value));
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
              <Outcome label="PAYOUT" value={result} />
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
        {toCurrency(value)}
      </dd>
    </div>
  );
}
