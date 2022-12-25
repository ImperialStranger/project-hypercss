// TODO: Apply several style classes of HyperCSS to the targeted elements through 'applyStyleClassSets'
// * classSet contains the CSS classes as a set. Example: text-center, align-center
// * Visit https://github.com/ImperialStranger/project-hypercss/doc/js/ for documentation

function applyStyleClassSets() {
    var target_elements = document.querySelectorAll("[applyStyleClassSet]");
    // * 'target_elements' here are the users of CSS classes
    for (let i = 0; i < target_elements.length; i++) {
        var classSetName = target_elements[i].getAttribute("applyStyleClassSet");
        var classSet = (HCSS_STYLE_CLASS_SETS[classSetName]);
        target_elements[i].classList.add(...classSet);
    }
}

window.addEventListener("load", function () {
    applyStyleClassSets();
})