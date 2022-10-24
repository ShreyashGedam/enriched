const { Router } = require("express");

const enrichedRouter = Router()

enrichedRouter.get('/', async (req, res) => {
    try {

        const payload = {
            "errorCode": "1000",
            "success": true,
            "result": {
                "EFiledlist": [
                    {
                        "valid": "Y",
                        "mof": "ONLINE",
                        "dof": "30-03-2018",
                        "ret_prd": "022018",
                        "rtntype": "GSTR1",
                        "arn": "AA0702185394526",
                        "status": "Filed"
                    },
                    {
                        "valid": "Y",
                        "mof": "ONLINE",
                        "dof": "17-08-2017",
                        "ret_prd": "072017",
                        "rtntype": "GSTR3B",
                        "arn": "AA0707172105457",
                        "status": "Filed"
                    }
                ]
            },
            "status": 200,
            "message": null
        }

        return res.status(200).send(payload)

    } catch (err) {

        return res.status(400).send({ message: err.message })

    }
})

module.exports = enrichedRouter