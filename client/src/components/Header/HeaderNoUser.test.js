import { render, screen, } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

describe("Login component", () => {

    const mockUser = {
        user: false,
    };

    it("renders without crashing", () => {
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






});