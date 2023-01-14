function refineText(source, options) {
    return [normalizeWhiteSpaces, compactWhitespaces, maskBannedWords]
        .reduce((value, filter) => filter(value ,options), source);
}

function normalizeWhiteSpaces(source) {
    return source.replace("\t", " ");
}

function compactWhitespaces(source) {
    return source.indexOf('  ') === -1 
        ? source 
        : compactWhitespaces(source.replace("  ", " "));
}

function maskBannedWords(source, options) {
    return options 
        ? options.bannedWords.reduce(maskBannedWord, source) 
        : source;
}

function maskBannedWord(source, bennedWord) {
    const make = "*".repeat(bennedWord.length);
    return source.replace(bennedWord, make);
}

module.exports =refineText;