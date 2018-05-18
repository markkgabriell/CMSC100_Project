const router = require('express').Router();
const PostController = require('../controllers/Post-Controller');

/**
 * GET    /find-all
 * GET    /find-by-id
 * POST   /add
 * POST   /delete
 */

router.get(('/get-all'), async(req, res) => {
  try {
   const data = await PostController.getAll();
   console.log({})
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched',
      data: data
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 500:
        message = 'Internal server error';
        break;
      case 404:
        message = 'Post not found'
        break;
    }

    res.status(200).json({ status, message });
    }
});


router.get(('/get-by-id'), async(req, res) => {
  try {
   const data = await PostController.getById();
   console.log({})
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched',
      data: user
    });
  } catch (status) {
    let message = '';

    switch (status) {
      case 500:
        message = 'Internal server error';
        break;
      case 404:
        message = 'Post not found'
        break;
    }

    res.status(200).json({ status, message });
    }
});

router.post(('/add'), async(req, res) => {
  try {
   const data = await PostController.add();
   console.log({})
    res.status(200).json({
      status: 200,
      message: 'Successfully added',
    });
  } catch (status) {
    let message = '';

    switch (status) {
      case 500:
        message = 'Internal server error';
        break;
    }

    res.status(200).json({ status, message });
    }
});

router.post(('/delete'), async(req, res) => {
  try {
   const data = await PostController.delete();
   console.log({})
    res.status(200).json({
      status: 200,
      message: 'Successfully deleted',
    });
  } catch (status) {
    let message = '';

    switch (status) {
      case 500:
        message = 'Internal server error';
        break;
      case 404:
        message = 'Post not found';
        break;
    }
    res.status(200).json({ status, message });
    }
});

router.get('/Post-list/:class', ClassController.getById);

module.exports = router;