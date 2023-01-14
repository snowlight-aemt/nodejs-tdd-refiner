function refineText(source, options) {
    source = normalizeWhiteSpaces(source);
    source = compactWhitespaces(source);
    source = maskBannedWords(source, options);

    return source;
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
    if (options) {
        for (const bennedWord of options.bannedWords) {
            source = source.replace(bennedWord, "*".repeat(bennedWord.length));
        }
    }
    return source;
}

module.exports =refineText;