import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { withMemoryRouterAndRecoil } from "./utils";
import { Route } from "react-router-dom";
import Login from "../../pages/Login";
import { act } from "react-dom/test-utils";

describe("Login Page", () => {
  let emailInput, passwordInput, loginBtn;
  beforeEach(() => {
    render(withMemoryRouterAndRecoil(<Route path="/" element={<Login />} />));

    emailInput = screen.getByLabelText("이메일:");
    passwordInput = screen.getByLabelText("비밀번호:");
    loginBtn = screen.getByRole("button");
  });

  it("should render correctly", () => {
    expect(screen.getByText("로그인")).toBeInTheDocument();
  });

  it("display email validation error message when email is invalid", () => {
    changeInput(emailInput, "emaill");
    changeInput(passwordInput, "password");
    fireEvent.click(loginBtn);
    expect(screen.getByText("로그인에 실패했습니다.")).toBeInTheDocument();
  });

  it("display password validation error message when password is invalid", () => {
    changeInput(emailInput, "emaill");
    changeInput(passwordInput, "1234");
    fireEvent.click(loginBtn);
    expect(
      screen.getByText("비밀번호는 8자 이상이어야 합니다.")
    ).toBeInTheDocument();
  });

  it.skip("navigate to home when login succeeds", () => {
    render(
      withMemoryRouterAndRecoil(
        <>
          <Route path={"/"} element={<p>HOME</p>} />

          <Route path="/login" element={<Login />} />
        </>,
        "/login"
      )
    );

    const emailInput = screen.getByLabelText("이메일:");
    const passwordInput = screen.getByLabelText("비밀번호:");
    const loginBtn = screen.getByText("로그인");
    changeInput(emailInput, "user@example.com");
    changeInput(passwordInput, "password");
    act(() => {
      fireEvent.click(loginBtn);
    });
    expect(screen.getByText("HOME")).toBeInTheDocument();
  });
});

function changeInput(input, value) {
  fireEvent.change(input, { target: { value } });
}
