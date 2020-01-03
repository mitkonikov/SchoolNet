
$(document).ready(function() {
    $("#search-box").keyup(function (event) {
        if (event.keyCode == 13) {
            search();
        }
    });

    $("#search-icon").click(search);

    buildPost({
        Title: "САКАМ",
        Content: "САКАМ е платформа на SchoolNet која на секој ученик му дава збор за да се искаже и да гласа за најдобрата идеа."
    });
});

function search() {
    let searchQuery = $("#search-box").val();
    if (searchQuery.trim() != "") {
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

function buildPost(data) {
    clearDOM("posts");

    postCardSmall = createDIV("post-card-small");
    postCardSmall.id = data.ID;
    MDC_Card = createDIV("mdc-card");
    MDC_Card.classList.add("mdc-ripple-upgraded");
    MDC_Card_Action = createDIV("mdc-card__primary-action");

    postCardSmallBg = createDIV("post-card-small-bg");
    postCardSmallBg.style.backgroundColor = "#3b8760";

    postTitle = createDIV("post-title");
    postTitle.innerHTML = data.Title;

    postContent = createDIV("post-content");
    postContent.innerHTML = data.Content;

    postCardSmallBg.appendChild(postTitle);
    postCardSmallBg.appendChild(postContent);
    MDC_Card_Action.appendChild(postCardSmallBg);
    MDC_Card.appendChild(MDC_Card_Action);
    postCardSmall.appendChild(MDC_Card);

    document.getElementById("posts").appendChild(postCardSmall);
}