let day = true;
let small = true;

function move() {
    window.location.href = 'letrejotte.html';
}

function daynight() {
    if (day) {
        document.body.style.backgroundColor = "#1e1e1e";
        document.body.style.color = "#fff";
        let items = document.getElementsByClassName("menu-link");
        for (let i = 0; i < items.length; ++i) {
            items[i].style.color = "#fff";
            items[i].parentNode.style.backgroundColor = "#333";
        }
        document.getElementsByClassName("active-a")[0].style.color = "#fff";
        document.getElementsByClassName("active-a")[0].parentNode.style.backgroundColor = "#000";
        document.getElementById("daynight_icon").src = "icons/day.png";
        if (document.getElementById("myTable") != null) {
            document.getElementById("myTable").style.color = "#000";
            document.getElementsByTagName("caption")[0].style.color = "#fff";
        }
        if (document.getElementById("myForm") != null) {
            document.getElementById("myForm").style.color = "#fff";
            let data = document.getElementsByTagName("legend");
            let data2 = document.getElementsByTagName("fieldset");
            for (let i = 0; i < data.length; ++i) {
                data[i].style.color = "#fff";
            }
            for (let i = 0; i < data2.length; ++i) {
                data2[i].style.backgroundColor = "#000";
            }
        }
    }
    else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        let items = document.getElementsByClassName("menu-link");
        for (let i = 0; i < items.length; ++i) {
            items[i].style.color = "#fff";
            items[i].parentNode.style.backgroundColor = "#2C6700";
        }
        document.getElementsByClassName("active-a")[0].style.color = "#000";
        document.getElementsByClassName("active-a")[0].parentNode.style.backgroundColor = "#CCFFCC";
        document.getElementById("daynight_icon").src = "icons/night.png";
        if (document.getElementById("myTable") != null) {
            document.getElementsByTagName("caption")[0].style.color = "#000";
        }
        if (document.getElementById("myForm") != null) {
            document.getElementById("myForm").style.color = "#000";
            let data = document.getElementsByTagName("legend");
            let data2 = document.getElementsByTagName("fieldset");
            for (let i = 0; i < data.length; ++i) {
                data[i].style.color = "#000";
            }
            for (let i = 0; i < data2.length; ++i) {
                data2[i].style.backgroundColor = "#afd3ae";
            }
        }
    }
    day = !day;
}

