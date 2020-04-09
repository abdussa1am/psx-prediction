import React, { Component } from 'react'
import Contacts from './contacts';
{/*const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];
  const isSearched = searchTerm => item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase());
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    list: list,
    searchTerm: '',
};
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    }
    onDismiss(id) {
      const isNotId = item => item.objectID !== id;
      const updatedList = this.state.list.filter(isNotId);
      this.setState({ list: updatedList });
      }
    onSearchChange(event) {
      this.setState({ searchTerm: event.target.value });
      }
  render() {
    return (
      <div className="App">
        <form>
            <input type="text" onChange={this.onSearchChange}/>
        </form>
          {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>
          <div>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>
        <button onClick={() => this.onDismiss(item.objectID)} type="button">
        Dismiss
        </button>
        </span>
        </div>
    )}
 </div>

    );
  }
}*/}
class App extends Component {

  state = {
    response: []
  }
  componentDidMount() {
    fetch('https://fcsapi.com/api-v2/stock/list?indices_id=1&access_key=YON9guMpjGdHapymnGbCOpBOvAtIMbsINqH866bXpgOvxHavTU')
    .then(response => response.json())
    .then((res) => {
      const { response } = res
      console.log(response)
      this.setState({ response })
    })
    .catch(console.log)
  }
  render() {
    return (
      <Contacts response={this.state.response} />
    )
  }
}
export default App