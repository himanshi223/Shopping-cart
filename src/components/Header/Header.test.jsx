import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router";
import Header from "./Header";

function setup(){
    render(<MemoryRouter>
        <Header />
    </MemoryRouter>)
}

describe("renders header correctly",()=>{
    it("renders name of the store", ()=>{
        setup();
        expect(screen.getByRole("heading", {name: "C Hill Store"})).toBeInTheDocument();
    });

    it("renders logo of the store", ()=>{
        setup();
        expect(screen.getByRole("img", {name: "logo"})).toBeInTheDocument();
    });

    it("renders cart icon as a link", ()=>{
        setup();
        expect(screen.getByRole("link", {name: "cart-icon"})).toBeInTheDocument();
    })
})
