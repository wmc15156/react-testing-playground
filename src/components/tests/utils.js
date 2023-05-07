import { MemoryRouter, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

export function withMemoryRouter(routes, initialEntry = "/") {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
}
export function withMemoryRouterAndRecoil(routes, initialEntry = "/") {
  console.log(initialEntry, "init");
  return (
    <RecoilRoot>
      <MemoryRouter initialEntries={[initialEntry]}>
        <Routes>{routes}</Routes>
      </MemoryRouter>
    </RecoilRoot>
  );
}
