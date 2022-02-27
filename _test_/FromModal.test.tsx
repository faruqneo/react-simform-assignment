import * as React from "react";
import { shallow } from "enzyme";

import FromModal from "../src/componets/FromModal";

it("renders the FromModal component", () => {
    const result = shallow(<FromModal />);
    expect(result).toBeTruthy();
});