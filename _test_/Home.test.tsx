import * as React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureMockStore([sagaMiddleware]);
const store = mockStore({});

import Home from "../src/componets/Home";

it("renders the Home component", () => {
    const result = shallow(<Provider store={store}><Home /></Provider>);
    expect(result.find('.fromHear')).toBeTruthy();
});