import {ROUTE_TO} from "../events.js";
export function routeLink(ctx, routeID, routeParams, attribs, body) {
  return [
    "a",
    {
      ...attribs,
      onclick: (e) => {
        e.preventDefault();
        ctx.bus.dispatch([ROUTE_TO, [routeID, routeParams]]);
      }
    },
    body
  ];
}
