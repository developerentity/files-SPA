import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import App from './App'
import { getFiles } from './redux/filesReducer'

function ContainerApp() {

  const dispatch = useDispatch()
  const files = useSelector(state => state.files)

  useEffect(() => {
    if (!files.length) {
      dispatch(getFiles())
    }
  }, [files, dispatch])

  useEffect(() => {
    if (files.length > 0) {
      console.log(files)
    }
  }, [files])



  return (
    <App />
  )
}

export default ContainerApp
