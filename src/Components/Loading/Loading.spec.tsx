import { shallow } from "enzyme";
import Loading from "./Loading";

describe("Loading Component Tests", () => {
  let container = shallow(<Loading />);

  it("Should render div", () => {
    expect(container.find("div").length).toEqual(1);
  });
});
