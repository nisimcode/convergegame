import md5 from 'crypto-js/md5';

export function validateAnswer(userAnswer, correctHash) {
    const normalized = userAnswer.toLowerCase().trim();
    const userHash = md5(normalized).toString();
    return userHash === correctHash;
}

export function hashAnswer(answer) {
    return md5(answer.toLowerCase().trim()).toString();
}
