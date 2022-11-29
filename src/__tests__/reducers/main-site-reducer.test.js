import mainSiteReducer from "../../reducers/main-site-reducer";

describe('mainSiteReducer', () => {
  test('Should return default state if there is no action type passed into reducer', () => {
    expect(mainSiteReducer({}, { type: null})).toEqual({});
  });
})