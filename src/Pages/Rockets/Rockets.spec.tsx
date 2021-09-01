import { shallow } from "enzyme";
import Rockets from "./Rockets";

describe("Rockets Component Tests", () => {
  let container = shallow(<Rockets />);

  it("Should render h1", () => {
    expect(container.find("h1").length).toEqual(1);
  });
});
