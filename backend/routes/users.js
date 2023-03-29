const router = require('express').Router();
const {
  getUsers, getUserById, updateUser, getCurrentUser, updateAvatar,
} = require('../controllers/users');
const {
  userGetValidator, userUpdateValidator, userUpdateAvatarValidator,
} = require('../validators/validators');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', userGetValidator, getUserById);
router.patch('/me', userUpdateValidator, updateUser);
router.patch('/me/avatar', userUpdateAvatarValidator, updateAvatar);

module.exports = router;
