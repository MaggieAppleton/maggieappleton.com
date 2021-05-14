import React from 'react'

export default function OgImage() {
  return (
    <body>
      <div style={containerStyle}>
        <div>
          <div style={titleStyle}>{data.title}</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: '1rem',
              alignItems: 'center',
              fontFamily: 'FreightText W01 Book',
            }}
          >
            <div
              style={{
                fontSize: '1.2rem',
                color: '#5B7492',
                marginRight: '1rem',
              }}
            >
              <span style={{marginRight: '0.5rem'}}>🌿</span>{data.growthStage}
            </div>
            <svg width="8px" height="8px" style={{marginTop: '4px'}}>
              <circle cx="50%" cy="50%" r="4px" fill="#FF8F59"></circle>
            </svg>
            <div
              style={{
                fontSize: '1.2rem',
                fontStyle: 'italic',
                color: '#5B7492',
                marginLeft: '1rem',
                fontFamily: 'FreightText W01 Book Italic',
              }}
            >
              Last tended {data.lastEdit}
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

const data = {
  title: 'A Brief History & Ethos of the Digital Garden',
  growthStage: 'Budding',
  lastEdit: 'May 10th',
}

const containerStyle = {
  width: '1280px',
  height: '640px',
  backgroundImage:
    'url(https://res.cloudinary.com/dxj9qr5gj/image/upload/v1621000944/maggieappleton.com/ogimage_bg_elhoce.png)',
  display: 'grid',
  alignItems: 'center',
  justifyItems: 'center',
}

const titleStyle = {
  fontFamily: 'GT Walsheim Pro',
  fontWeight: 'bold',
  fontSize: '105px',
  lineHeight: '110%',
  color: '#2E363F',
  maxWidth: '950px',
  marginTop: '-2rem',
}
