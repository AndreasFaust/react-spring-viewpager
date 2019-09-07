import React, { useState, useEffect } from 'react'
import { Sled, Views, Progress, Control } from '../sled'

import image1 from '../images/image-1.jpg'
import image2 from '../images/image-2.jpg'
import image3 from '../images/image-3.jpg'
import image4 from '../images/image-4.jpg'
import image5 from '../images/image-5.jpg'

const pages = [
  image1,
  image2,
  image3,
  image4,
  image5
]

const SledComponent = ({
  width,
  height,
  goto,
  autoPlay,
  rewind,
  pauseOnMouseOver,
  stopOnInteraction,
  keyboard,
  dragging,
  dragDistance,
  mass,
  tension,
  friction,
  clamp
}) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => setShow(true), 3000)
  }, [])
  return show && (
    <div className='sled-wrapper'>

      <Sled>
        <Views
          onSledEnd={() => {
            console.log('THIS IS THE END')
          }}
          width={width}
          height={height}
          goto={goto}
          autoPlay={autoPlay}
          rewind={rewind}
          pauseOnMouseOver={pauseOnMouseOver}
          stopOnInteraction={stopOnInteraction}
          keyboard={keyboard}
          dragging={dragging}
          dragDistance={dragDistance}
          config={{
            mass,
            tension,
            friction,
            clamp
          }}
          style={`
    // transition: all 1s;
  `}
        >
          {pages.map((page) => (
            <div
              key={page}
              style={{
                position: 'absolute',
                background: '#fff',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundImage: `url(${page})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </Views>
        <Progress />
        <div className='controls'>
          <Control goto='prev' />
          <Control goto='next' />
        </div>
        <div className='controls'>
          {pages.map((page, index) => (
            <Control key={page} goto={index} />
          ))}
        </div>
      </Sled>
    </div>
  )
}
export default SledComponent
