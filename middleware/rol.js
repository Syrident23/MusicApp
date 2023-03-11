import handleHttpError from "../utils/handleErrors.js"

const checkRole = (rol) => (req, res, next) => {
  try {
    
    const {user} = req 
    const rolesByUser = user.role

    const checkValueRol = rol.some((rolSingle) => rolesByUser.includes(rolSingle))
    
    if(!checkValueRol){
        handleHttpError(res, "USER_NOT_PERMISIONS", 403)
        return
    }
    
    next()
  } catch (e) {
    handleHttpError(res, "ERROR_PERMISSIONS", 403)
  }
}

export {checkRole}