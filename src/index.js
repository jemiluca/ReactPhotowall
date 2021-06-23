import React from 'react';
import ReactDOM from 'react-dom';
import Main  from './components/Main';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom'

//const tasks = ['tak out the trash', 'shovel the driveway', 'walk the dog'];
//const element = React.createElement('ol', null, tasks.map((task) => React.createElement('li', { key: task }, task)));
/*
//or we can use JSX
//{tasks.map((task, index) => <li key={index}> {task} </li>)}
class List extends Component {
    render() {
        return (<ol>
            {this.props.tasks.map((task, index) => <li key={index}> {task} </li>)}
        </ol>
        )
    }
}

class Title extends Component {
    render() {
        return <h1> {this.props.title} </h1>
    }
}

class Main extends Component {
    render() {
        return <div>
            <Title title = {'toDos'}/>
            <List tasks = {['Mow the lawn', 'walk the dog']}/>
            <List tasks = {['hose the drive way', 'finish the loundary']}/> 
        </div>
    }
}
*/
ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));