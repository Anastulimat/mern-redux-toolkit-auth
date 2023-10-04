import User from "../models/userModel.js";

/**
 * POST /api/users
 * @desc Register a new user
 * @access Public
 *
 * @param req
 * @param res
 */
const registerUser = async (req, res) => {
    const {name, email, password} = req.body;

    const userExists = await User.findOne({email});
    if(userExists) {
        res.status(404);
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: email
        });
    }
    else {
        res.status(400);
        throw new Error('Invalid user data');
    }
};

/**
 * POST /api/users/auth
 * @desc Auth user/set token
 * @access Public
 *
 * @param req
 * @param res
 */
const authUser = async (req, res) => {
    res.status(200).json({
        message: 'Auth User'
    })
};


/**
 * POST /api/users/logout
 * @desc Logout user
 * @access Public
 *
 * @param req
 * @param res
 */
const logoutUser = async (req, res) => {
    res.status(200).json({
        message: 'Logout User'
    })
};


/**
 * GET /api/users/profile
 * @desc Get user profile
 * @access Private
 *
 * @param req
 * @param res
 */
const getUserProfile = async (req, res) => {
    res.status(200).json({
        message: 'Get User profile'
    })
};

/**
 * PUT /api/users/profile
 * @desc Update user profile
 * @access Private
 *
 * @param req
 * @param res
 */
const updateUserProfile = async (req, res) => {
    res.status(200).json({
        message: 'Update user profile'
    })
};

export {
    registerUser,
    authUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};