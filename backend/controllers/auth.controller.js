//具体执行动作

export async function signup(req,res) {
    try {
        const {email,password,username} = req.body;//从请求体中获取三个字段的值
        if (!email || !password || !username) { //三个条件缺一不可
            return res.status(400).json({
                success:false,
                message:"all fields are required"
            })
        }

        //校验邮箱
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(email)){ //未通过邮箱正则校验
            return res.status(400).json({
                success:false,
                message:"Invalid email"
            })
        }
    } catch (error) {
        
    }
}

export async function login(req,res) {
    res.send("loginroute")
}

export async function logout(req,res) {
    res.send("logout route")
}