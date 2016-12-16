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
               <Header/>
               <table>
                   <tbody>
                   {this.state.data.map((person,i) => <TableRow key = {i} data = {person}/>)} //lambda expression
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
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}
export default App;