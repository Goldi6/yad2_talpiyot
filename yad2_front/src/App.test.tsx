import React from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import App from "./router/Router";

// 1- Mocking the hook using jest.fn
const mockedUsedNavigate = jest.fn();

// 2- Mock the library
jest.mock("react-router-dom", () => ({

    // 3- Import non-mocked library and use other functionalities and hooks
    ...(jest.requireActual("react-router-dom") as any),

    // 4- Mock the required hook
    useNavigate: () => mockedUsedNavigate
}));

describe("App", () => {
    it("has a button and does navigate to other component", async () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        // Testing navigating using the button
        expect(
            screen.getByText("Post 1 - Using useNavigate hook")
        ).toBeInTheDocument();

        await userEvent.click(screen.getByText("Post 1 - Using useNavigate hook"));
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/post-1');
    });
});