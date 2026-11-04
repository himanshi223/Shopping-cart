import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import Card from "./Card";
import userEvent from "@testing-library/user-event";

const addItemToCart = vi.fn();

function setup(){
    const product = {image:null, title:"product", price: "1.20", rating: {rate:3.0}};
    render(<MemoryRouter>
        <Card product={product} addItemToCart={addItemToCart}/>
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
    });
});

describe("Add to cart functionality", ()=>{
    it("contains input to enter quantity", ()=>{
        setup();
        expect(screen.getByRole("spinbutton")).toBeInTheDocument();
    })

    it("contains buttons to increase decrease quantity", async()=>{
        const user = userEvent.setup();
        setup();

        const input = screen.getByRole("spinbutton");
        const increase = screen.getByRole("button", {name: "increase"});
        const decrease = screen.getByRole("button", {name: "decrease"})

        expect(increase).toBeInTheDocument();
        expect(decrease).toBeInTheDocument();
        
        
        await user.click(increase);
        expect(input.value).toBe("2");


        await user.click(decrease);
        expect(input.value).toBe("1");
    }) 

    it("contains a button to add to cart", async()=>{
        const user = userEvent.setup();
        setup();
        const button = screen.getByRole("button", {name: "Add to Cart"});
        expect(button).toBeInTheDocument();

        await user.click(button);
        
        expect(addItemToCart).toHaveBeenCalledOnce();
    })
})