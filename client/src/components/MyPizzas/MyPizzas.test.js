import { render, screen } from "@testing-library/react";
import React from 'react'
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { MyPizzas } from "../MyPizzas/MyPizzas";

describe("My pizza component with user", () => {
    const mockRealUser = {
        user: {
            username: "2HEADS",
            email: "pavel@abv.bg",
            _id: "641df93053577da469920391",
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFkZjkzMDUzNTc3ZGE0Njk5MjAzOTEiLCJ1c2VybmFtZSI6IjJIRUFEUyIsImVtYWlsIjoicGF2ZWxAYWJ2LmJnIiwiaWF0IjoxNjgwNTE3NTM3fQ.Mz3v_WBG4cZdW0-zzlnQnJV8K2_hSpnNa3Z3k0Gpw0g"
        }
    }

    it("renders the 'Your precious' heading when user is authenticated ", () => {
        const route = '/my-pizza'
        render(
            <Router>
                <AuthContext.Provider value={mockRealUser}>
                    <MyPizzas />
                </AuthContext.Provider>
            </Router>

        );

        expect(screen.getByTestId('precious')).toBeInTheDocument(route);

    });
});