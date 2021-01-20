import { filesAPI } from "../api/api"
import { sortBy } from "../util/sort"

const SET_FILES = "SET_FILES"
const SORT_FILES = "SORT_FILES"

const initialState = {
    files: []
}

const filesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILES:
            return { ...state, files: action.files }

        case SORT_FILES:
            return { ...state, files: sortBy(action.sort, [...state.files]) }

        default:
            return state
    }
}

export const setFiles = (files) => {
    return { type: SET_FILES, files }
}

export const sortFiles = (sort) => {
    return { type: SORT_FILES, sort }
}

export const getFiles = () => {

    return async dispatch => {
        try {
            const res = await filesAPI.getFiles()
            if (res.ok) {
                const data = await res.json()
                dispatch(setFiles(data))
            }
            else {
                console.error(res.statusText)
            }
        } catch (err) {
            console.error(err)
        }
    }
}

export default filesReducer