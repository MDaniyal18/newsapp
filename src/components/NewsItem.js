import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, darkMode } = this.props;
    const cardStyle = {
      backgroundColor: darkMode ? '#121212' : 'white',
      color: darkMode ? 'white' : 'black',
    };
    const buttonStyle = {
      backgroundColor: darkMode ? '#343a40' : 'black',
      color: 'white',
    };

    return (
      <div className='my-3'>
        <div className="card" style={{ ...cardStyle, width: "18rem" }}>
          <img src={!imageUrl ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.YZPON-9lpq2I_S9YJS0IOQHaEO%26pid%3DApi&f=1&ipt=a2a4189a645ec8c5a0b0a371f1e8120dff31d358c164e953fee168ba3cee689f&ipo=images" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm" style={buttonStyle}>Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
