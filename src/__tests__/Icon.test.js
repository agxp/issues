import React from 'react';
import Icon from '../components/IssueTable/Icon';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

test('Icon should render correctly', () => {
    const icon = shallow(<Icon open={true}/>);

    expect(icon).toMatchSnapshot();
});

test('Icon for open issues is open', () => {
    // Render a checkbox with label in the document
    const icon = shallow(<Icon open={true} />);

    expect(icon.find('svg').hasClass('issue-open')).toBe(true)
});

test('Icon for closed issues is closed', () => {
    // Render a checkbox with label in the document
    const icon = shallow(<Icon open={false} />);

    expect(icon.find('svg').hasClass('issue-closed')).toBe(true)
});