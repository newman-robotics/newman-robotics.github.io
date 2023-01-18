async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

window.onload = async function(){
    // Headers and footers are loaded into page from their own html files to maintain consistency
    const headerDiv = document.getElementById("header");
    const footerDiv = document.getElementById("footer");
    headerDiv.innerHTML = await fetchHtmlAsText("../presets/header.html");
    footerDiv.innerHTML = await fetchHtmlAsText("../presets/footer.html");
}

function Switch(type)
{
    var menuItem = document.getElementById(type);
    menuItem.classList.add("grp_active");
    var activeItems = document.getElementsByClassName("grp_active");
    for (var i = 0; i < activeItems.length; i++)
    {
        let element = activeItems[i];
        if (element != menuItem)
            element.classList = "list-group-item";
    }

    var people = document.getElementById("grp_" + type);
    people.classList = "ppl_active";
    var activePeople = document.getElementsByClassName("ppl_active");
    for (var i = 0; i < activePeople.length; i++)
    {
        let element = activePeople[i];
        if (element != people)
            element.classList = "none";
    }
}

$(window).on("load", function(){
    $(".loader-wrapper").fadeOut("slow");
});