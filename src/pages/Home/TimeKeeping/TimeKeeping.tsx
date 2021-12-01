import MainLayout from "@/components/Layout/Layout";
import classes from "./TimeKeepingForm.module.scss";
import TimeKeepingForm from "./TimeKeepingForm/TimeKeepingForm";
import { useState, useEffect } from "react";
import GeoLocation from "@/components/GetLocation/GetLocation";
import GetLocationFC from "@/components/GetLocation/getLocationFC";

export default function TimeKeeping() {
  return (
    <MainLayout>
      <TimeKeepingForm />
      <GeoLocation />
      <GetLocationFC />
    </MainLayout>
  );
}
