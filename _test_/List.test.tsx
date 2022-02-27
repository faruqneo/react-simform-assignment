import * as React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureMockStore([sagaMiddleware]);
const store = mockStore({});

import List from "../src/componets/List";

it("renders the List component", () => {
    const result = shallow(<Provider store={store}><List /></Provider>);
    expect(result).toBeTruthy();
});