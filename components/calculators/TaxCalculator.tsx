"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";
import Disclaimer from "@/components/ui/Disclaimer";
import {
  calculateDemoTax,
  TaxCalculatorResult,
} from "@/lib/taxCalculator";
import { fetchDemoTax, TaxApiError } from "@/lib/taxApiClient";

type FormValues = {
  annualRevenue: string;
  businessType: string;
  location: "mainland" | "freezone" | "";
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  annualRevenue: "",
  businessType: "",
  location: "",
};

const BUSINESS_TYPES = [
  "Sole Proprietorship",
  "Partnership",
  "LLC",
  "Other",
];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.annualRevenue.trim()) {
    errors.annualRevenue = "Please enter annual revenue.";
  } else {
    const revenue = Number(values.annualRevenue);
    if (!Number.isFinite(revenue) || revenue <= 0) {
      errors.annualRevenue = "Please enter a valid positive number.";
    }
  }

  if (!values.businessType) {
    errors.businessType = "Please select a business type.";
  }

  if (!values.location) {
    errors.location = "Please select Mainland or Free Zone.";
  }

  return errors;
}

export default function TaxCalculator() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [result, setResult] = useState<TaxCalculatorResult | null>(null);
  const [apiNotice, setApiNotice] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange<K extends keyof FormValues>(
    field: K,
    value: FormValues[K]
  ) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const input = {
        annualRevenue: Number(values.annualRevenue),
        businessType: values.businessType,
        location: values.location as "mainland" | "freezone",
      };

      setIsSubmitting(true);
      setApiNotice(null);

      try {
        const apiResult = await fetchDemoTax(input);
        setResult(apiResult);
      } catch (error) {
        setApiNotice(
          error instanceof TaxApiError
            ? error.message
            : "Could not reach the demo tax service. Showing a local demo result instead."
        );
        setResult(calculateDemoTax(input));
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  function handleReset() {
    setValues(initialValues);
    setErrors({});
    setResult(null);
    setApiNotice(null);
  }

  return (
    <div className="space-y-6">
      <form noValidate onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="annualRevenue"
            className="block text-sm font-medium text-foreground"
          >
            Annual Revenue (AED)
          </label>
          <input
            id="annualRevenue"
            type="number"
            value={values.annualRevenue}
            onChange={(e) => handleChange("annualRevenue", e.target.value)}
            className="mt-1 w-full rounded-md border border-border-color px-3 py-2 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
            aria-invalid={Boolean(errors.annualRevenue)}
            aria-describedby={
              errors.annualRevenue ? "annualRevenue-error" : undefined
            }
          />
          {errors.annualRevenue && (
            <p id="annualRevenue-error" className="mt-1 text-xs text-brand-red">
              {errors.annualRevenue}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="businessType"
            className="block text-sm font-medium text-foreground"
          >
            Business Type
          </label>
          <select
            id="businessType"
            value={values.businessType}
            onChange={(e) => handleChange("businessType", e.target.value)}
            className="mt-1 w-full rounded-md border border-border-color px-3 py-2 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
            aria-invalid={Boolean(errors.businessType)}
            aria-describedby={
              errors.businessType ? "businessType-error" : undefined
            }
          >
            <option value="">Select a business type</option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.businessType && (
            <p id="businessType-error" className="mt-1 text-xs text-brand-red">
              {errors.businessType}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-foreground"
          >
            Mainland / Free Zone
          </label>
          <select
            id="location"
            value={values.location}
            onChange={(e) =>
              handleChange(
                "location",
                e.target.value as FormValues["location"]
              )
            }
            className="mt-1 w-full rounded-md border border-border-color px-3 py-2 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "location-error" : undefined}
          >
            <option value="">Select Mainland or Free Zone</option>
            <option value="mainland">Mainland</option>
            <option value="freezone">Free Zone</option>
          </select>
          {errors.location && (
            <p id="location-error" className="mt-1 text-xs text-brand-red">
              {errors.location}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Calculating..." : "Calculate"}
        </Button>
      </form>

      {result && (
        <div className="space-y-4">
          {apiNotice && (
            <p className="rounded-md border border-brand-orange bg-orange-50 px-3 py-2 text-xs text-foreground">
              {apiNotice}
            </p>
          )}
          <div className="rounded-xl border border-border-color bg-white p-6">
            <h3 className="text-base font-semibold text-foreground">
              Demo Calculation
            </h3>
            <dl className="mt-4 space-y-2 text-sm leading-6 text-muted-text">
              <div className="flex justify-between gap-4">
                <dt>Annual Revenue</dt>
                <dd className="text-foreground">
                  AED {result.annualRevenue.toLocaleString()}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Business Type</dt>
                <dd className="text-foreground">{result.businessType}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Location</dt>
                <dd className="text-foreground">
                  {result.location === "mainland" ? "Mainland" : "Free Zone"}
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-sm leading-6 text-muted-text">
              {result.note}
            </p>
            <Button
              type="button"
              variant="secondary"
              className="mt-6"
              onClick={handleReset}
            >
              Calculate again
            </Button>
          </div>

          <Disclaimer title="Demo / Indicative Disclaimer">
            This is a demo/indicative calculator only. It does not calculate
            actual UAE tax liability or represent official UAE tax rules.
            Consult a qualified tax professional for actual tax calculations.
          </Disclaimer>
        </div>
      )}
    </div>
  );
}
