
const login = ( req, res ) =>{
    res.render('auth/login', { msg: 'Login' })
}

const iniciarSesion = ( req, res )=>{
    const { email, password } = req.body
    console.log(email, password)
    res.redirect('/')
}





export {
    login,
    iniciarSesion,
}