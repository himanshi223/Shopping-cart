import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "../../routes";
import { render,screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";

function setup(){
    const router = createMemoryRouter(routes);
    render(<RouterProvider router={router}/>)
}

describe("navigation works correctly", ()=>{
    it("has a link to home page",async()=>{
        setup();
        
        const homeLink = screen.getByRole("link", {name: "Home"});
        expect(homeLink).toBeInTheDocument();
        expect(homeLink.href).toContain("/home");
        
        const user = userEvent.setup();
        await user.click(homeLink);

        expect(window.location.pathname).toBe("/home");
    });

    it("has a link to shop page",async()=>{
        setup();
        const shopLink = screen.getByRole("link", {name: "Shop"})
        expect(shopLink).toBeInTheDocument();
        expect(shopLink.href).toContain("/shop");

        const user = userEvent.setup();
        await user.click(shopLink);

        expect(window.location.pathname).toBe("/shop");
    });

    it("has a link to cart page",async()=>{
        setup();
        const cartLink = screen.getByRole("link", {name: "Cart"})
        expect(cartLink).toBeInTheDocument();
        expect(cartLink.href).toContain("/cart");

        const user = userEvent.setup();
        await user.click(cartLink);

        expect(window.location.pathname).toBe("/cart");
    });
})

