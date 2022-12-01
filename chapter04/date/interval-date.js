function getIntervalDate(day) {
    let now = new Date();
    let dayMilliseconds = 60 * 60 * 24 * 1000;
    return new Date(now.getTime() + (dayMilliseconds * day));
}