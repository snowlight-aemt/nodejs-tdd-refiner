function refineText(s, options) {
    s = s
        .replace("    ", " ")
        .replace("\t", " ")
        .replace("  ", " ")
        .replace("  ", " ")
        .replace("  ", " ")
        .replace("mockist", "*******")
        .replace("purist", "******");

    if (options) {
        for (const bennedWord of options.bannedWords) {
            s = s.replace(bennedWord, "*".repeat(bennedWord.length));
        }
    }


    return s;
}

module.exports =refineText;