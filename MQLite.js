
function MQLite() {
	this.queue = [];
};

MQLite.prototype.push = function (value) {
	if (Array.isArray(value))
		this.queue = this.queue.concat(value);
	else
		this.queue.push(value);
};

MQLite.prototype.pop = function (count) {

	if (this.queue.length === 0) return null;

	if (!count || count === 1)
		return  [this.queue.shift()];

	if (count > this.queue.length)
		count = this.queue.length;

	return this.queue.splice(0, count);

};

module.exports = MQLite;
