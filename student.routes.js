const express = require('express');
const router = express.Router();

const student_controllers = require('../controllers/student.controllers');
const { addUserValidation } = require('../validation/student/student.validation');


router.post('/create',addUserValidation,student_controllers.student_create);

router.get('/:id',student_controllers.student_details);

router.put('/:id/update',addUserValidation,student_controllers.student_update);

router.delete('/:id/delete',student_controllers.student_delete);

module.exports = router;