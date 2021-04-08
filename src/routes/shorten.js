const router = require("express").Router()
const { BitlyShortener } = require("../shorteners/bitly_shortener")

router.post("/", async (req, res) => {
    const longLink = req.body.link
    const shortener = req.body.shortener
    if (!longLink || (!longLink.startsWith("http://") && !longLink.startsWith("https://")) || !shortener) {
        // Bad request
        res.sendStatus(400)
        return
    }

    let shortenerImpl
    switch (shortener) {
        case "bitly":
            shortenerImpl = new BitlyShortener()
            break;
    }
    if (!shortenerImpl) {
        // Bad request
        res.sendStatus(400)
        return;
    }

    try {
        const shortened = await shortenerImpl.shorten(longLink)
        res.json({ shortened: shortened })
    } catch (e) {
        // Internal server error
        console.log(e)
        res.sendStatus(500)
    }
})

module.exports = router;