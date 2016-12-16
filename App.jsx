/**
 * Created by mrowinski on 16.12.2016.
 */
import React from 'react';
/*
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
               <Header/>
               <Clock/>
               <table>
                   <tbody>
                        {this.state.data.map(addPerson)}
                   </tbody>
               </table>
               <DynamicArray />
           </div>

       );

       function addPerson(person, i) {
           return <TableRow key={i} data={person}/>;
       }
   }
}

class Header extends React.Component {
    render() {
        return(
          <div>
              <h1>React Exercises</h1>
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

class DynamicArray extends React.Component {
    constructor() {
        super();

        this.state = {
            array:[]
        }

        this.setStateHandler = this.setStateHandler.bind(this);
    };

    setStateHandler() {
        var item = "obj ";
        var myArray = this.state.array;
        myArray.push(item);
        this.setState({array: myArray});
    };

    render() {
        return(
          <div id="array">
              <button onClick={this.setStateHandler}>Add object</button>
              <p>Array: {this.state.array}</p>
          </div>
        );
    }
}

export default App;


    */

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "initial data..."
        }

        this.person = {
            id:"",
            name:""
        }
        this.updateState = this.updateState.bind(this);
    }
    updateState(e){
        this.setState({data: e.target.value});
    }

    render() {
        return(
          <div>
              <Header/>
              <input type = "text" value = {this.state.data}
                     onChange={this.updateState} />
              <h4>{this.state.data}</h4>
          </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
            <div>
                <h1>React Exercises</h1>
            </div>
        );
    }
}
export default App;