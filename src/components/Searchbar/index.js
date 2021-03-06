import React, { Component } from 'react';
import _ from 'lodash';
import { Search } from 'semantic-ui-react';

import './styles.css';

export default class Searchbar extends Component {
    max_results = 5

    constructor() {
        super();

        this.state = {
            isLoading: false,
            results: [{title: "Cargando..."}],
            value: ''
        }

        this.handleResultSelect = this.handleResultSelect.bind(this); 
        this.handleSearchChange = this.handleSearchChange.bind(this); 
        this.handleKeyPress = this.handleKeyPress.bind(this); 
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            window.location.replace(encodeURI('/search?name=' + event.target.value))
        }
    }

    handleResultSelect = (e, { result }) => {
        this.setState({ value: result.title })
        window.location.replace(encodeURI('/proyectoley/' + result.key))
    }

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })
    
        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();    

            fetch(process.env.REACT_APP_BACK_URL + "law_projects?name=" + value)
            .then(response => response.json())
            .then(data => {
                const results = _.times((data.length > this.max_results ? this.max_results : data.length), (index) => ({
                    title: data[index].name,
                    description: data[index].description,
                    key: data[index].id
                }));

                this.setState({
                    results: results, 
                    isLoading: false
                })
            });
        }, 300)
    }

    resetComponent = () => this.setState({isLoading: false, results: [{title: 'Cargando...'}]})

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Search
                loading={isLoading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                results={results}
                value={value}
                noResultsMessage={
                    <h3 className="ui header">
                        ¡Lo sentimos!
                        <div className="sub header">
                            No encontramos resultados para esta búsqueda.
                        </div>
                    </h3>}
                input={{ onKeyPress: this.handleKeyPress, placeholder: 'Busca proyectos de ley' }}
                {...this.props}
            />
        );
    }
}