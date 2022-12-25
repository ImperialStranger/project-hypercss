function applyStyleClasses() {
    var target_elements = document.querySelectorAll("[applyStyleClassSet]");
    for (let i = 0; i < target_elements.length; i++) {
        var classSetName = target_elements[i].getAttribute("applyStyleClassSet");
        var classSet = (HCSS_STYLE_CLASS_SETS[classSetName]);
        target_elements[i].classList.add(...classSet);
    }
}
window.addEventListener("load", function () {
    applyStyleClasses();
});
