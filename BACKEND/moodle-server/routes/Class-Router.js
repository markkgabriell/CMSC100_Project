const router = require('express').Router();
const ClassController = require('../controllers/Class-Controller');

/**
 * GET    /find-all
 * GET    /find-by-id
 * POST   /add
 * POST   /delete
 */

router.get(('/get-all'), async(req, res) => {
  try {
   const data = await ClassController.getAll();
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
        message = 'Class not found'
        break;
    }

    res.status(200).json({ status, message });
    }
});


router.get(('/get-by-id'), async(req, res) => {
	try {
   const data = await ClassController.getById();
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
        message = 'Class not found'
        break;
    }

    res.status(200).json({ status, message });
  	}
});

router.post(('/add'), async(req, res) => {
  try {
   const data = await ClassController.add();
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
   const data = await ClassController.delete();
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
        message = 'Class not found';
        break;
    }
    res.status(200).json({ status, message });
    }
});



module.exports = router;