function smallbig() {
    if (small) {
        document.getElementById("smallbig_icon").src = "icons/small.png";
        let h1s = document.getElementsByTagName("h1");
        for (let i = 0; i < h1s.length; ++i) {
            h1s[i].style.fontSize = "4.5em";
        }
        let h2s = document.getElementsByTagName("h2");
        for (let i = 0; i < h2s.length; ++i) {
            h2s[i].style.fontSize = "3.3em";
        }
        let h3s = document.getElementsByTagName("h3");
        for (let i = 0; i < h3s.length; ++i) {
            h3s[i].style.fontSize = "2.5em";
        }
        let ps = document.getElementsByTagName("p");
        for (let i = 0; i < ps.length; ++i) {
            ps[i].style.fontSize = "1.8em";
        }
        let captions = document.getElementsByTagName("caption");
        for (let i = 0; i < captions.length; ++i) {
            captions[i].style.fontSize = "2.2em";
        }
        let strongs = document.getElementsByTagName("strong");
        for (let i = 0; i < strongs.length; ++i) {
            strongs[i].style.fontSize = "1.3em";
        }
        let summarys = document.getElementsByTagName("summary");
        for (let i = 0; i < summarys.length; ++i) {
            summarys[i].style.fontSize = "1.3em";
        }
        if (document.getElementById("video") != null)
            document.getElementById("video").style.fontSize = "2em";
        let biglis = document.getElementsByClassName("big-li");
        for (let i = 0; i < biglis.length; ++i) {
            biglis[i].style.fontSize = "1.6em";
        }
        let legends = document.getElementsByTagName("legend");
        for (let i = 0; i < legends.length; ++i) {
            legends[i].style.fontSize = "1.9em";
        }
        let buttons = document.getElementsByClassName("button");
        for (let i = 0; i < buttons.length; ++i) {
            buttons[i].style.fontSize = "1.7em";
        }
        let labels = document.getElementsByTagName("label");
        for (let i = 0; i < labels.length; ++i) {
            labels[i].style.fontSize = "1.5em";
        }
        let figcaptions = document.getElementsByTagName("figcaption");
        for (let i = 0; i < figcaptions.length; ++i) {
            figcaptions[i].style.fontSize = "1.5em";
        }
        let forras = document.getElementsByClassName("forras");
        for (let i = 0; i < forras.length; ++i) {
            forras[i].style.fontSize = "1.5em";
        }
        let as = document.getElementsByClassName("a-f");
        for (let i = 0; i < as.length; ++i) {
            as[i].style.fontSize = "1.5em";
        }
        let menulinks = document.getElementsByClassName("menu-link");
        for (let i = 0; i < menulinks.length; ++i) {
            menulinks[i].classList.add("menu-link-big");
        }
        let tds = document.getElementsByTagName("td");
        for (let i = 0; i < tds.length; ++i) {
            tds[i].style.fontSize = "1.6em";
        }
        let ths = document.getElementsByTagName("th");
        for (let i = 0; i < ths.length; ++i) {
            ths[i].style.fontSize = "1.6em";
        }
    }
    else {
        document.getElementById("smallbig_icon").src = "icons/big.png";
        let h1s = document.getElementsByTagName("h1");
        for (let i = 0; i < h1s.length; ++i) {
            h1s[i].style.fontSize = "3em";
        }
        let h2s = document.getElementsByTagName("h2");
        for (let i = 0; i < h2s.length; ++i) {
            h2s[i].style.fontSize = "2.4em";
        }
        let h3s = document.getElementsByTagName("h3");
        for (let i = 0; i < h3s.length; ++i) {
            h3s[i].style.fontSize = "2em";
        }
        let ps = document.getElementsByTagName("p");
        for (let i = 0; i < ps.length; ++i) {
            ps[i].style.fontSize = "1.2em";
        }
        let captions = document.getElementsByTagName("caption");
        for (let i = 0; i < captions.length; ++i) {
            captions[i].style.fontSize = "1.5em";
        }
        let strongs = document.getElementsByTagName("strong");
        for (let i = 0; i < strongs.length; ++i) {
            strongs[i].style.fontSize = "0.9em";
        }
        let summarys = document.getElementsByTagName("summary");
        for (let i = 0; i < summarys.length; ++i) {
            summarys[i].style.fontSize = "0.9em";
        }
        if (document.getElementById("video") != null)
            document.getElementById("video").style.fontSize = "1.4em";
        let biglis = document.getElementsByClassName("big-li");
        for (let i = 0; i < biglis.length; ++i) {
            biglis[i].style.fontSize = "1.1em";
        }
        let legends = document.getElementsByTagName("legend");
        for (let i = 0; i < legends.length; ++i) {
            legends[i].style.fontSize = "1.1em";
        }
        let buttons = document.getElementsByClassName("button");
        for (let i = 0; i < buttons.length; ++i) {
            buttons[i].style.fontSize = "1em";
        }
        let labels = document.getElementsByTagName("label");
        for (let i = 0; i < labels.length; ++i) {
            labels[i].style.fontSize = "1.1em";
        }
        let figcaptions = document.getElementsByTagName("figcaption");
        for (let i = 0; i < figcaptions.length; ++i) {
            figcaptions[i].style.fontSize = "1.1em";
        }
        let forras = document.getElementsByClassName("forras");
        for (let i = 0; i < forras.length; ++i) {
            forras[i].style.fontSize = "1.1em";
        }
        let as = document.getElementsByClassName("a-f");
        for (let i = 0; i < as.length; ++i) {
            as[i].style.fontSize = "1.1em";
        }
        let menulinks = document.getElementsByClassName("menu-link");
        for (let i = 0; i < menulinks.length; ++i) {
            menulinks[i].classList.remove("menu-link-big");
        }
        let tds = document.getElementsByTagName("td");
        for (let i = 0; i < tds.length; ++i) {
            tds[i].style.fontSize = "1.1em";
        }
        let ths = document.getElementsByTagName("th");
        for (let i = 0; i < ths.length; ++i) {
            ths[i].style.fontSize = "1.1em";
        }
    }
    small = !small;
}