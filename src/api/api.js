export const filesAPI = {
    getFiles() {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        const targetUrl = 'http://fs.mh.net.ua/ajax/lsjson.php?dir=global/video&idu=1'
        return fetch(proxyUrl + targetUrl)
    }
}