"use client";

import Link from "next/link";
import { useEffect } from "react";
import { countVisit } from "~/data/goatcounter";

const FILE =
  "https://github.com/pablopunk/SwiftShift/releases/latest/download/SwiftShift.zip";

export default function Download() {
  useEffect(() => {
    countVisit("/download");
    window.open(FILE, "_blank");
  });

  return (
    <>
      <section className="flex flex-col gap-3 items-center">
        <p className="italic">Download should start soon...</p>
        <p className="flex gap-2">
          <Link
            className="bg-neutral-3 font-bold px-3 py-2 rounded-md hover:bg-neutral-4 transition hover:scale-110"
            href="/"
          >
            Go back
          </Link>
          <button
            className="bg-gradient-to-r from-pink to-blue font-bold px-3 py-2 rounded-md hover:scale-110 transition hover:to-pink text-neutral-1"
            onClick={() => window.open(FILE, "_blank")}
          >
            Try again
          </button>
        </p>
      </section>
    </>
  );
}
