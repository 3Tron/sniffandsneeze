function iso() {
    const d = new Date();
    return `${d.getUTCFullYear()}-${(d.getUTCMonth() + 1)}-${d.getUTCDate()}T${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`;
}
module.exports = { iso };