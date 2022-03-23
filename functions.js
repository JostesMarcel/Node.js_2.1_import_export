const {data} = require("./data.js")

function More(dataArray) {
    return dataArray = dataArray.filter(data => data.population >= 100000)
}
function fewer(dataArray) {
    return dataArray = dataArray.filter(data => data.population <= 100000)
}

module.exports = {
    More,
    fewer
}
