import React, {Component} from 'react';
import '../App.css';

const api = "http://localhost:7090/edits/glossary"

class Glossary extends Component {

    state = {
        items: []
    }

    constructor() {
        super()
        this.getGlossaryItems()
    }

    getGlossaryItems = () => {
        fetch(api)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                items : data
            })
        })
    }

    render() {
        return (
            <div>
            <ul>
                {this.state.items.map(item => (
                    <li key={item.name}>
                    {item.name}: {item.description}
                    </li>
                ))}
            </ul>
            </div>
        )
    }
}

export default Glossary;
