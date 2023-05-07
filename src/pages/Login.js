import validator from "validator";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../recoil/atoms";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginError, setIsLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
      return "유효한 이메일 주소가 아닙니다.";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!validator.isLength(password, { min: 8 })) {
      return "비밀번호는 8자 이상이어야 합니다.";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // 이메일과 비밀번호가 유효하지 않은 경우 에러 메시지를 표시합니다.
    if (emailError || passwordError) {
      setIsLoginError(true);
      return;
    }

    // 이 부분에서 로그인 로직을 구현합니다.
    // 여기서는 간단하게 이메일과 패스워드가 일치하는 경우에만 로그인이 성공한 것으로 처리합니다.
    console.log("=======");

    if (email === "user@example.com" && password === "password") {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setIsLoginError(true);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {isLoginError && <div>로그인에 실패했습니다.</div>}
      <label htmlFor="email">이메일:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <div>{emailError}</div>}
      <br />
      <label htmlFor="password">비밀번호:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      {passwordError && <div>{passwordError}</div>}
      <br />
      <button type="submit">로그인</button>
    </form>
  );
}
