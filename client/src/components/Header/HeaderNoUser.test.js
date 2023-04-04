import { render, screen, fireEvent, } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

describe("Login component", () => {

    const mockUser = {
        user: false,
    };
    const mockRealUser = {
        username: "PETER",
        email: "peter@abv.bg",
        _id: "randomId",
        accessToken: "randomtoken"
    }
    it("renders without crashing", () => {
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






});