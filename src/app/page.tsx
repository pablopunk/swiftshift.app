import classNames from "classnames";
import site from "~/site";
import { TbDownload } from "react-icons/tb";

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
          poster="/placeholder.png"
        >
          <source src="/demo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="text-3xl font-bold max-w-md text-center">
        <div className="p-4">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue to-pink">
            Manage your macOS windows like a pro
          </h1>
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
      <a
        href="/Swift Shift 0.1.0.zip"
        className="flex gap-2 items-center bg-gradient-to-r from-blue to-pink cursor-pointer mt-4 rounded-md text-neutral-1 text-2xl font-bold py-2 px-4 transition-all hover:to-blue hover:scale-110"
      >
        <TbDownload />
        <span>Download</span>
      </a>
    </section>
  );
}
