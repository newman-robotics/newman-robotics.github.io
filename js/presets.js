function GoToGithub()
{
    window.location.href = "https://github.com/newman-robotics";
}

function GoToEmail()
{
    window.location.href = "mailto:clockworkcardinals9725@gmail.com";
}

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