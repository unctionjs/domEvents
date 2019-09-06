/* eslint-disable flowtype/require-variable-type */
import domEvents from "./index.ts";

const dom = {
  events (event) {
    return [event];
  },
};

test(() => {
  expect(domEvents({})("click")(dom)).toEqual(["click"]);
});
