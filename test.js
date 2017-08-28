/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import domEvents from "./"

const dom = {
  events (event) {
    return [event]
  },
}

test(({same, end}) => {
  same(
    domEvents({})("click")(dom),
    ["click"]
  )

  end()
})
