import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "./Home";
import { describe, expect, it } from "vitest";

function setup(){
    render(<MemoryRouter>
        <Home/>
    </MemoryRouter>);
}

describe("contains homepage components", ()=>{
    it("contains an image and about", ()=>{
        setup();
        expect(screen.getByRole("img", {name: "An illustration of a store front"})).toBeInTheDocument();
        expect(screen.getByRole("paragraph", {name:"about us"})).toBeInTheDocument();
    });

    it("contains a link to shop", ()=>{
        setup();
        const shopLink = screen.getByRole("link", {name: "Shop Now!"});
        expect(shopLink).toBeInTheDocument();
        expect(shopLink.href).toContain("/shop")
    })
})