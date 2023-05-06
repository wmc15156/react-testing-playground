// import { render, screen } from "@testing-library/react";
// import Counter from "../Counter";
// import renderer from "react-test-renderer";
// import { act } from "react-dom/test-utils";
// import userEvent from "@testing-library/user-event";
// describe("Counter", () => {
//   it("render correctly", () => {
//     const component = renderer.create(<Counter />);
//     expect(component.toJSON()).toMatchSnapshot();
//   });
//
//   it("increment count when the increment button is Clicked", () => {
//     render(<Counter />);
//     const button = screen.getByText("+");
//
//     act(() => userEvent.click(button));
//
//     expect(screen.getByText("1")).toBeInTheDocument();
//   });
// });
import Counter from "../Counter";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it("render correctly", () => {
    renderCounter();
    expect(screen.getByText("Counter")).toBeInTheDocument();
  });

  it("increment count when the increment button is Clicked", () => {
    renderCounter();

    // userEvent, fireEvent

    // 랜더링을 했으니깐 버튼을 찾아야됨
    const button = screen.getByText("+");

    // act함수를 사용하면 컴포넌트의 상태나 프러퍼티 변경으로 인해 발생하는 이벤트들을 순차적으로 처리함.
    // userEvent는 비동적으로 Dom 이벤트 트리거함
    // 간단한 DOM 이벤트를 트리거 할꺼면 fireEvent
    // 실제 사용자가 이벤트를 발생시키는 것과 유사한 방법으로 할려면 userEvent
    fireEvent.click(button);

    // act(() => {
    //   userEvent.click(button);
    // });

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("decrement count when decrement button is clicked", () => {
    renderCounter();

    const button = screen.getByText("-");
    fireEvent.click(button);

    expect(screen.getByText(-1)).toBeInTheDocument();
  });
});

function renderCounter() {
  return render(<Counter />);
}
