import { fireEvent, render, screen } from "@testing-library/react";
import React from 'react'
import { Header } from "./Header";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

describe("Header component with user", () => {

    const mockRealUser = {
        user: {
            username: "2HEADS",
            email: "pavel@abv.bg",
            _id: "641df93053577da469920391",
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFkZjkzMDUzNTc3ZGE0Njk5MjAzOTEiLCJ1c2VybmFtZSI6IjJIRUFEUyIsImVtYWlsIjoicGF2ZWxAYWJ2LmJnIiwiaWF0IjoxNjgwNTE3NTM3fQ.Mz3v_WBG4cZdW0-zzlnQnJV8K2_hSpnNa3Z3k0Gpw0g"
        }
    }


    it("renders greeting test", () => {
        render(
            <Router>
                <AuthContext.Provider value={mockRealUser}>
                    <Header />
                </AuthContext.Provider>
            </Router>
        );

        const userGreeting = screen.getByTestId("userTest");
        expect(userGreeting).toBeInTheDocument();
        expect(userGreeting.textContent).toEqual("Hello 2HEADS");
    });

    it("renders the 'My Repo's' heading when user is authenticated and navigates to /my-pizza route", () => {
        render(
            <Router>
                <AuthContext.Provider value={mockRealUser}>
                    <Header />
                </AuthContext.Provider>
            </Router>

        );
        const myPizzaLink = screen.getByTestId("my-repos");
        fireEvent.click(myPizzaLink);
        expect(window.location.href).toEqual("http://localhost/my-pizza");

    });

});