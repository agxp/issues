import React, {Component} from 'react';
import Header from './components/Header'
import IssueTable from './components/IssueTable/IssueTable'
import Footer from './components/Footer'
import './App.css';
import * as helpers from "./helpers";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issueList: null, open: true, author: null, label: null, numClosed: 0, numOpen: 0, sort: null
        };
    };


    componentDidMount() {
        helpers.GetIssues().then((issues) => {
            this.setState({issueList: issues});
        });
    };

    filterLabel(label) {
        console.log(label);
        if (label === "None") {
            this.setState({label: null})
        } else {
            this.setState({label});
        }

    }

    filterAuthor(author) {
        console.log(author);
        if (author === "None") {
            this.setState({author: null})
        } else {
            this.setState({author});
        }
    }

    filterSorts(sort) {
        console.log(sort);
        this.setState({sort});
    }

    setNumIssues(open, closed) {
        console.log(open);
        console.log(closed);
        this.setState({numOpen: open, numClosed: closed})
    }

    openCloseHandler(open) {
        this.setState({open});
    }

    render() {
        if (this.state.issueList) {
            return (
                <div>
                    <Header issueList={this.state.issueList} filterLabel={this.filterLabel.bind(this)}
                            filterAuthor={this.filterAuthor.bind(this)} numOpen={this.state.numOpen}
                            numClosed={this.state.numClosed} openCloseHandler={this.openCloseHandler.bind(this)}
                            filterSorts={this.filterSorts.bind(this)}/>
                    <IssueTable issueList={this.state.issueList} open={this.state.open} author={this.state.author}
                                label={this.state.label} setNumIssues={this.setNumIssues.bind(this)} sort={this.state.sort}/>
                    <Footer/>
                </div>
            );
        }
        return (
            <div>
                Loading...
                {/*<Header/>*/}
                {/*<IssueTable/>*/}
                {/*<Footer/>*/}
            </div>
        );
    }
}

export default App;
