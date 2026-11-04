
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "./routes";

function setup(){
  const router = createMemoryRouter(routes);
  render(<RouterProvider router={router}/>);
}

describe("App component", () => {
  it("renders header", () => {
    setup();
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders navbar", () => {
    setup();
    const navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();
  });

  it("renders homepage", ()=>{
    setup();
    const homepage = screen.getByRole("main",{name:"home"});
    expect(homepage).toBeInTheDocument();
  })

});
