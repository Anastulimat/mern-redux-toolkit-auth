import asyncHandler from "express-async-handler";


/**
 * POST /api/user/auth
 * @desc Auth user/set token
 * @access Public
 *
 * @param req
 * @param res
 */
const authUser = async (req, res) => {
    res.status(401);
    throw new Error('Hello some error');

    res.status(200).json({
        message: 'Auth User'
    })
};

export {authUser};