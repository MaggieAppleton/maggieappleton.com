import React from "react"

const containerStyle = {
    display: 'flex',
    margin: '0 auto',
    alignSelf: 'center',
    justifySelf: 'center',
    marginTop: '1.2em',
    marginBottom: '1.6em'
}

const videoStyle = {
    width: '660px',
    height: '400px',
    margin: '0 auto',
    alignSelf: 'center',
    justifySelf: 'center'
}

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div style={containerStyle}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      style={videoStyle}
    />
  </div>
)

export default Video