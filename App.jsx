/**
 * Created by mrowinski on 16.12.2016.
 */
import React from 'react';

class App extends React.Component {
   constructor() {
       super();


       this.state = {
           data:
           [
               {
               "id": 1,
               "name": "FOO",
               "age": "20"
               },

               {
                   "id":2,
                   "name":"BAR",
                   "age":"30"
               },

               {
                   "id":3,
                   "name":"DUPA",
                   "age":"666"
               }
           ]
       }
   }

   render(){
       return(
           <div>
               <Clock/>
               <Header/>
               <table>
                   <tbody>
                   {this.state.data.map((person,i) => <TableRow key = {i} data = {person}/>)}
                   </tbody>
               </table>
           </div>
       );
   }
}

class Header extends React.Component {
    render() {
        return(
          <div>
              <h1>Header</h1>
          </div>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <div id="table">
                <tr>
                    <td>{this.props.data.id}</td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.age}</td>
                </tr>
            </div>
        );
    }
}

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
          <div id="clock">
              <h2>This is your clock</h2>
              <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
          </div>
        );
    }
}



export default App;