import React from 'react';
import IssueTable from '../components/IssueTable/IssueTable';
import Issue from '../components/IssueTable/Issue';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

const testIssue =
    {
        "url": "https://api.github.com/repos/cloudflare/cf-ui/issues/21",
        "repository_url": "https://api.github.com/repos/cloudflare/cf-ui",
        "labels_url": "https://api.github.com/repos/cloudflare/cf-ui/issues/21/labels{/name}",
        "comments_url": "https://api.github.com/repos/cloudflare/cf-ui/issues/21/comments",
        "events_url": "https://api.github.com/repos/cloudflare/cf-ui/issues/21/events",
        "html_url": "https://github.com/cloudflare/cf-ui/issues/21",
        "id": 192062081,
        "node_id": "MDU6SXNzdWUxOTIwNjIwODE=",
        "number": 21,
        "title": "Upgrade eslint to 3+",
        "user": {
            "login": "wyuenho",
            "id": 160028,
            "node_id": "MDQ6VXNlcjE2MDAyOA==",
            "avatar_url": "https://avatars1.githubusercontent.com/u/160028?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/wyuenho",
            "html_url": "https://github.com/wyuenho",
            "followers_url": "https://api.github.com/users/wyuenho/followers",
            "following_url": "https://api.github.com/users/wyuenho/following{/other_user}",
            "gists_url": "https://api.github.com/users/wyuenho/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/wyuenho/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/wyuenho/subscriptions",
            "organizations_url": "https://api.github.com/users/wyuenho/orgs",
            "repos_url": "https://api.github.com/users/wyuenho/repos",
            "events_url": "https://api.github.com/users/wyuenho/events{/privacy}",
            "received_events_url": "https://api.github.com/users/wyuenho/received_events",
            "type": "User",
            "site_admin": false
        },
        "labels": [
            {
                "id": 390162616,
                "node_id": "MDU6TGFiZWwzOTAxNjI2MTY=",
                "url": "https://api.github.com/repos/cloudflare/cf-ui/labels/enhancement",
                "name": "enhancement",
                "color": "84b6eb",
                "default": true
            }
        ],
        "state": "closed",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2016-11-28T17:09:46Z",
        "updated_at": "2016-11-30T11:43:35Z",
        "closed_at": "2016-11-30T11:43:35Z",
        "author_association": "CONTRIBUTOR",
        "body": ""
    };



test('IssueTable should render correctly', () => {

    let l = [];
    l.push(testIssue);
    const issuetable = shallow(<IssueTable issueList={l} />);

    expect(issuetable).toMatchSnapshot();
});

test('IssueTable should render an Issue', () => {
    let l = [];
    l.push(testIssue);
    const issuetable = shallow(<IssueTable issueList={l} />);

    expect(issuetable.containsMatchingElement(<Issue />)).toBe(true);
});