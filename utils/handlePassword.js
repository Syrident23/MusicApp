import bcrypt from 'bcryptjs'

const encrypt = async (passwordPlain) => {
    const hash = await bcrypt.hash(passwordPlain, 10)
    return hash
}

 const compare = async (passwordPlain, hashPassword) =>{
    return await bcrypt.compare(passwordPlain, hashPassword)
}


export  {encrypt, compare}