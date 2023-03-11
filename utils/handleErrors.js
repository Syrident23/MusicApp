const handleHttpError = (res, message = 'Something was Wrong', code = 403) => {
    res.status(code)
    res.send({error: message})
}

export default handleHttpError