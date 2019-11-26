import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div><h1>Contact</h1>
                <body>
                {this.props.body}
                </body>
            </div>
        )
    }

}

export default Contact;