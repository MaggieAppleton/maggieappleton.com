import React from 'react'
import { fonts } from '../lib/typography'

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
              fontFamily: fonts.regular,
            }}
          >
            <div
              style={{
                fontSize: '1.4rem',
                color: '#6E849D',
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
                fontSize: '1.4rem',
                fontStyle: 'italic',
                color: '#6E849D',
                marginLeft: '1rem',
                fontFamily: fonts.regularItalic,
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
  fontFamily: fonts.walsheimBold,
  fontWeight: 'bold',
  fontSize: '105px',
  lineHeight: '110%',
  color: '#2E363F',
  maxWidth: '950px',
  marginTop: '-2rem',
}
