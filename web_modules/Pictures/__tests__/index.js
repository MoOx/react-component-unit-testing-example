import tape from "tape"
import addAssertions from "extend-tape"
import jsxEquals from "tape-jsx-equals"
const test = addAssertions(tape, { jsxEquals })

import React from "react"
import { createRenderer } from "react-addons-test-utils"

import Picture from ".."

// fixtures (empty and stateless react components)
const Loader = () => {}
const Title = () => {}

test("PageContainer is properly rendered", (t) => {
  const renderer = createRenderer()

  renderer.render(
    <Picture
      Loader={ Loader }
      Title={ Title }
    />
  )
  t.jsxEquals(
    renderer.getRenderOutput(),
    <div>
      <Loader />
    </div>,
    "can render a Loader component if no image data are passed"
  )

  renderer.render(
    <Picture
      Loader={ Loader }
      Title={ Title }
      img={ {
        src: "SRC",
        alt: "ALT",
      } }
    />
  )
  t.jsxEquals(
    renderer.getRenderOutput(),
    <div>
      <img src="SRC" alt="ALT" />
    </div>,
    "should render an image if data are passed"
  )

  renderer.render(
    <Picture
      Loader={ Loader }
      Title={ Title }
      img={ {
        src: "SRC",
        alt: "ALT",
      } }
      title={ "TITLE" }
    />
  )
  t.jsxEquals(
    renderer.getRenderOutput(),
    <div>
      <img src="SRC" alt="ALT" />
      <Title text="TITLE" />
    </div>,
    "can render a Title if data are passed"
  )

  t.end()
})
