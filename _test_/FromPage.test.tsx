import * as React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureMockStore([sagaMiddleware]);
const store = mockStore({});

import FromPage from "../src/componets/FromPage";

it("renders the FromPage component", () => {
    const result = shallow(<Provider store={store}><FromPage /></Provider>);
    expect(result).toBeTruthy();
});