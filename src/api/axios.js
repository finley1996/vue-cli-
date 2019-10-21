import axios from "axios"
const getMsg = ()=>axios({
    url:'/api/students/getstulist',
    timeout:10000
})
const  delMsg = (id)=>axios({
    url:'/api/students/del',
    timeout:10000,
    params:{
        _id:id
    }
})
const  inputMsg = (msg)=>axios({
    method:'post',
    url:'/api/students/addlist',
    timeout:10000,
    data:{
        msg:msg
    }
})
export{
    getMsg,delMsg,inputMsg
}