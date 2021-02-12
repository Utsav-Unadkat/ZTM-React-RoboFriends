import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

import { Component } from 'react';
import { render } from 'react-dom';

class App extends Component{
    
    constructor(){
        super();
        this.state = {
            robots: [] ,
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(reponse => reponse.json()).then( users => this.setState({ robots: users }));
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value.toLowerCase()});
    }

    render() {
        const { robots, searchField} = this.state;
        const filterrobots = robots.filter( robot => {
                return robot.name.toLowerCase().includes(searchField);
        })

        return(
            <div className='tc'>
                <h2 className='f1'>RoboFriends</h2>
                <SearchBox onSearchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filterrobots} /> {/*we have to add this coz state is an object*/}
                </Scroll>
            </div>
            );        
        }
}

export default App