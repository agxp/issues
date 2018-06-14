import React from 'react';
import Dropdown from '../components/Dropdown';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

test('Dropdown should render correctly', () => {
    const dropdown = shallow(<Dropdown id="authorDropdown" />);

    expect(dropdown).toMatchSnapshot();
});

test('Dropdown has proper id', () => {
    const dropdown = shallow(<Dropdown id="authorDropdown" />);

    expect(dropdown.find("#authorDropdown").length).toBe(1)
});

test('Dropdown has proper number elements', () => {
    const n = [1, 2, 3];

    const authors = n.map(a => <a key={a}>{a}<br/></a>);
    const dropdown = shallow(<Dropdown id="authorDropdown" data={authors} />);

    expect(dropdown.find(".dropdown-menu a").length).toBe(3)
});