import renderer from "react-test-renderer";
import SearchHeader from "../SearchHeader";
import { withMemoryRouter } from "./utils";
import { Route } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Search Header", () => {
  it("renders snapshot", () => {
    const searchHeader = renderer
      .create(withMemoryRouter(<Route path="/" element={<SearchHeader />} />))
      .toJSON();

    expect(searchHeader).toMatchSnapshot();
  });

  it("url로 접속했을때 정상적으로 입력창에 keyword가 들어가는지 확인", () => {
    // given
    render(
      withMemoryRouter(
        <Route path="/:keyword" element={<SearchHeader />} />,
        "/shoes"
      )
    );

    expect(screen.getByDisplayValue("shoes")).toBeInTheDocument();
  });

  it("인풋 버튼을 클릭했을때 products 페이지로 정상적으로 이동", () => {
    const fakeSearch = "shoes";

    render(
      withMemoryRouter(
        <>
          <Route path="/" element={<SearchHeader />} />,
          <Route
            path={`/products/:keyword`}
            element={<span data-testid="search-result" />}
          />
        </>
      )
    );

    const searchBtn = screen.getByRole("button");
    const searchInput = screen.getByRole("textbox");

    fireEvent.change(searchInput, { target: { value: fakeSearch } });
    fireEvent.click(searchBtn);

    expect(screen.getByTestId("search-result")).toBeInTheDocument();
  });
});
