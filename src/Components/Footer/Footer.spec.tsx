import { shallow } from "enzyme";
import Footer from './Footer'

describe("Footer Component Tests", () => {
  let container = shallow(<Footer />)

  it("Should render div", () => {
    expect(container.find("div").length).toEqual(2);
  });

  it("Should render li", () => {
    expect(container.find("li").length).toEqual(7);
  });
});