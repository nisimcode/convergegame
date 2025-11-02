export function saveAnswer(week, riddleId, answer) {
    const key = `converge_week${week}_answers`;
    const current = JSON.parse(localStorage.getItem(key) || '{}');
    current[riddleId] = answer.toUpperCase();
    localStorage.setItem(key, JSON.stringify(current));
}

export function getAnswers(week) {
    const key = `converge_week${week}_answers`;
    return JSON.parse(localStorage.getItem(key) || '{}');
}

export function saveWeeklyAnswers(week, answers) {
    const key = `converge_week${week}_weekly`;
    localStorage.setItem(key, JSON.stringify(answers));
}

export function getWeeklyAnswers(week) {
    const key = `converge_week${week}_weekly`;
    return JSON.parse(localStorage.getItem(key) || '{}');
}

export function saveMetaAnswer(week, answer) {
    const key = `converge_week${week}_meta`;
    localStorage.setItem(key, answer.toUpperCase());
}

export function getMetaAnswer(week) {
    const key = `converge_week${week}_meta`;
    return localStorage.getItem(key) || '';
}

export function getCurrentWeek() {
    return parseInt(localStorage.getItem('converge_current_week') || '0');
}

export function setCurrentWeek(week) {
    localStorage.setItem('converge_current_week', week.toString());
}
