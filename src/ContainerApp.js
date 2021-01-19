import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import App from './App'
import { getFiles, setFiles } from './redux/filesReducer'

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

  const sortBy = (sortType) => {
    const tempArr = [...files]
    tempArr.sort((a, b) => {
      if (a[sortType] > b[sortType]) {
        return 1
      }
      if (a[sortType] < b[sortType]) {
        return -1
      }
      return 0
    })
    dispatch(setFiles(tempArr))
  }


  return (
    <App
      files={files}
      sortBy={sortBy}
    />
  )
}

export default ContainerApp
