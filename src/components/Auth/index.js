import React from "react";

export function requireAuthentication(Component) {
    return class AuthenticatedComponent extends React.Component {
        isAuthenticated() {
            return this.props.isAuthenticated;
        }
        render() {
            const loginErrorMessage = (
                <div>
                    Please <a href="/login">login</a> in order to create an Ad.
                </div>
            );

            return (
                <div>
                    { this.isAuthenticated === true ? <Component {...this.props} /> : loginErrorMessage }
                </div>
            );
        }
    };
}

export default requireAuthentication;