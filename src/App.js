import React from 'react';
import Blogs from './components/Blogs';
import Comments from './components/Comments';

class App extends React.Component {
  state = { blogs: [], comments: [] };

  componentDidMount() {
    this.setState({
      blogs: [
        {
          'id': 1,
          'title': 'Nagarro',
          'description': 'Nagarro is a MNC',
        },
        {
          'id': 2,
          'title': 'Nagarro Noida',
          'description': 'Nagarro is a MNC in Noida',
        },
      ]
    });
    this.setState({
      comments: [
        {
          'id': 1,
          'blogId': 1,
          'comment': 'This is a comment 1',
          'isActive': true,
        },
        {
          'id': 2,
          'blogId': 1,
          'comment': 'This is a comment 2',
          'isActive': false,
        },
        {
          'id': 3,
          'blogId': 2,
          'comment': 'This is a comment 1',
          'isActive': true,
        },
        {
          'id': 4,
          'blogId': 2,
          'comment': 'This is a comment 2',
          'isActive': false,
        },
      ]
    });
  }

  render() {
    if (this.state.blogs && this.state.comments)
      return (
        <div className="ui container" style={{ marginTop: '20px' }}>
          <Blogs blogs={this.state.blogs} comments={this.state.comments} />
        </div>
      );
    else
      return <h1>Loding...</h1>
  }
}

export default App;