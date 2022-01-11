import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import("@single-spa/welcome"),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@ms/react-single",
  app: () => System.import("@ms/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@ms/react-multiples",
  app: () => System.import("@ms/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@ms/react-lazy",
  app: () => System.import("@ms/react-lazy"),
  activeWhen: ["/react-lazy"],
});

registerApplication({
  name: "@ms/react-route",
  app: () => System.import("@ms/react-route"),
  activeWhen: (location) => location.pathname === "/react-route",
});

registerApplication({
  name: "@ms/react-header",
  app: () => System.import("@ms/react-header"),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@ms/navbar",
//   app: () => System.import("@ms/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
