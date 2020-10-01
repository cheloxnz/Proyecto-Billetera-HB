 
function isAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.status(401).send('Deberias loguearte');
	}
}
module.exports = {isAuthenticated};