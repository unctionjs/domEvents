/* eslint-disable flowtype/require-variable-type */
import domEvents from "./index";

const dom = {
  events (event) {
    return [event];
  },
};

test("works", () => {
  expect(domEvents({})("click")(dom)).toEqual(["click"]);
});
