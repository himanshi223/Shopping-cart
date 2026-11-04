import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import Card from "./Card";

function setup(){
    const product = {image:null, title:"product", price: "1.20", rating: {rate:3.0}};
    render(<MemoryRouter>
        <Card product={product}/>
    </MemoryRouter>)
};

describe("displays details about the product", ()=>{
    it("renders name, price and rating of the product",()=>{
        setup();
        expect(screen.getByRole("heading").textContent).toEqual("product");
        expect(screen.getByRole("paragraph", {name: "price"}).textContent).toEqual("$1.20");
        expect(screen.getByTestId("rating").textContent).toContain("3/5");
    });

    it("displays image of the product", ()=>{
        setup();
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
        expect(image.alt).toBe("product");
    })
});