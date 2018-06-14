import React, {Component} from 'react';
import Issue from './Issue';

export default class IssueTable extends Component {

    constructor(props) {
        super(props);

        this.state = {data: null, authormsg: null, labelmsg: null}
    }

    componentDidMount() {
        this.CreateIssueTable();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.author !== prevProps.author
            || this.props.label !== prevProps.label
            || this.props.open !== prevProps.open
            || this.props.sort !== prevProps.sort
            || this.props.issueList !== prevProps.issueList) {

            this.CreateIssueTable();
        }
    }

    sortIssues(issueList, sort) {
        switch (sort) {
            case "Newest":
                issueList.sort(function(a,b){
                    return new Date(b.created_at) - new Date(a.created_at);
                });
                return issueList;
            case "Oldest":
                issueList.sort(function(a,b){
                    return new Date(a.created_at) - new Date(b.created_at);
                });
                return issueList;
            case "Most commented":
                issueList.sort(function(a,b){
                    return b.comments - a.comments;
                });
                return issueList;
            case "Least commented":
                issueList.sort(function(a,b){
                    return a.comments - b.comments;
                });
                return issueList;
            case "Recently updated":
                issueList.sort(function(a,b){
                    return new Date(b.updated_at) - new Date(a.updated_at);
                });
                return issueList;
            case "Least recently updated":
                issueList.sort(function(a,b){
                    return new Date(a.updated_at) - new Date(b.updated_at);
                });
                return issueList;
        }
    }

    CreateIssueTable() {
        let issueList = this.props.issueList;
        const author = this.props.author;
        const label = this.props.label;
        const sort = this.props.sort;

        if (issueList != null) {
            if (sort != null) {
                issueList = this.sortIssues(issueList, sort)
            }
            let open = 0;
            let closed = 0;

            let data = issueList.map((v) => {
                if (v.pull_request) {
                    return null
                }
                if (this.props.open) {
                    if (v.state === "closed") {
                        closed++;
                        return null
                    }
                } else {
                    if (v.state === "open") {
                        open++;
                        return null
                    }
                }

                if (author) {
                    if (v.user.login !== author)
                        return null
                }
                if (label) {
                    if (v.labels == null) return null;
                    if (v.labels.filter(a => a.name === label).length === 0) {
                        return null
                    }
                }

                if (v.state === "open") open++;
                if (v.state === "closed") closed++;

                return (
                    <li style={{border: "1px solid grey", padding: 5}} key={v.number}>
                        <Issue issue={v} open={this.props.open}/>
                    </li>
                )
            });
            const authormsg = <span>{author ? "Filtering by author " + author : ""}</span>;
            const labelmsg = <span>{label ? "Filtering by label " + label : ""}</span>;

            if (this.props.setNumIssues != null)
                this.props.setNumIssues(open, closed);

            this.setState({data, authormsg, labelmsg})
        }
    }


    render() {
        const data = this.state.data;
        const authormsg = this.state.authormsg;
        const labelmsg = this.state.labelmsg;

        if (data != null)
            return (
                <div className="container col-md-8 col-md-offset-2">
                    {authormsg}
                    {labelmsg}
                    <ul className="issues">
                        {data}
                    </ul>
                </div>
            );
        return null;
        }
    }