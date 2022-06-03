function getBasePath(service) {
    return "https://chilealerta.com/api/query/?user=demo&select=" + service;
}

function createRowDisaster(reference, magnitude, latitude, longitude, local_time) {
    return '<tr><td>' + reference + '</td><td>' + magnitude + '</td><td>' + latitude + '</td><td>' + longitude + '</td><td>' + local_time + '</td></tr>';
}

function createRowDisaster2(post_title, alert_date, alert_region, state) {
    return '<tr><td>' + post_title + '</td><td>' + alert_date + '</td><td>' + alert_region + '</td><td>' + state + '</td></tr>';
}