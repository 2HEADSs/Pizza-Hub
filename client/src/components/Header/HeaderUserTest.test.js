import { render, screen, } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

describe("Login component", () => {

    const mockRealUser = {
        user: {
            username: "2HEADS",
            email: "pavel@abv.bg",
            _id: "641df93053577da469920391",
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDFkZjkzMDUzNTc3ZGE0Njk5MjAzOTEiLCJ1c2VybmFtZSI6IjJIRUFEUyIsImVtYWlsIjoicGF2ZWxAYWJ2LmJnIiwiaWF0IjoxNjgwNTE3NTM3fQ.Mz3v_WBG4cZdW0-zzlnQnJV8K2_hSpnNa3Z3k0Gpw0g"
        }
    }

    it("renders header component", () => {
        render(
            <Router>
                <AuthContext.Provider value={mockRealUser}>
                    <Header />
                </AuthContext.Provider>
            </Router>
        );

        const logo = screen.getByTestId("logoTest");
        expect(logo).toBeInTheDocument();
    });

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
});