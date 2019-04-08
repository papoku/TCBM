import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

class Notification extends React.Component {

    constructor(props, context) {
        super(props, context);
        // add event listener to listen for notification event
        window.addEventListener('notification', this.onNotification.bind(this));
        this.state = {
            notificationMessage: ''
        };
    }

    // Event when signal received to show
    onNotification(event) {
        var notificationText = event.detail.message;
        if (notificationText) {
            this.setState({ notificationMessage: notificationText });
        }
    }

    // Handler to close notification
    onClosed = () => {
        this.setState({ notificationMessage: '' });
    }

    // styling for notification
    getNotificationStyle() {
        return {
            base: {
                top: "10%",
                bottom: 'auto',
                left: "50%",
                transform: this.state.notificationMessage ? 'translate3d(-50%, 0, 0)' : 'translate3d(-50%, -50px, 0)'
            },
        };
    }

    render() {
        const styles = this.getNotificationStyle();

        return (
            <div>
                <Snackbar
                    style={styles.base}
                    open={!!this.state.notificationMessage}
                    autoHideDuration={6000}
                    onClose={this.onClosed}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.notificationMessage}</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.onClosed}>
                            Close
                        </Button>
                    ]}
                />
            </div>
        );
    }
}

export default Notification;