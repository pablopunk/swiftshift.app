"use client";

import { useEffect } from "react";
import { countVisit } from "~/data/goatcounter";

const FILE = "/Swift Shift.zip";

export default function Download() {
  useEffect(() => {
    countVisit("/download");
    window.open(FILE, "_blank");
    window.history.back();
  });

  return <></>;
}
