// import React from 'react';
// import { mount } from 'enzyme';
// import { MemoryRouter } from 'react-router-dom'
// import RecipeItem from './RecipeItem';

// describe('RecipeItem', () => {
//     test('Should be RecipeItem', () => {
//         const wrapper = mount(
//             <MemoryRouter>
//                 <RecipeItem />
//             </MemoryRouter>
//         );
//         expect(wrapper.exists('RecipeItem')).toBeTruthy();
//     })
// })

import React from "react";
import { mount, shallow } from "enzyme";
import RecipeItem from "./RecipeItem";

// Add more tests here
describe("<RecipeItem/>", () => {
  it("should be render the <RecipeItem /> component without breaking", () => {
    const searchResults = {
      results: [
        {
          indice: 5,
          title: "Chocolate-Cherry Thumbprints",
          href:
            "http://allrecipes.com/Recipe/Chocolate-Cherry-Thumbprints/Detail.aspx",
          ingredients:
            "cocoa powder, baking powder, butter, eggs, flour, oats, salt, sugar, vanilla extract",
          thumbnail: "http://img.recipepuppy.com/6.jpg"
        }
      ]
    };
    const searchString = "pork";

    const wrapper = mount(
      <RecipeItem
        searchResults={searchResults.results}
        searchString={searchString}
      />
    );
    expect(wrapper.is("RecipeItem")).toBeTruthy();
    wrapper.unmount();
  });

  test("Should be RecipeItem", () => {
    const wrapper = shallow(<RecipeItem />);
    expect(wrapper.length).toEqual(1);
  });
});
