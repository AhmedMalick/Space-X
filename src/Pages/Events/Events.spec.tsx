import { shallow } from "enzyme";
import Events from "./Events";

describe("Events Component Tests", () => {
  let container = shallow(<Events />);

  it("Should render h1", () => {
    expect(container.find("h1").length).toEqual(1);
  });
});
