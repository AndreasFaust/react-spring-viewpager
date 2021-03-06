import { useEffect } from 'react'
import { useStateContext } from '../state'

const useShowElements = (slideBy: number) => {
  const [, dispatch] = useStateContext()
  useEffect(() => {
    if (slideBy) {
      dispatch({ type: 'SET_SLIDEBY', slideBy })
    }
  }, [slideBy])
}

export default useShowElements
