import React, { Component } from 'react';
import marked from 'marked';
import './App.css';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: false,
  smartypants: false,
  xhtml: true
});


const MarkDown = (props) => {
  return (
    <div className="col-6">
      <h2 className="">HTML</h2>
      <div className="display-md"></div>
    </div>
  );
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      md :`
      Heading
      =======
      Sub-heading
      -----------
      ### Another deeper heading
      Paragraphs are separated
      by a blank line.
      Leave 2 spaces at the end of a line to do a  
      line break
      Text attributes *italic*, **bold**`
    }
  }  
  componentDidMount() {
   let value = `
   Heading
   =======
   Sub-heading
   -----------
   ### Another deeper heading
   Paragraphs are separated
   by a blank line.
   Leave 2 spaces at the end of a line to do a  
   line break
   Text attributes *italic*, **bold**`
    document.querySelector('.display-md').innerHTML = marked(value)
    this.setState({
      md : value
    });
  }
  handleMarkdownChange = (e) => {
    let {value} = e.target;
    document.querySelector('.display-md').innerHTML = marked(value)
    this.setState({
      md : value
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h2 className="">Markdown</h2>
            <textarea 
              className="textarea md-in"
              value={this.state.md}
              onChange={this.handleMarkdownChange} 
            >
            </textarea>
          </div>
          <MarkDown sendMarked={this.state.md} />
        </div>
      </div>
    );
  }
}
