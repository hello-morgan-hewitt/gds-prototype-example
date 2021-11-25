const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

require('./routes/v1.js')(router);

// Add default route
router.get('/', function (req, res) {
  res.render('computers/frequency', { title: "Select your poison" });
})

// Singe selection Figma Route
router.get('/computers/figma', function (req, res) {
  res.render('computers/figma', { title: "Figma Rocks" });
})

// Singe selection Gov Prototype Route
router.get('/computers/gov-prototyping-kit', function (req, res) {
  res.render('computers/gov-prototyping-kit', { title: "Gov Prototyping Kit Rocks" });
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
  var whereNext = req.session.data['where-next']

  // Check whether the variable matches a condition
  if (whereNext == "design-tools"){
    // Send user to the design tools page
    res.redirect('/computers/design') 

  } else {
    // Send user to a comments page
    res.redirect('/computers/comments')
  }

})

router.post('/computers/design-answer', function (req, res) {

console.log(req);

  // Make a variable and give it the value from 'software'
  var software = req.session.data['design-software']
  console.log ('\nSoftware choices are: ' + software)


  // Single answer so lets redirect accordingly
  switch (software.toString().trim()) {
    case 'pen and paper':
      res.redirect('/computers/old-skool') 
      break;      
      case 'figma':
        res.redirect('/computers/figma') 
        break;     
      case 'gov prototyping kit':
        res.redirect('/computers/gov-prototyping-kit') 
        break;    
      case 'figma,gov prototyping kit':
        res.redirect('/computers/figma-gov-prototyping-kit') 
        break;         
      case 'gov prototyping kit,pen and paper':
        res.redirect('/computers/gov-prototyping-kit-pen') 
        break;    
      case 'figma,pen and paper':
        res.redirect('/computers/figma-pen') 
        break; 
      case 'figma,gov prototyping kit,pen and paper':
        res.redirect('/computers/figma-gov-pen') 
        break; 
    default:
      res.redirect('/computers/gov-prototyping-kit') 
      break;      
  }

})

module.exports = router
