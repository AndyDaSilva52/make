function getSkuDetails(arrayItems) {

    const xhr = new XMLHttpRequest();

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader(
        "Authorization",
        base64(connection.username + ":" + connection.password)
    );

    xhr.open("POST", connection.apiUrl, true);
    xhr.send(JSON.stringify("985347"));

    xhr.onreadystatechange = e => {
        return (xhr.responseText);
    };
}