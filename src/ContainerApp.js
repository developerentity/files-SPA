import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import App from './App'
import { getFiles, sortFiles } from './redux/filesReducer'

function ContainerApp() {

  const dispatch = useDispatch()
  const files = useSelector(state => state.files)

  useEffect(() => {
    if (!files.length) {
      dispatch(getFiles())
    }
  }, [files, dispatch])

  const sortBy = (sort) => {
    dispatch(sortFiles(sort))
    setCookie('sortSettings', sort, 1209600)
  }

  useEffect(() => {
    const sorted = getCookie('sortSettings')
    setTimeout(() => {
      dispatch(sortFiles(sorted))
    }, 100)
  }, [dispatch])

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

  return (
    <App
      files={files}
      sortBy={sortBy}
    />
  )
}

export default ContainerApp
