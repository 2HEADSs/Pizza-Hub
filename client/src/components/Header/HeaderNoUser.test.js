import { render, screen, } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

describe("Header component without user", () => {

    const mockUser = {
        user: false,
    };

    it("render header component", () => {
        render(
            <Router>
                <AuthContext.Provider value={mockUser}>
                    <Header />
                </AuthContext.Provider>
            </Router>
        );

        const logo = screen.getByTestId("logoTest");
        expect(logo).toBeInTheDocument();
    });
    
    it("redirects to login when user is not authenticated", () => {
        render(
            <AuthContext.Provider value={mockUser}>
                <MemoryRouter initialEntries={["/my-pizza"]}>
                    <Header />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.queryByText("Your precious")).not.toBeInTheDocument();
        expect(screen.getByText("Login")).toBeInTheDocument();
    });

});