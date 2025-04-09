
const { body } = require('express-validator');
const express = require('express');
const auth = require('../middleware/auth');
const {
  creating_a_newbook, get_books, get_book_by_id, update_book, delete_book
} = require('../controllers/bookController');

const router = express.Router();

router.use(auth);//written this just t make sure that all the routes are protected

router.post('/',
    [//adding all the constraints so that nooone can ad unuseful infomation to my dataabse
      body('Title').notEmpty(),
      body('Author').notEmpty(),
      body('Category').notEmpty(),
      body('Price').isNumeric().notEmpty(),
      body('Rating').isNumeric().optional(),
      body('Published_Date').isISO8601().toDate().optional()
    ],
    creating_a_newbook
  );
  
router.get('/', get_books);
router.get('/:id', get_book_by_id);
router.put('/:id', update_book);
router.delete('/:id', delete_book);

module.exports = router;