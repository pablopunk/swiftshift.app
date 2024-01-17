type WindowWithGoatcounter = Window & {
  goatcounter?: {
    count: (options: { path: string }) => void;
  };
};

export const countVisit = (url: string) => {
  console.log("countVisit", url);
  (window as WindowWithGoatcounter).goatcounter?.count({
    path: url,
  });
};
