import { MemoryRouter } from "react-router";
import Shop from "./Shop";
import { render,screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

function setup(products){
    render(<MemoryRouter>
        <Shop products={products}/>
    </MemoryRouter>);
}

describe("renders shop", ()=>{
    it("displays product titles", ()=>{
        const products = [{id:1, image: null, title: "product1", price: "1.00", rating: {rate: "3"}}, {id: 2, image: null, title: "product2", price: "1.00", rating: {rate: "3"}}]
        setup(products);

        const productTitles = screen.getAllByRole("heading");
        expect(productTitles.length).toBe(2);

        expect(productTitles[0].textContent).toBe("product1");
        expect(productTitles[1].textContent).toBe("product2");
    });
})