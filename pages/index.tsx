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
import Link from "next/link";

export default function Home() {
  const [state, setState] = useRecoilState(stateAtom);
  const resetState = useResetRecoilState(stateAtom);
  const [netIncome, setNetIncome] = useState(0);
  const [discountRate, setDiscountRate] = useState(0);
  const [time, setTime] = useState(0);
  const { loanAmount, interestRate, loanTenure, prepayments, errors } = state;
  const [result, setResult] = useState(0);
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };
  const onresetState = () => {
    setDiscountRate(0);
    setNetIncome(0);
    setTime(0);
    setResult(0);
  };
  const onCalculate = () => {
    if (netIncome !== 0 && discountRate !== 0 && time !== 0) {
      const data = netIncome / Math.pow(1 + discountRate, time);
      setResult(data);
    }
  };

  const resetStatus = netIncome !== 0 || discountRate !== 0 || time !== 0;
  const { outcome } = useRecoilValue(stateAtom);
  const tabs = [
    {
      title: "Exponential Decline",
      content: <div>Content for Tab 1</div>,
    },
    {
      title: "Harmonic Decline",
      content: <div>Content for Tab 2</div>,
    },
    {
      title: "Hyperbolic Decline",
      content: <div>Content for Tab 3</div>,
    },
  ];
  return (
    <Layout>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:py-12">
            <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Oil well Economic Tool
            </h1>
            <p className="text-center mt-6 text-lg leading-8 text-gray-600">
              Oil Well Economics Tool is a software application designed to help
              users evaluate the financial viability and profitability of oil
              wells. It typically incorporates various economic indicators such
              as Net Present Value, Production rates, Production costs,
              taxation, and market trends to provide insights into the potential
              returns on investment.
            </p>
            <div className="flex items-center justify-center w-full">
              <Link
                href="/production-calculator"
                className="rounded-xl border border-solid border-sky-500 bg-background-button-secondary flex items-center justify-center py-2 px-4 font-medium text-captionL text-text-base-primary mt-5"
              >
                Go to Calculator
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
