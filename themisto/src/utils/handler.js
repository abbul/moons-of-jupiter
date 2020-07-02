const falabella = require('../provider/falabella')
const zara = require('../provider/zara')

async function handler (page, provider, query, orderID) {
  switch (provider) {
    case 'falabella':
      return falabella.search(page, query, orderID)
    case 'zara':
      return zara.search(page, query, orderID)
    default:
      return undefined
  }
}

module.exports = {
  handler
}
