function buildMessage(cosa, lugar) {
    if(cosa && lugar)
        return `Lugares sobre ${cosa} en ${lugar}`;
    return 'datos lugares'
}

module.exports = buildMessage;