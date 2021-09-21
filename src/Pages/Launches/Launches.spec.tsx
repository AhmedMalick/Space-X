import { shallow } from "enzyme";
import Launches from "./Launches";

describe("Launches Component Tests", () => {
  let container = shallow(<Launches />);

  it("Should render h1", () => {
    expect(container.find("h1").length).toEqual(1);
  });
});
