import { onGetSubscriptionPlan } from "@/actions/settings";
import React from "react";
import { Section } from "../section-label";
import { Card, CardContent, CardDescription } from "../ui/card";
import { CheckCircle2, Plus } from "lucide-react";
import { pricingCards } from "@/constants/landing-page";

type Props = {};

export const BillingSettings = async (props: Props) => {
  const plan = await onGetSubscriptionPlan();

  const planFeatures = pricingCards.find(
    (card) => card.title.toUpperCase() === plan
  )?.features;

  if (!planFeatures) return;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <Section
          label="Billing Settings"
          message="Add payment information, upgrade and modify your plan."
        />
      </div>
      <div className="lg:col-span-2 flex justify-center lg:justify-center">
        <Card className="border-dashed bg-cream border-gray-400 w-full cursor-pointer h-[270px] flex justify-center items-center">
          <CardContent className="flex gap-2 items-center">
            <div className="rounded-full border-2 p-1">
              <Plus className="text-gray-400" />
            </div>
            <CardDescription className="font-semibold">
              Upgrade Plan
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
        <h3 className="text-xl font-semibold mb-2">Current Plan</h3>
        <p className="text-sm font-semibold">{plan}</p>
        <div className="flex flex-col gap-2 mt-2">
          {planFeatures.map((feature) => (
            <div key={feature} className="flex gap-4">
              <CheckCircle2 className="text-muted-foreground" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
        {/* <p className="text-sm font-light">
          {plan == "PRO"
            ? "Start growing your business today"
            : plan == "ULTIMATE"
            ? "The ultimate growth plan that sets you up for success"
            : "Perfect if you are just getting started with Corinna AI"}
        </p> */}
      </div>
    </div>
  );
};
