export const handleError = (message, statusCode = null, next) => {
    const error = new Error();
    error.message = message;
    error.statusCode = statusCode;
    return next(error)
}