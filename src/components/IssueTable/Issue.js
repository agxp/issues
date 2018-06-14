import React, {Component} from 'react';
import Icon from './Icon';
import moment from 'moment';


export default class Issue extends Component {
  constructor(props) {
    super(props);

    this.state = {issue: null}
  }

  componentDidMount() {
    this.GetIssue();
  }

  GetIssue() {
    let issue = this.props.issue;
     if (issue) {
       console.log(issue);
       this.setState({issue})
     }
  }

  render() {
    const issue = this.state.issue;
    const openclose = this.props.open ? "opened" : "was closed";


    if (issue != null) {
        const hoverdate = moment(issue.created_at).format('MMMM Do, YYYY, hh:mm a');
        const currdate = moment().subtract(30, 'days');
        const date = moment(issue.created_at).isBefore(currdate) ? " on " + moment(issue.created_at).format('MMMM Do, YYYY') : moment(issue.created_at).fromNow();
        const assignee = issue.assignee ? <img src={issue.assignee.avatar_url} className="float-right" width={20} height={20}/> : null;

        const labels = issue.labels.map(v => {
           return <span style={{backgroundColor: "#" + v.color, padding: 5, color: "white"}} key={v.name}>{v.name}</span>
        });

        return (
          <div>
              <div className={"float-left"} style={{padding: 10}}>
                  <Icon open={this.props.open} />
              </div>

            <div style={{fontSize: 16, fontWeight: 600}}>

                <a href={issue.html_url} style={{paddingRight: 10}}>
                    {issue.title}
                </a>

                {labels}

                <a href={issue.html_url}>
                    <div className="float-right">
                        <svg viewBox="0 0 16 16" version="1.1" width="16"
                             height="16" aria-hidden="true">
                            <path d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path>
                        </svg>
                        {issue.comments}
                    </div>
                </a>

                {assignee}

            </div>

            <div style={{fontSize: 12}} title={hoverdate}>
                #{issue.number} {openclose} {date} by {issue.user.login}
            </div>

          </div>

      );
    }
    return null;

  }
}
