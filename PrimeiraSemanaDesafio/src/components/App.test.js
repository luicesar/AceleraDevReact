import React from "react";
import { mount, shallow } from "enzyme";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  test("Should be App", () => {
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.exists("App")).toBeTruthy();
  });
});
