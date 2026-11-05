import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Cart from "./Cart";
import { describe, expect, it, vi} from "vitest";
import userEvent from "@testing-library/user-event";

const increaseQuantity = vi.fn();
const decreaseQuantity = vi.fn();
function setup(){
    const items = [{product: {title: "product", price: "1.00", image: null, quantity: 1}}]
    render(<MemoryRouter>
        <Cart items = {items} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
    </MemoryRouter>)
}

describe("cart functionality",()=>{
    it("displays card for each item in the cart", ()=>{
        setup();

        const cards = screen.getAllByRole("heading", {name: "product"});

        expect(cards.length).toBe(1);
    });

    it("displays image, title, price and quantity for each item", ()=>{
        setup();
        expect(screen.getByRole("img", {name: "product"})).toBeInTheDocument();
        expect(screen.getByRole("heading", {name: "product"})).toBeInTheDocument();
        expect(screen.getByRole("paragraph", {name: "price"})).toBeInTheDocument();
        expect(screen.getByRole("paragraph", {name: "quantity"})).toBeInTheDocument()
    });

    it("displays total cost per item and grand total", ()=>{
        setup();
        expect(screen.getByRole("paragraph", {name: "Total"})).toBeInTheDocument();
        expect(screen.getByRole("paragraph", {name: "Grand Total"})).toBeInTheDocument();

    })

    it("contains buttons to increase decrease quantity", async()=>{
        setup();
        const user = userEvent.setup();
        const increaseButton = screen.getByRole("button", {name: "increase"});
        const decreaseButton = screen.getByRole("button", {name: "decrease"});

        await user.click(increaseButton);
        expect(increaseQuantity).toHaveBeenCalled();


        await user.click(decreaseButton);
        expect(decreaseQuantity).toHaveBeenCalled();
    });
})