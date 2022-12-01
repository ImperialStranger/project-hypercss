const pattern = /(#CommonStyle)-(\w+){(.*?)}/g;

function openCSS(url, callback) {
    var cssLoader = new XMLHttpRequest()
    cssLoader.onreadystatechange = function () {
        if (cssLoader.readyState === 4 && cssLoader.status === 200) {
            callback(cssLoader.responseText);
        };
    };
    cssLoader.open('GET', url, true);
    cssLoader.send();
}

function loadCommonStyleElements() { 
    var commonStyleElements = document.querySelectorAll("[useCommonStyle]");
    return commonStyleElements;
 }


function applyCommonStyle() {
    openCSS(commonStyleURL, function (css) {
        var commonStyleElements = loadCommonStyleElements();
        for (var i = 0; i < commonStyleElements.length; i++) { 
            var match = pattern.exec(css);
            if (match) {
                console.log(match);
                var commonStyle = commonStyleElements[i].getAttribute("applyCommonStyle");
                if (commonStyle = match[2]) { commonStyleElements[i].style.cssText = match[3] };
                commonStyleElements[i].removeAttribute("useCommonStyle");
                commonStyleElements[i].removeAttribute("applyCommonStyle");
            }
            else {
                console.error('Match not found');
            }
        }
    })
}

function applyCommnStyleClassSet() {
    var commonStyleElements = loadCommonStyleElements();
    for (var i = 0; i < commonStyleElements.length; i++) {
        var commonStyleClassSetName = commonStyleElements[i].getAttribute("cscSetName");
        var styles = (HStyleObject[commonStyleClassSetName]);
        commonStyleElements[i].classList.add(...styles)
    }
}

function executeAll() { 
    applyCommonStyle();
    applyCommnStyleClassSet();
}

window.addEventListener("load", executeAll);