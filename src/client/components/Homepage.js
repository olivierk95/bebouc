import * as React from "react";

export default class Homepage extends React.Component {
    render() {
        return (
            <div className="backgroundhome">
                <h1>{"Bebouc"}</h1>
                <hr />
                <small>{"Laura, Olivier, Youssef, Elias"}</small>
                <form action="/books" method="get">
                    <button>{"Books"}</button>
                </form>
            </div>
        );
    }
}