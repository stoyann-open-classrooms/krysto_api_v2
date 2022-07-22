const express = require ('express')
const router = express.Router()

const {getCommunity, getCommunities, createCommunity, updateCommunity, deleteCommunity} = require('../controllers/community')

router.route('/').get(getCommunities).post(createCommunity)
router.route('/:id').get(getCommunity).put(updateCommunity).delete(deleteCommunity)


module.exports = router