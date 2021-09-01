import { shallow } from "enzyme";
import LaunchDetails from "./LaunchDetails";

describe("LaunchDetails Component Tests", () => {
  let container = shallow(<LaunchDetails />);

  it("Should render h1", () => {
    expect(container.find("h1").length).toEqual(1);
  });
});
