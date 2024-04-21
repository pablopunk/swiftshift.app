"use client";

import site from "~/site";
import { FaGithub } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import { countVisit } from "~/data/goatcounter";
import classNames from "classnames";

export default function Home() {
  return (
    <section className="max-w-screen-lg mx-auto flex flex-col">
      <div className="flex items-center justify-center">
        {["light", "dark"].map((theme) => (
          <img
            key={theme}
            src={`/header-${theme}.png`}
            alt="Header"
            width="400px"
            className={theme === "light" ? "dark:hidden" : "hidden dark:block"}
          />
        ))}
      </div>
      <div className="-mt-10 lg:mt-0 flex flex-col lg:flex-row gap-6 items-center border-b border-neutral-3 lg:border-none py-12">
        {["light", "dark"].map((theme) => (
          <video
            key={theme}
            className={classNames(
              "w-full rounded-md max-w-sm lg:max-w-lg",
              theme === "light" ? "dark:hidden" : "hidden dark:block",
            )}
            autoPlay
            loop
            muted
            playsInline
            poster="/placeholder.jpg"
          >
            <source src={`/demo-${theme}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
        <div className="flex flex-col gap-4 items-center justify-between lg:items-start">
          <h1 className="text-4xl font-bold">Swift Shift</h1>
          <h2 className="text-2xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue to-pink">
            Manage your macOS windows like a pro
          </h2>
          <p className="text-lg max-w-lg text-center lg:text-left">
            {site.SITE_DESC}
          </p>
          <div className="flex flex-col lg:flex-row gap-3">
            <a
              href="https://pablopunk.lemonsqueezy.com/checkout/buy/3f0a94d5-c49d-4d40-b847-dae2388f60f4"
              onClick={() => countVisit("/buy")}
              className="flex gap-2 items-center justify-center bg-gradient-to-r cursor-pointer rounded-md text-lg font-bold py-2 px-4 transition-all hover:scale-105 shadow-md text-neutral-3 from-pink to-blue hover:to-pink lemonsqueezy-button"
            >
              <MdDownloading />
              <span>Pay what you want</span>
            </a>
            <a
              href="https://github.com/pablopunk/SwiftShift"
              className="flex gap-2 items-center justify-center bg-gradient-to-r cursor-pointer rounded-md text-lg font-bold py-2 px-4 transition-all hover:scale-105 shadow-md border dark:border-neutral-7 dark:bg-gradient-to-l dark:from-neutral-1 dark:to-neutral-3 text-neutral-8 hover:text-blue hover:border-blue hover:to-neutral-5"
            >
              <FaGithub />
              <span>Download for free</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between border-b border-neutral-3 lg:border-none py-12">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-2xl font-bold">Launch once and forget.</h3>
          <p className="text-lg text-center max-w-sm">
            Swift Shift runs in the background, setup your shortcuts and go on
            with your day.
          </p>
          {["Want to launch at login?", "Want to hide the menubar icon?"].map(
            (question) => (
              <p
                key={question}
                className="text-md text-center max-w-sm flex gap-1 font-bold"
              >
                {question}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue to-pink">
                  No problem
                </span>
              </p>
            ),
          )}
        </div>
        {["light", "dark"].map((theme) => (
          <img
            key={theme}
            src={`/screenshot-${theme}.jpg`}
            alt="Screenshot"
            className={`max-w-xs lg:max-w-lg rounded-md ${
              theme === "light" ? "dark:hidden" : "hidden dark:block"
            }`}
          />
        ))}
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-6 items-center justify-between py-12">
        <div className="text-5xl font-bold flex flex-col items-center justify-center rounded-md bg-clip-text text-transparent bg-gradient-to-t from-blue to-pink w-full max-w-lg lg:w-[512px] h-44 lg:h-[307px] border border-dashed border-blue">
          <p>🩵</p>
          <p>Open</p>
          <p>Source</p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-2xl font-bold">Free as in freedom.</h3>
          <p className="text-lg text-center max-w-lg">
            I made this project cause it{"'"}s something I always wanted to
            have.
            <b> I had no idea about Swift and macOS APIs</b>, I learned most of
            it using ChatGPT and looking at other open source projects.
          </p>
          <p className="text-lg text-center max-w-lg text-blue dark:text-pink">
            Feel free to checkout the <b>code</b>, open an <b>issue</b>, or
            contribute with a <b>PR</b>.
          </p>
          <a
            href="https://github.com/pablopunk/SwiftShift"
            className="flex gap-2 items-center justify-center bg-gradient-to-r cursor-pointer rounded-md text-lg font-bold py-2 px-4 transition-all hover:scale-105 shadow-md text-neutral-3 from-pink to-blue hover:to-pink"
          >
            <FaGithub />
            <span>Open Github</span>
          </a>
        </div>
      </div>
    </section>
  );
}
