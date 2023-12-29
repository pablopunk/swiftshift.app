"use client";

import { useEffect } from "react";
import { countVisit } from "~/data/goatcounter";

const FILE = "/SwiftShift.zip";

export default function Download() {
  useEffect(() => {
    countVisit(FILE);
    window.open(FILE, "_blank");
    window.history.back();
  });

  return <></>;
}
