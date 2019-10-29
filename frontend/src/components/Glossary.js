import React, {Component} from 'react';
import '../App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';

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
            this.setState({
                items : data
            })
        })
    }

    createGlossaryTable = () => {

        return this.state.items.map(item => {

            const {name, description} = item
            return (
                <TableRow key={name}>
                    <td style={{fontWeight:"bold"}}>
                    {name}
                    </td>
                    <td>
                    {description}
                    </td>
                </TableRow>
            )
        })
    }

    render() {
        return (
            <div className="glossary">
                <span>&nbsp;&nbsp;</span>                
                <Table className="glossary-table">
                    <TableBody>
                        {this.createGlossaryTable()}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

export default Glossary;
