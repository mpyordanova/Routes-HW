const realBlogData = ["The Lord of The Rings", "Quo Vadis", "Pride and Prejudice", "A Court of Thorns and Roses", "Illiad"]
const express = require("express")
const res = require("express/lib/response")
const booksKids = ["Pipi", "Harry Potter", "Cindarella", "Peppa Pig"]
const booksRomance = ["It ends with us", "Romeo and Juliet"]
 const blogRouter = express.Router()
//  Route 1
blogRouter.route("/")
.get((req, res)=>{
    res.status(200).json({blogs:realBlogData})
})
// 2.
.post((req, res)=>{
    res.status(200).json({blogs:booksKids})
})

// 3.
.put((req, res)=>{
    res.status(200).json({blogs:booksKids})
})

// 4. Delete
.delete((req, res)=>{
    res.status(200).json({blogs:realBlogData.length-1})
})
.delete((req, res)=>{
    res.status(200).json({blogs:realBlogData})
})

.delete((req, res)=>{
    const id = req.params.id
    if(id>=realBlogData.length){
        res.status(404).json({message: "Id doesn't exist"})
    }else{
        realBlogData.splice(id, 3)
        res.status(204).json({message:"Seccessfully Deleted"})
    }
})

// 5.
blogRouter.route("/:id")
.get((req, res)=>{
    const id = req.params.id
    if(id>=realBlogData.length){
        res.status(404).json({message: "ID too long"})
    }else{
        res.status(200).json({blog: realBlogData[id]})
    }
})
.put((req, res)=>
{
    const body = req.body
    const id = req.params.id
    if(body.name.length <=6 && body.name.length>15)
    {
        res.status(400).json({message: "Username must be between 6 and 15 characters"})
     }
    else if(body.textContent.length <=200)
    {
        res.status(400).json({message:"Text must be at least 200 characters"})
    }else if (id >= realBlogData.length){
        res.status(404).json({message:"Id does not exist"})

    }else{
        realBlogData[id]= body
        res.status(202).json({blog:realBlogData[id]})
    }
    
})

















 module.exports = blogRouter
