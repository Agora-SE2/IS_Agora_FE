import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import './styles.css'

export default class TagLabel extends Component {
    constructor() {
        super();

        this.state = {
            name: ""
        }
    }

    componentWillMount() {
        fetch(process.env.REACT_APP_BACK_URL + "tags/" + this.props.id + ".json")
        .then(response => response.json())
        .then(data => this.setState({ name: data.name }))
    }
    
    render() {
        const {id} = this.props;
        const {name} = this.state;
        
        return (
            <Label className="myTag" as="a" href={"/search?tag=" + id}  horizontal>{name}</Label>            
        );
    }
}