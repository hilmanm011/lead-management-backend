const successResponse = (res, data, message = "Success", code = 200) => {
    return res.status(code).json({ code, message, data });
};

const errorResponse = (res, message = "Something went wrong", code = 400) => {
    return res.status(code).json({ code, message, data: null });
};

module.exports = { successResponse, errorResponse };
