import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
          <div className="paginate-container">

              <div className="pagination"><span className="previous_page disabled">Previous</span> <em
                  className="current">1</em> <a rel="next"
                                                href="/cloudflare/cf-ui/issues?page=2&amp;q=is%3Aissue+is%3Aclosed&amp;utf8=%E2%9C%93">2</a>
                  <a href="/cloudflare/cf-ui/issues?page=3&amp;q=is%3Aissue+is%3Aclosed&amp;utf8=%E2%9C%93">3</a> <a
                      href="/cloudflare/cf-ui/issues?page=4&amp;q=is%3Aissue+is%3Aclosed&amp;utf8=%E2%9C%93">4</a> <a
                      className="next_page" rel="next"
                      href="/cloudflare/cf-ui/issues?page=2&amp;q=is%3Aissue+is%3Aclosed&amp;utf8=%E2%9C%93">Next</a>
              </div>
          </div>
    );
  }
}
