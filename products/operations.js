const express=require('express')
const router=express.Router();

router.get('/',(req,res) => {
    res.send('This is a root product route');
})
router.post('/',(req,res)=>{});
router.delete('/',(req,res)=>{});
router.put('/',(req,res)=>{});

module.exports=router;