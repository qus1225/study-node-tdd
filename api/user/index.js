const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl')

// Users하위로 라우트 됨
router.get('/', ctrl.index);

// router.get('/:id', ctrl.show);
// router.delete('/:id', ctrl.destroy);
// router.post('/', ctrl.create);
// router.put('/', ctrl.update);

module.exports = router
