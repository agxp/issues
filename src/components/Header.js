import React, {Component} from 'react';
import Dropdown from './Dropdown'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allAuthors: null, allLabels: null
        };
    };

    componentDidMount() {
        var issueList = this.props.issueList;
        if (issueList) {
            var authors = new Set();
            authors.add("None");

            issueList.forEach(a => {
                if (!a.pull_request) {
                    authors.add(a.user.login)
                }
            });
            let allAuthors = Array.from(authors);


            console.log(allAuthors);

            var labels = {};
            labels["None"] = "000000";

            issueList.forEach(a => {
                if (!a.pull_request) {
                    if (a.labels) {
                        a.labels.forEach((l) => {
                            if (labels[l.name]) {

                            } else {
                                labels[l.name] = l.color;
                            }
                        })
                    }
                }
            });


            console.log(labels);
            this.setState({allAuthors, allLabels: labels})
        }
    };


    render() {
        var authors = this.state.allAuthors;
        if (authors) {
            authors = authors.map(a => <a className={"author-dropdown"} href="#"  onClick={this.props.filterAuthor.bind(this, a)} key={a}>{a}<br/></a>);
        }

        var labels = this.state.allLabels;
        if (labels) {
            labels = Object.keys(labels).map(a => <a className={"label-dropdown"} href="#" onClick={this.props.filterLabel.bind(this, a)} key={a} style={{backgroundColor: "#" + labels[a], color: "white"}}>{a}<br/></a>);
        }

        const sorts = ["Newest", "Oldest", "Most commented", "Least commented", "Recently updated", "Least recently updated"].map(
            a => <a className={"sorts-dropdown"} href="#" onClick={this.props.filterSorts.bind(this, a)} key={a}>{a}<br/></a>);

        return (
            <div className="container col-md-8 col-md-offset-3">
                <h1>Displaying issues for cloudflare/cloudflare-go</h1>
                <ul>
                    <a href="#" className="btn-link" onClick={this.props.openCloseHandler.bind(this, true)}>
                        <svg className="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14"
                             height="16" aria-hidden="true">
                            <path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
                        </svg>
                        {this.props.numOpen} Open
                    </a>

                    <a href="#" className="btn-link selected" onClick={this.props.openCloseHandler.bind(this, false)}>
                        <svg className="octicon octicon-check" viewBox="0 0 12 16" version="1.1" width="12" height="16"
                             aria-hidden="true">
                            <path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path>
                        </svg>
                        {this.props.numClosed} Closed
                    </a>

                    <Dropdown name="Labels" id="labelsButton" data={labels}/>

                    <Dropdown name="Authors" id="authorsButton" data={authors}/>

                    <Dropdown name="Sort" id="sortButton" data={sorts}/>

                </ul>
            </div>
        );
    }
}