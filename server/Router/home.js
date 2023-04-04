const router = require("express").Router()

const postmodel = require("../Model/post")




// post part............................................................................

router.post("/post", async (req, res) => {

    try {

        if (req.body) {

            const post = await postmodel.create(req.body)

            res.json({
                post: post
            })

        } else {
            res.json({
                message: "enter details"
            })
        }


    }
    catch (e) {

        res.json({
            message: e.message
        })


    }




})


// get all part...........................................................


router.get("/home", async (req, res) => {

    try {

        const post = await postmodel.find({}).sort({createdAt:-1})

        res.status(200).json({
            post: post
        })


    }
    catch (e) {
        res.json({
            message: e.message
        })

    }


})

// get photo by id .....................................................//.......


router.get("/home/:label",async (req,res)=>{

    let Label=req.params.label

    try{

        const post=await postmodel.find({label:{$regex:Label}})
        
        res.status(200).json({
            post:post
        })
         

    }
    catch(e){
        res.json({
            message:e.message
        })

    }


})



// delete by ID ....................//.....................



router.delete("/home/:id", async (req, res) => {

    const ID = req.params.id

    try {

        const post = await postmodel.findByIdAndDelete({ _id: ID })

        if (post) {
            res.status(200).json({
                deleted: "sucessfully deleted"
            })

        }



    }
    catch (e) {
        res.json({
            message: e.message
        })

    }


})






module.exports = router