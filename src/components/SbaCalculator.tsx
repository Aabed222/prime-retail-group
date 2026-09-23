"use client";

import { useMemo, useState } from "react";

const DOWN_OPTIONS = [10, 15, 20, 25, 30];

export function SbaCalculator() {
  const [price, setPrice] = useState("");
  const [downPct, setDownPct] = useState(20);
  const [category, setCategory] = useState("Commercial");
  const [show, setShow] = useState(false);

  const result = useMemo(() => {
    const purchase = Number(price.replace(/,/g, ""));
    if (!purchase || purchase <= 0) return null;
    const down = purchase * (downPct / 100);
    const loan = purchase - down;
    const annualRate = category === "Residential" ? 0.065 : 0.075;
    const years = 25;
    const r = annualRate / 12;
    const n = years * 12;
    const payment =
      r === 0 ? loan / n : (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPaid = payment * n;
    return { purchase, down, loan, payment, totalPaid, annualRate, years };
  }, [price, downPct, category]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="border border-border bg-white p-6 md:p-8">
        <h2 className="font-serif text-2xl text-navy">Loan inputs</h2>
        <div className="mt-6 space-y-5">
          <div>
            <label className="label-prg" htmlFor="purchase">
              Purchase price ($)
            </label>
            <input
              id="purchase"
              className="input-prg"
              inputMode="decimal"
              placeholder="e.g. 1500000"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                setShow(false);
              }}
            />
          </div>
          <div>
            <label className="label-prg" htmlFor="down">
              Down payment (%)
            </label>
            <select
              id="down"
              className="input-prg"
              value={downPct}
              onChange={(e) => {
                setDownPct(Number(e.target.value));
                setShow(false);
              }}
            >
              {DOWN_OPTIONS.map((d) => (
                <option key={d} value={d}>
                  {d}%
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label-prg" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="input-prg"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setShow(false);
              }}
            >
              <option>Commercial</option>
              <option>Residential</option>
              <option>Business acquisition</option>
            </select>
          </div>
          <button type="button" className="btn-gold" onClick={() => setShow(true)}>
            Calculate
          </button>
        </div>
      </div>

      <div className="border border-border bg-white p-6 md:p-8">
        <h2 className="font-serif text-2xl text-navy">Estimated results</h2>
        {!show || !result ? (
          <p className="mt-6 text-slate">
            Enter your loan details and press Calculate to see the estimate.
          </p>
        ) : (
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-slate">Estimated loan amount</dt>
              <dd className="font-semibold text-navy">
                ${result.loan.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-slate">Down payment</dt>
              <dd className="font-semibold text-navy">
                ${result.down.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </dd>
            </div>
            <div className="flex justify-between border-b border-border pb-3">
              <dt className="text-slate">Illustrative monthly payment</dt>
              <dd className="font-semibold text-navy">
                ${result.payment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </dd>
            </div>
            <div className="flex justify-between pb-1">
              <dt className="text-slate">
                Assumed rate / term ({(result.annualRate * 100).toFixed(1)}% / {result.years} yrs)
              </dt>
              <dd className="font-semibold text-navy">
                ${result.totalPaid.toLocaleString(undefined, { maximumFractionDigits: 0 })} total
              </dd>
            </div>
          </dl>
        )}
        <p className="mt-8 text-xs leading-relaxed text-slate-soft">
          This calculator produces an amortization-style estimate only. It does not include
          SBA guarantee premiums, closing costs, taxes, insurance, or lender fees, and it is
          not a lender quote or commitment. Confirm all figures with your lender before making
          financial decisions.
        </p>
      </div>
    </div>
  );
}
