const fs = require('fs')
const link = require('./link').default
const axios = require('axios').default
let template = fs.readFileSync('template.md', {
    encoding: 'utf-8',
})

const logger = fs.createWriteStream('README.md', {
    flags: 'w'  // means appending (old data will be preserved)
})


axios.get(link).then((el) => {
    const data = el.data
    template += `\n \n`
    data.forEach((k) => {
        let titleLink = k.title.split(" ")
        titleLink = titleLink.join("-")
        let blogLink = `https://portablecoder.github.io/portableThoughts/thoughts/${titleLink}`
        template += `- [${k.title}](${blogLink}) \n`
    })
    logger.write(template)
    logger.end()
})