export const sortBy = (sortType, files) => {
    return files.sort((a, b) => {
        if (a[sortType] > b[sortType]) {
            return 1
        }
        if (a[sortType] < b[sortType]) {
            return -1
        }
        return 0
    })
}