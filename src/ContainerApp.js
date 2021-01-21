import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import App from './App'
import { getFiles, setFiles } from './redux/filesReducer'

function ContainerApp() {

  const dispatch = useDispatch()
  const files = useSelector(state => state.files)

  const setCookie = (name, value, expires, path, domain, secure) => {
    document.cookie = name + "=" + escape(value) +
      ((expires) ? "; expires=" + expires : "") +
      ((path) ? "; path=" + path : "") +
      ((domain) ? "; domain=" + domain : "") +
      ((secure) ? "; secure" : "")
  }
  const getCookie = name => {
    let cookie = " " + document.cookie
    let search = " " + name + "="
    let setStr = null
    let offset = 0
    let end = 0
    if (cookie.length > 0) {
      offset = cookie.indexOf(search)
      if (offset !== -1) {
        offset += search.length;
        end = cookie.indexOf(";", offset)
        if (end === -1) {
          end = cookie.length;
        }
        setStr = unescape(cookie.substring(offset, end))
      }
    }
    return (setStr)
  }
  const [sortFlag, setSortFlag] = useState(getCookie('sortSettings'))

  useEffect(() => {
    if (!files.length) {
      dispatch(getFiles(sortFlag))
    }
  }, [sortFlag, files, dispatch])

  const sortBy = (sortType) => {
    dispatch(setFiles(files, sortType))
    setCookie('sortSettings', sortType, 1209600)
    setSortFlag(sortType)
  }

  return (
    <App
      files={files}
      sortBy={sortBy}
      sortFlag={sortFlag}
    />
  )
}

export default ContainerApp
