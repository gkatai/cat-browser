import React from "react";

import { render, screen } from "../../../test/test-utils";
import Grid from "./Grid";

describe("Grid", () => {
  it("should render", () => {
    render(<Grid count={5} />);
  });

  it("should show loader while fetching", async () => {
    render(<Grid count={5} />);

    await screen.findByRole("grid-metadata-loader");
  });

  it("should show images when fetch is successful", async () => {
    render(<Grid count={5} />);

    const images = await screen.findAllByAltText(/cat-image/);
    expect(images.length).toBe(5);
  });
});
