/**
 * Rider_pointsController
 *
 * @description :: Server-side logic for managing Rider_points
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	find: function(req, res, next) {

        var id = req.param('id');

        var idShortCut = isShortcut(id);

        if (idShortCut === true) {
            return next();
        }

        if (id) {

                Rider_positions.find({rider_id: id}, function(err, points){
                	if(points === undefined) return res.notFound();

                	if(err) return next(err);

                	var riderPoints = {'id': points[0].id, 'total': 0};
                	var total = 0;
                	for (var i = points.length - 1; i >= 0; i--) {
                		var score = points[i].score;
                		console.log(score);
                		total += score;
                	};
                	riderPoints.total = total;
                	res.json(riderPoints);
                });
                

            }else {

            var where = req.param('where');

            if (_.isString(where)) {
                where = JSON.parse(where);
            }

            var options = {
                limit: req.param('limit') || undefined,
                skip: req.param('skip') || undefined,
                sort: req.param('sort') || undefined,
                where: where || undefined
            };

            Rider_points.query('SELECT sum(score)AS total_points, rider_id, name FROM rider_positions JOIN riders ON riders.id = rider_positions.rider_id GROUP BY rider_id, name', function(err, riders) {

                if (riders === undefined) return res.notFound();

                if (err) return next(err);

                res.json(riders);

            });

        }

        function isShortcut(id) {
            if (id === 'find' || id === 'update' || id === 'create' || id === 'destroy') {
                return true;
            }
        }

    }
};

