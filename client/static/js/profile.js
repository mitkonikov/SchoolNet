$(document).ready(function() {
    // GET BASIC PROFILE INFO
    let URL = window.location.href;
    let BASIC_INFO;
    let USER = "";
    if (URL.includes("user")) {
        let userSearchedSplit = URL.split('/');
        let userSearched = userSearchedSplit[userSearchedSplit.length - 1];       
        
        USER = userSearched;

        getBasicProfileInfo({
            command : 'get-info-user',
            data: {
                Nickname: userSearched
            }
        }).then(setBasicInfo);
    } else {
        // GET INFO FOR MYSELF
        getBasicProfileInfo({
            command : 'get-info-me'
        }).then(setBasicInfo);
    }

    $("#follow-button").click(() => {
        postAjax('update', {
            command: "follow-user",
            data: {
                Following_User: USER
            }
        }).then((resolve) => {
            console.log(resolve);
            if (resolve.status === "followed") {
                $("#follow-button-text").text("UNFOLLOW");
            } else if (resolve.status === "unfollowed") {
                $("#follow-button-text").text("FOLLOW");
            }
        });
    });
});

function setBasicInfo(BASIC_INFO) {
    console.log(BASIC_INFO);

    if (BASIC_INFO["Following"]) {
        $("#follow-button-text").text("UNFOLLOW");
    }

    if (BASIC_INFO["Role"] == "1") {
        $("#gotoDashboard").slideDown();
    }

    $("#profile-name").text(BASIC_INFO["Display_Name"]);
    if (BASIC_INFO["About"] != "") $("#profile-desc").text(BASIC_INFO["About"]);
    NAME =  $("#profile-name").text();
    ABOUT = $("#profile-desc").text();
}