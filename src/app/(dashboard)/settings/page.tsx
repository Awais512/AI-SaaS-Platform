import InfoBar from "@/components/infobar";
import { BillingSettings } from "@/components/settings/billing-settings";
import { DarkModeToggle } from "@/components/settings/dark-mode-toggle";
import React from "react";

const SettingsPage = () => {
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <BillingSettings />
        <DarkModeToggle />
      </div>
    </>
  );
};

export default SettingsPage;
