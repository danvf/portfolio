import React, { Component } from "react";
import Blob from "./Blob";
import "../style/main.scss";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="main-box">
                <Blob />
            </div>
        );
    }
}

export default Main;
