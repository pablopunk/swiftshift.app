"use client";

import classNames from "classnames";
import site from "~/site";
import { FaGithub } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import { countVisit } from "~/data/goatcounter";

export default function Home() {
  return (
    <section className="w-full flex flex-col items-center">
      <img
        src="/header-light.png"
        width="400px"
        className="-mt-8 dark:hidden"
      />
      <img
        src="/header-dark.png"
        width="400px"
        className="-mt-8 hidden dark:block"
      />
      <div className="max-w-screen-md -mt-4">
        <video
          className="w-full rounded-md"
          autoPlay
          loop
          muted
          playsInline
          poster="/placeholder.jpg"
        >
          <source src="/demo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="mt-3">
        <h1 className="text-xl text-neutral-400 font-bold">⌘ Swift Shift ⌥</h1>
      </div>
      <div className="text-3xl font-bold max-w-screen-lg text-center">
        <div className="mt-2 mb-3">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-blue to-pink">
            Manage your macOS windows like a pro
          </h2>
        </div>
      </div>
      {site.SITE_DESC.split(". ").map((line, i) => {
        const Heading = "h" + (i + 2);
        return (
          // @ts-expect-error this hack produces a type error
          <Heading
            key={line}
            className={classNames("text-center", {
              "text-sm": i !== 0,
              "opacity-70": i !== 0,
            })}
          >
            {line}.
          </Heading>
        );
      })}
      <div className="flex flex-col md:flex-row gap-3">
        {[
          {
            text: "Buy",
            icon: <MdDownloading />,
            className: "lemonsqueezy-button",
            href: "https://pablopunk.lemonsqueezy.com/checkout/buy/3f0a94d5-c49d-4d40-b847-dae2388f60f4",
            onClick: () => countVisit("/buy"),
          },
          {
            text: "Github",
            href: "https://github.com/pablopunk/SwiftShift",
            icon: <FaGithub />,
          },
        ].map(({ text, href, className, onClick, icon }, index) => {
          const LinkOrButton = href ? "a" : "button";
          return (
            <LinkOrButton
              key={text}
              href={href || undefined}
              onClick={onClick || undefined}
              className={classNames(
                className,
                "flex gap-2 items-center justify-center bg-gradient-to-r cursor-pointer mt-4 rounded-md text-xl font-bold py-2 px-4 transition-all hover:scale-105 shadow-md",
                {
                  // "opacity-50": disabled,
                  // "pointer-events-none": disabled,
                  "text-neutral-3 bg-gradient-to-r from-pink to-blue hover:to-pink":
                    index % 2 === 0,
                  "border dark:border-neutral-7 dark:bg-gradient-to-l dark:from-neutral-1 dark:to-neutral-3 text-neutral-8 hover:text-blue hover:border-blue hover:to-neutral-5":
                    index % 2 !== 0,
                },
              )}
            >
              {icon}
              <span>{text}</span>
            </LinkOrButton>
          );
        })}
      </div>
      <div className="text-sm mt-8 md:mt-4 bg-teal-500 dark:bg-teal-700 text-neutral-3 dark:text-neutral-8 px-2 rounded-full">
        $ Pay what you want
      </div>
    </section>
  );
}
