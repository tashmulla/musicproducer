import React, {Component} from 'react';
import '../App.css';
import NavBar from './NavBar';

const api = "http://localhost:7090/edits/glossary"

class Glossary extends Component {

    state = {
        items: []
    }

    componentDidMount() {
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
            <NavBar />
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
