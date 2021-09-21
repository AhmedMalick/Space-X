import { shallow } from "enzyme";
import Home from "./Home";

describe("Home Component Tests", () => {
  let container = shallow(<Home />);

  it("Should render div", () => {
    expect(container.find("div").length).toEqual(11);
  });

  it("Should render section", () => {
    expect(container.find("section").length).toEqual(4);
  });

  it("Should render Link", () => {
    expect(container.find("Link").length).toEqual(4);
  });

  it("Should render video", () => {
    expect(container.find("video").length).toEqual(1);
  });
});
