import 'isomorphic-fetch'
import fetchPaginate from 'fetch-paginate'
let ISSUE_URL = 'https://api.github.com/repos/cloudflare/cloudflare-go/issues?state=all&per_page=100';
let user = '';
let password = '';

export function GetIssues() {
    return fetchPaginate(ISSUE_URL, {
        headers: {
            'Authorization': 'Basic ' + btoa(user + ':' + password)
        }
    }).then(({res, data}) => {
        console.log({res, data});
        return data;
        }
    )
}