import React, {Component} from 'react';

export default class Dropdown extends Component {
    render() {
        const id = this.props.id;
        const name = this.props.name;
        const data = this.props.data;

        if (id != null) {
            return (

                <div className="dropdown float-right">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id={id}
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {name}
                    </button>
                    <div className="dropdown-menu" aria-labelledby={id}>
                        {data}
                    </div>
                </div>

            );
        }
        return null

    }
}
