function setCss(css) {
    var head,
        styleElem = doc.createElement('style');

    styleElem.setAttribute('type', 'text/css');
    if (styleElem.styleSheet) { // IE
        styleElem.styleSheet.cssText = css;
    } else { // non-IE
        styleElem.appendChild(doc.createTextNode(css));
    }

    head = doc.getElementsByTagName('head')[0];

    // Our default CSS should be over-riden if hosting page want its own style. So, we put it
    // at begginning of head element instead of tail of head.
    head.insertBefore(styleElem, head.firstChild);
}


