import { shallow } from "enzyme";
import Header from "./Header";

describe("Header Component Tests", () => {
  let container = shallow(<Header />);

  it("Should render div", () => {
    expect(container.find("div").length).toEqual(5);
  });

  it("Should render li", () => {
    expect(container.find("li").length).toEqual(6);
  });
});
