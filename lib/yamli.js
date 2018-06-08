const getStdin = require('get-stdin')
const yaml = require('js-yaml')
const yamli = require('yamli')

getStdin()
  .then(input => {
    const schema = yamli.createSchema()
    const data = yaml.load(input, { schema: schema })
    console.log(yaml.safeDump(data))
  })
