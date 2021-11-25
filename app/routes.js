const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

require('./routes/v1.js')(router);

// Add default route
router.get('/', function (req, res) {
  res.render('computers/frequency', { title: "Select your poison" });
})

// Run this code when a form is submitted to 'choco-1-answer'
router.post('/hot-chocolate/choco-1-answer', function (req, res) {

    // Make a variable and give it the value from 'choco-1'
    var choco1 = req.session.data['choco-1']
  
    // Check whether the variable matches a condition
    if (choco1 === "Sometimes"){
      // Send user to next page
      res.redirect('/hot-chocolate/choco-2')
    } else {
      // Send user to ineligible page
      res.redirect('/hot-chocolate/ineligible')
    }
  
  })

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/balls/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['how-many-balls']

  // Check whether the variable matches a condition
  if (howManyBalls == "3 or more"){
    // Send user to next page
    res.redirect('/balls/juggling-trick')
  } else {
    // Send user to ineligible page
    res.redirect('/balls/ineligible')
  }

})

// Run this code when a form is submitted to 'type-answer'
router.post('/computers/types-answer', function (req, res) {

  // Make a variable and give it the value from 'type-of-computers'
  var computerType = req.session.data['types-of-computers']

  // Check whether the variable matches a condition
  if (computerType == "desktop"){
    // Send user to next page
    res.redirect('/computers/frequency') }

    if (computerType == "laptop"){
      // Send user to next page
      res.redirect('/computers/laptop') 

  } else {
    // Send user to ineligible page
    res.redirect('/computers/tablet')
  }

})

router.post('/computers/frequency-answer', function (req, res) {

  // Make a variable and give it the value from 'how-often'
  var howOften = req.session.data['how-often']

  // Check whether the variable matches a condition
  if (howOften == "everyday"){
    // Send user to next page
    res.redirect('/computers/comments') 

  } else {
    // Send user to ineligible page
    res.redirect('/computers/sometimes')
  }

})

router.post('/computers/design-answer', function (req, res) {

console.log(req);

  // Make a variable and give it the value from 'software'
  var software = req.session.data['software']

  // Check whether the variable matches a condition
  if (software == "figma"){
    // Send user to next page
    res.redirect('/computers/whizz') 

    if (software == "gov prototyping kit")
      // Send user to next page
      res.redirect('/computers/whizz')

  } else {
    // Send user to ineligible page
    res.redirect('/computers/old-skool')
  }

})

module.exports = router
