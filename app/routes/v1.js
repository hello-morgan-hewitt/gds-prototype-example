const { configure } = require("nunjucks");

module.exports = function (router) {
    var version = "v1";

    // already claimed

    router.get('/' + version + '/already-claimed', function (req, res) {

        res.render(version + '/already-claimed', {

            'version': version

        });

    });


    router.post('/' + version + '/already-claimed', function (req, res) {

        if (req.session.data['claimed'] === 'No') {
            res.redirect('/' + version + '/name')
        }

        else {
            res.redirect('/' + version + '/you-cannot-claim')

        }

    })

}