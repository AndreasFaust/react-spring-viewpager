import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ViewpagerSprings from './springs'

import useCSSHeight from './hooks/useCSSHeight'
import useDimensions from './hooks/useDimensions'
import useKeyboard from './hooks/useKeyboard'
import useDragging from './hooks/useDragging'
import useMouseOver from './hooks/useMouseOver'
import useGoto from './hooks/useGoto'
import useFocus from './hooks/useFocus'
import useViewCount from './hooks/useViewCount'
import useAutoPlay from './hooks/useAutoPlay'
import useConfig from './hooks/useConfig'

const StyledDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: ${props => props.cssWidth || '100%'};
  ${props => props.cssHeight}
  ${props => props.styles}
`

const SledViews = ({
  width,
  height,
  dragging,
  dragDistance,
  keyboard,
  goto,
  children,
  style,
  autoPlay,
  pauseOnMouseOver,
  config
}) => {
  const viewsRef = useRef()
  const cssHeight = useCSSHeight(height)
  useDimensions(viewsRef, width, height, cssHeight)
  useFocus(viewsRef)
  useViewCount(children)

  useMouseOver(pauseOnMouseOver, viewsRef)
  useGoto(goto)
  useKeyboard(keyboard)
  useDragging(dragging, dragDistance)
  useAutoPlay(autoPlay)

  useConfig(config)

  return (
    <StyledDiv
      className='sled'
      ref={viewsRef}
      styles={style}
      cssWidth={width}
      cssHeight={cssHeight}
      tabIndex={0}
    >
      <ViewpagerSprings>
        {children}
      </ViewpagerSprings>
    </StyledDiv>
  )
}

SledViews.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  goto: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  keyboard: PropTypes.bool,
  dragging: PropTypes.bool,
  dragDistance: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  autoPlay: PropTypes.number,
  pauseOnMouseOver: PropTypes.bool,
  config: PropTypes.object
}

SledViews.defaultProps = {
  children: null,
  style: '',
  width: undefined,
  height: '50ow',
  goto: undefined,
  keyboard: true,
  dragging: true,
  dragDistance: '25ow',
  autoPlay: undefined,
  config: { mass: 1, tension: 210, friction: 20, clamp: true },
  pauseOnMouseOver: true
}

export default SledViews
