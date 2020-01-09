import {MDCRipple} from '@material/ripple/index';

$(document).ready(function() {
    $("#search-box").keyup(function (event) {
        if (event.keyCode == 13) {
            search();
        }
    });

    $("#search-icon").click(search);

    buildPost({
        Title: "САКАМ",
        Content: "САКАМ е платформа на SchoolNet која на секој ученик му дава збор за да се искаже и да гласа за најдобрата идеа.",
        Color: "#3b8760"
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
                clearDOM("search-results");
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
    let profileImage = document.createElement('img'); 
    profileImage.src = '/client/static/img/profile.png'; 

    let searchResultCardSmall = createDIV("search-result-card-small");
    searchResultCardSmall.id = "search-result-" + data.ID;
    let MDC_Card = createDIV("mdc-card");
    MDC_Card.classList.add("mdc-ripple-upgraded");
    let MDC_Card_Action = createDIV("mdc-card__primary-action");

    let searchResultCardSmallBg = createDIV("search-result-card-small-bg");
    let searchResultProfilePicture = createDIV("search-result-profile-picture");
    searchResultProfilePicture.appendChild(profileImage);
    let searchResultName = createDIV("search-result-name");
    searchResultName.innerHTML = data.Firstname + " " + data.Lastname;

    searchResultCardSmallBg.appendChild(searchResultProfilePicture);
    searchResultCardSmallBg.appendChild(searchResultName);
    MDC_Card_Action.appendChild(searchResultCardSmallBg);
    MDC_Card.appendChild(MDC_Card_Action);
    searchResultCardSmall.appendChild(MDC_Card);

    const rippleCard = new MDCRipple(MDC_Card);
    const rippleAction = new MDCRipple(MDC_Card_Action);

    document.getElementById("search-results").appendChild(searchResultCardSmall);

    $("#search-result-" + data.ID).click(() => {
        window.location = "/user/" + data.Nickname;
    });
}

function noResultsCard() {
    let searchResultCardSmall = createDIV("search-result-card-small");
    let MDC_Card = createDIV("mdc-card");
    MDC_Card.classList.add("mdc-ripple-upgraded");
    let MDC_Card_Action = createDIV("mdc-card__primary-action");

    let searchResultCardSmallBg = createDIV("search-result-card-small-bg");
    let searchResultName = createDIV("search-result-no-result-text");
    searchResultName.innerHTML = "No results.";

    searchResultCardSmallBg.appendChild(searchResultName);
    MDC_Card_Action.appendChild(searchResultCardSmallBg);
    MDC_Card.appendChild(MDC_Card_Action);
    searchResultCardSmall.appendChild(MDC_Card);

    clearDOM("search-results");

    const rippleCard = new MDCRipple(MDC_Card);
    const rippleAction = new MDCRipple(MDC_Card_Action);

    document.getElementById("search-results").appendChild(searchResultCardSmall);
}

function buildPost(data) {
    clearDOM("posts");

    let postCardSmall = createDIV("post-card-small");
    postCardSmall.id = data.ID;
    let MDC_Card = createDIV("mdc-card");
    MDC_Card.classList.add("mdc-ripple-upgraded");
    let MDC_Card_Action = createDIV("mdc-card__primary-action");

    let postCardSmallBg = createDIV("post-card-small-bg");
    postCardSmallBg.style.backgroundColor = data.Color;

    let postTitle = createDIV("post-title");
    postTitle.innerHTML = data.Title;
    postTitle.style.fontFamily = "Roboto-Bold";

    let postContent = createDIV("post-content");
    postContent.innerHTML = data.Content;

    postCardSmallBg.appendChild(postTitle);
    postCardSmallBg.appendChild(postContent);
    MDC_Card_Action.appendChild(postCardSmallBg);
    MDC_Card.appendChild(MDC_Card_Action);
    postCardSmall.appendChild(MDC_Card);
    
    const rippleCard = new MDCRipple(MDC_Card);
    const rippleAction = new MDCRipple(MDC_Card_Action);

    document.getElementById("posts").appendChild(postCardSmall);
}