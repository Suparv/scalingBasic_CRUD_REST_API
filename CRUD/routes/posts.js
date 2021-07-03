const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

// Post.fins is a mongoose method

// this one gets back all posts
router.get('/', async(req,res)=>{
    try{
        const posts = await Post.find();
        res.send(posts); 
    }
    catch(err){

    }
})


// this submits a post
router.post('/', (req, res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    })

    post.save()
    .then(data=>{
        res.send(data)
    })
    .catch(error => {
        res.json(error)
    })

})

// specific post
router.get('/:postId', async(req, res)=>{
    try{
        const post = Post.findById(req.params.postId);
    res.json(post)
    }
    catch(err){
    }
    
})

// delete post
router.delete('/:postId', async(req, res)=>{
    try{
        const removedPost = await Post.remove({_id:req.params.postId});
        res.send(removedPost    )
    }
    catch(err){
        res.send(err);
    }
})

//update post

router.patch('/:postId', async(req, res)=>{
    try{
        const updated = await Post.updateOne(
        {_id:req.params.postId},
        {$set:{title : req.body.title}}
        )

        res.json(updated);
    }
    catch(err){
        res.json({message:err})
    }
})

module.exports = router;
