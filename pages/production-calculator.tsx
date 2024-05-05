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
  const tabs = [
    {
      title: "Exponential Decline",
      content: <Exponential />,
    },
    {
      title: "Harmonic Decline",
      content: <Harmonic />,
    },
    {
      title: "Hyperbolic Decline",
      content: <Hyperbolic />,
    },
  ];
  return (
    <Layout>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:py-12">
            <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-12">
              Production Rate
            </h1>
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <Tabs tabs={tabs} />
            </div>
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
        {value ? " bbl/day" : ""}
      </dd>
    </div>
  );
}

const Tabs = ({ tabs }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="flex border-b border-gray-200 gap-8 justify-center mt-12">
        {tabs.map((tab: any, index: any) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className="hidden sm:mb-8 sm:flex sm:justify-center cursor-pointer"
          >
            <div
              className={`${
                index === activeTab
                  ? "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 text-white"
                  : ""
              } relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20`}
            >
              {tab.title}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab: any, index: any) => (
          <div
            key={index}
            style={{ display: index === activeTab ? "block" : "none" }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

const Exponential = () => {
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
      const data = netIncome * Math.exp(-(discountRate * time));
      setResult(data);
    }
  };

  const resetStatus = netIncome !== 0 || discountRate !== 0 || time !== 0;
  const { outcome } = useRecoilValue(stateAtom);
  return (
    <>
      <h1 className="text-center text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Exponential Decline Calculator
      </h1>
      <p className="text-center mt-6 text-lg leading-8 text-gray-600">
        Production rate is a key metric of determining the future production of
        oil and gas wells with use of of Decline Curves( Exponential, Hyperbolic
        and Harmonic model). Exponential decline is a method of determining the
        production rate of an oil well where the production rate declines by the
        same percentage at each time period. The trend line has a constant slope
        signifying a steady decline in production over time
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
              label="Initial Production Rate"
              placeholder="50,00,000"
              unit="bbl/day"
              value={netIncome}
              onChange={(e) => {
                setNetIncome(Number(e.target.value));
              }}
            />
            <TextField
              name="discountRate"
              label="Initial Decline Rate"
              placeholder="9"
              unit="%"
              value={discountRate}
              onChange={(e) => {
                setDiscountRate(Number(e.target.value));
              }}
            />
            <TextField
              name="time"
              label="Time"
              placeholder="20"
              unit="yrs"
              value={time}
              onChange={(e) => {
                setTime(Number(e.target.value));
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-1 sm:py-3">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-6 text-center lg:grid-cols-1">
          <Outcome label="PRODUCTION RATE" value={result} />
        </dl>
      </div>
    </>
  );
};
const Hyperbolic = () => {
  const [state, setState] = useRecoilState(stateAtom);
  const resetState = useResetRecoilState(stateAtom);
  const [netIncome, setNetIncome] = useState(0);
  const [discountRate, setDiscountRate] = useState(0);
  const [time, setTime] = useState(0);
  const [bFactor, setbFactor] = useState("");
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
    setbFactor("");
    setResult(0);
  };
  const onCalculate = () => {
    if (netIncome !== 0 && discountRate !== 0 && time !== 0) {
      if (parseFloat(bFactor) <= 1) {
        const data =
          netIncome /
          Math.pow(
            1 + discountRate * parseFloat(bFactor) * time,
            1 / parseFloat(bFactor)
          );
        setResult(data);
      }
    }
  };

  const resetStatus =
    netIncome !== 0 ||
    discountRate !== 0 ||
    time !== 0 ||
    parseFloat(bFactor) !== 0;
  const { outcome } = useRecoilValue(stateAtom);
  return (
    <>
      <h1 className="text-center text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 ">
        Hyperbolic Decline Calculator
      </h1>
      <p className="text-center mt-6 text-lg leading-8 text-gray-600">
        The hyperbolic decline is very common in the less permeable, tightly
        formed reservoirs. The trend line shows a decline that is not constant
        and can fluctuate over time.
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
              label="Initial Production Rate"
              placeholder="50,00,000"
              unit="bbl/day"
              value={netIncome}
              onChange={(e) => {
                setNetIncome(Number(e.target.value));
              }}
            />
            <TextField
              name="discountRate"
              label="Initial Decline Rate"
              placeholder="9"
              unit="%"
              value={discountRate}
              onChange={(e) => {
                setDiscountRate(Number(e.target.value));
              }}
            />
            <TextField
              name="time"
              label="Time"
              placeholder="20"
              unit="yrs"
              value={time}
              onChange={(e) => {
                setTime(Number(e.target.value));
              }}
            />
            <TextField
              name="bFactor"
              label="B Factor ( 0 < B Factor < 1)"
              placeholder="20"
              unit=""
              value={bFactor}
              onChange={(e) => {
                if (parseFloat(e.target.value) > 1) {
                  setbFactor("");
                } else {
                  setbFactor(e.target.value);
                }
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-1 sm:py-3">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-6 text-center lg:grid-cols-1">
          <Outcome label="PRODUCTION RATE" value={result} />
        </dl>
      </div>
    </>
  );
};
const Harmonic = () => {
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
      const data = netIncome / (1 + discountRate * time);
      setResult(data);
    }
  };

  const resetStatus = netIncome !== 0 || discountRate !== 0 || time !== 0;
  const { outcome } = useRecoilValue(stateAtom);
  return (
    <>
      <h1 className="text-center text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 ">
        Harmonic Decline Calculator
      </h1>
      <p className="text-center mt-6 text-lg leading-8 text-gray-600">
        A harmonic decline is a type of hyperbolic decline and is most often
        seen in the new shale horizontal wells. It is characterized by a very
        steep initial decline.
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
              label="Initial Production Rate"
              placeholder="50,00,000"
              unit="bbl/day"
              value={netIncome}
              onChange={(e) => {
                setNetIncome(Number(e.target.value));
              }}
            />
            <TextField
              name="discountRate"
              label="Initial Decline Rate"
              placeholder="9"
              unit="%"
              value={discountRate}
              onChange={(e) => {
                setDiscountRate(Number(e.target.value));
              }}
            />
            <TextField
              name="time"
              label="Time"
              placeholder="20"
              unit="yrs"
              value={time}
              onChange={(e) => {
                setTime(Number(e.target.value));
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-1 sm:py-3">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-6 text-center lg:grid-cols-1">
          <Outcome label="PRODUCTION RATE" value={result} />
        </dl>
      </div>
    </>
  );
};
