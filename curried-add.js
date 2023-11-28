function curriedAdd(total = null) {
    if (!total) return 0

    function add(num = null) {
        if (!num) {
            return total
        }
        total += num
        return add
    }

    return add


}

module.exports = { curriedAdd };
