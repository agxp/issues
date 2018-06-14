import React from 'react';
import IssueTable from '../components/IssueTable/IssueTable';
import Issue from '../components/IssueTable/Issue';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

const testIssue1 =
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
        "comments": 5,
        "created_at": "2016-11-28T17:09:46Z",
        "updated_at": "2016-11-30T11:43:35Z",
        "closed_at": "2016-11-30T11:43:35Z",
        "author_association": "CONTRIBUTOR",
        "body": ""
    }

const testIssue2 = 
 {
    "url": "https://api.github.com/repos/cloudflare/cloudflare-go/issues/187",
    "repository_url": "https://api.github.com/repos/cloudflare/cloudflare-go",
    "labels_url": "https://api.github.com/repos/cloudflare/cloudflare-go/issues/187/labels{/name}",
    "comments_url": "https://api.github.com/repos/cloudflare/cloudflare-go/issues/187/comments",
    "events_url": "https://api.github.com/repos/cloudflare/cloudflare-go/issues/187/events",
    "html_url": "https://github.com/cloudflare/cloudflare-go/issues/187",
    "id": 330910489,
    "node_id": "MDU6SXNzdWUzMzA5MTA0ODk=",
    "number": 187,
    "title": "Implement Workers endpoints ",
    "user": {
      "login": "Sjeanpierre",
      "id": 673382,
      "node_id": "MDQ6VXNlcjY3MzM4Mg==",
      "avatar_url": "https://avatars2.githubusercontent.com/u/673382?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Sjeanpierre",
      "html_url": "https://github.com/Sjeanpierre",
      "followers_url": "https://api.github.com/users/Sjeanpierre/followers",
      "following_url": "https://api.github.com/users/Sjeanpierre/following{/other_user}",
      "gists_url": "https://api.github.com/users/Sjeanpierre/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Sjeanpierre/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Sjeanpierre/subscriptions",
      "organizations_url": "https://api.github.com/users/Sjeanpierre/orgs",
      "repos_url": "https://api.github.com/users/Sjeanpierre/repos",
      "events_url": "https://api.github.com/users/Sjeanpierre/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Sjeanpierre/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-06-09T18:44:53Z",
    "updated_at": "2018-06-09T18:44:53Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "- https://developers.cloudflare.com/workers/api/\r\n- https://developers.cloudflare.com/workers/api/config-api-for-enterprise/\r\n- https://api.cloudflare.com/#worker-script-properties"
  }

test('IssueTable should render correctly', () => {

    let l = [];
    l.push(testIssue1);
    l.push(testIssue2);
    const issuetable = shallow(<IssueTable issueList={l} />);

    expect(issuetable).toMatchSnapshot();
});

test('IssueTable should render an Issue', () => {
    let l = [];
    l.push(testIssue1);
    l.push(testIssue2);
    const issuetable = shallow(<IssueTable issueList={l} />);

    expect(issuetable.containsMatchingElement(<Issue />)).toBe(true);
});

test('sorting should work', () => {
    let l = [];
    l.push(testIssue1);
    l.push(testIssue2);
    let expectedNewSort = [];
    expectedNewSort.push(testIssue2);
    expectedNewSort.push(testIssue1);

    const newestSort = IssueTable.sortIssues(l, "Newest");
    expect(newestSort).toEqual(expectedNewSort);
    
    const oldestSort = IssueTable.sortIssues(l, "Oldest");
    expect(oldestSort).toEqual(l);

    
    const commentsSort = IssueTable.sortIssues(l, "Most commented");
    expect(commentsSort).toEqual(l);

    
    const leastCommentsSort = IssueTable.sortIssues(l, "Least commented");
    expect(leastCommentsSort).toEqual(expectedNewSort);


    const updatedSort = IssueTable.sortIssues(l, "Recently updated");
    expect(updatedSort).toEqual(expectedNewSort);

    const leastUpdatedSort = IssueTable.sortIssues(l, "Least recently updated");
    expect(leastUpdatedSort).toEqual(l);
});
