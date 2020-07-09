import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const UnauthenticatedRoute = ({ children, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.getItem('user') ? (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                ) : (
                        children

                    )
            }
        />
    );
}
