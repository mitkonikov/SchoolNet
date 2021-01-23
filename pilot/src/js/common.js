export const queryFetch = body => {
    return fetch(domain() + "query", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => response.json())
    .catch((err) => {
        console.log("Error fetching...");
    });
};

export const graphQL = (body, callback) => {
    fetch(domain() + "graphql", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(response => {
        if (response && response.data) {
            callback(response);
        } else {
            callback(undefined);
        }
    })
    .catch((err) => {
        callback(undefined);
        console.log("Error fetching...");
    });
};

export const domain = () => {
    let loc = window.location.href;
    let atMK = loc.indexOf(".mk");
    return loc.substring(0, atMK + 4);
}