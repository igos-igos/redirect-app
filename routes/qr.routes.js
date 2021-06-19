const { Router } = require("express");
const useragent = require("express-useragent");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const source = req.headers["user-agent"];
    const ua = useragent.parse(source);
    if (ua.platform === "Android") {
      res.redirect("http://vk.com");
    }
    if (ua.platform === "iPhone") {
      res.redirect("http://facebook.com");
    }
    res.end(
      `<a style="font-size:30px" href='http://vk.com'>App for Android</a>
      <br> <br>
      <a style="font-size:30px" href='http://facebook.com'>App for IOS</a>`
    );
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, try again." });
  }
});

module.exports = router;
