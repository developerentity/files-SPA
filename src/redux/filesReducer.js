import { filesAPI } from "../api/api"
import { sortBy } from "../util/sort"

const SET_FILES = "SET_FILES"

const initialState = {
    files: []
}

const filesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILES:
            return { ...state, files: sortBy(action.sortType, [...action.files]) }

        default:
            return state
    }
}

export const setFiles = (files, sortType) => {
    return { type: SET_FILES, files, sortType }
}

export const getFiles = (sortType) => {
    return async dispatch => {
        try {
            const res = await filesAPI.getFiles()
            if (res.ok) {
                const data = await res.json()
                dispatch(setFiles(data, sortType))
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