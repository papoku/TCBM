import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { getRoutes } from '../helpers/helpers';
import GoogleMapAPI from './GoogleMapAPI';
import Notification from './Notification';

// styling of this component
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    menu: {
        width: 200,
    },
});

class Map extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            routes: [],
            selected: '',
            routeId: '',
        }
    }

    componentDidMount() {
        // fetch all active routes from Foli API
        getRoutes().then((routes) => {
            routes && routes.status === 200 &&
                this.setState({ routes: routes.data });
        }).catch((error) =>
            window.dispatchEvent(new CustomEvent('notification', { detail: { message: error } }))
        );
    };

    // handler to change state of textfiled
    handleChange = (event, index) => {
        this.setState({
            selected: event.target.value,
            routeId: index.key,
        });
    };


    render() {
        const { classes } = this.props;
        return (
            <div className={"mapWrapper"}>
                <div>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        className="textField"
                        value={this.state.selected}
                        onChange={this.handleChange}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your bus"
                        margin="normal"
                        variant="outlined"
                    >
                        {this.state.routes && this.state.routes.map(option => (
                            <MenuItem key={option.route_id} value={option.route_short_name}>
                                {option.route_short_name + ' - ' + option.route_long_name}
                            </MenuItem>
                        ))}

                    </TextField>

                </div>
                <GoogleMapAPI lineNumber={this.state.selected} routeId={this.state.routeId} />
                <Notification />
            </div>
        );
    }
}

Map.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Map);