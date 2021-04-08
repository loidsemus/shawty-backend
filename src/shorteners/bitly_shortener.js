const { BitlyClient } = require("bitly")
const bitly = new BitlyClient(process.env.BITLY_TOKEN)

module.exports.BitlyShortener = class BitlyShortener {

    async shorten(longLink) {
        try {
            const response = await bitly.shorten(longLink)
            return response.link
        } catch (e) {
            throw e;
        }
    }

}