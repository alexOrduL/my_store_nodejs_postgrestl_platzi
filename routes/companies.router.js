const router = require('express').Router()

router.get("/categories/:categorieId/products/:productId", (req, res) => {
    const { categorieId, productId } = req.params;
    res.json(
        {
            categorieId,
            productId,
        }
    )
})

module.exports  = router
