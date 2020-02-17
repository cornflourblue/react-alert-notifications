import React from 'react';

import { alertService } from '../_services';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            autoClose: false,
            keepAfterRouteChange: false
        };

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    render() {
        const { autoClose, keepAfterRouteChange } = this.state;
        return (
            <div>
                <h1>React Alerts</h1>
                <button className="btn btn-success m-1" onClick={() => alertService.success('Success!!', { autoClose, keepAfterRouteChange })}>Success</button>
                <button className="btn btn-danger m-1" onClick={() => alertService.error('Error :(', { autoClose, keepAfterRouteChange })}>Error</button>
                <button className="btn btn-info m-1" onClick={() => alertService.info('Some info....', { autoClose, keepAfterRouteChange })}>Info</button>
                <button className="btn btn-warning m-1" onClick={() => alertService.warn('Warning: ...', { autoClose, keepAfterRouteChange })}>Warn</button>
                <button className="btn btn-outline-dark m-1" onClick={() => alertService.clear()}>Clear</button>
                <div className="form-group mt-2">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="autoClose" id="autoClose" checked={autoClose} onChange={this.handleChange} />
                        <label htmlFor="autoClose">Auto close alert after three seconds</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="keepAfterRouteChange" id="keepAfterRouteChange" checked={keepAfterRouteChange} onChange={this.handleChange} />
                        <label htmlFor="keepAfterRouteChange">Keep displaying after one route change</label>
                    </div>
                </div>
            </div>
        );
    }
}

export { Home };