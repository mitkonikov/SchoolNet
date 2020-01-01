
$(document).ready(function() {
    $("#search-box").keyup(function (event) {
        if (event.keyCode == 13) {
            search();
        }
    });

    $("#search-icon").click(search);
});

function search() {
	postAjax('query', {
		command: 'search-request',
		data: $("#search-box").val()
	}).then((resolve) => {
        if (resolve.length > 0) {
            for (let tag of resolve) {
                buildSearchCard(tag);
            }
        } else {
            noResultsCard();
        }
	});
}

function buildSearchCard(data) {
    clearDOM("search-results");

    var profileImage = document.createElement('img'); 
    profileImage.src = '/client/static/img/profile.png'; 

    searchResultCardSmall = createDIV("search-result-card-small");
    searchResultCardSmall.id = data.ID;
    MDC_Card = createDIV("mdc-card");
    MDC_Card.classList.add("mdc-ripple-upgraded");
    MDC_Card_Action = createDIV("mdc-card__primary-action");
    searchResultCardSmallBg = createDIV("search-result-card-small-bg");
    searchResultProfilePicture = createDIV("search-result-profile-picture");
    searchResultProfilePicture.appendChild(profileImage);
    searchResultName = createDIV("search-result-name");
    searchResultName.innerHTML = data.Firstname + " " + data.Lastname;

    searchResultCardSmallBg.appendChild(searchResultProfilePicture);
    searchResultCardSmallBg.appendChild(searchResultName);
    MDC_Card_Action.appendChild(searchResultCardSmallBg);
    MDC_Card.appendChild(MDC_Card_Action);
    searchResultCardSmall.appendChild(MDC_Card);

    document.getElementById("search-results").appendChild(searchResultCardSmall);
}

function noResultsCard() {
    searchResultCardSmall = createDIV("search-result-card-small");
    MDC_Card = createDIV("mdc-card");
    MDC_Card.classList.add("mdc-ripple-upgraded");
    MDC_Card_Action = createDIV("mdc-card__primary-action");
    searchResultCardSmallBg = createDIV("search-result-card-small-bg");
    searchResultName = createDIV("search-result-no-result-text");
    searchResultName.innerHTML = "No results.";

    searchResultCardSmallBg.appendChild(searchResultName);
    MDC_Card_Action.appendChild(searchResultCardSmallBg);
    MDC_Card.appendChild(MDC_Card_Action);
    searchResultCardSmall.appendChild(MDC_Card);

    clearDOM("search-results");

    document.getElementById("search-results").appendChild(searchResultCardSmall);
}