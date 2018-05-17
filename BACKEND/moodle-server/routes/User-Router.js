const router = require('express').Router();
const UserController = require('../controllers/User-Controller');

/**
 * GET    /find-all
 * GET    /find-by-id
 * POST   /add
 * POST   /delete
 */

router.get(('/login'), async(req, res) => {
	try {
   const user = await UserController.login();
   console.log({})
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched',
      data: user
    });
  } catch (status) {
    console.log(blep)
    let message = '';

    switch (status) {
      case 500:
        message = 'Internal server error';
        break;
    }

    res.status(200).json({ status, message });
  	}
});

// router.get(('/all'), async(req, res) => {
// 	try {
//    const user = await UserController.getAll();
//    // console.log({User: username});
//     res.status(200).json({
//       status: 200,
//       message: 'Successfully fetched',
//       data: user
//     });
//   } catch (status) {
//     let message = '';
//     console.log(status);
//     switch (status) {
//       case 500:
//         message = 'Internal server error';
//         break;
//     }

//     res.status(200).json({ status, message });
//   	}
// });

router.get('/all', UserController.getAll);

module.exports = router;