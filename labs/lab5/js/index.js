function showSection(section) {
    hideOtherSections(section);
    let selectedSection = document.getElementById(section.id);
    /* selectedSection.className === 'hidden' ? selectedSection.className = 'visible' : selectedSection.className = "hidden"; */
    if (selectedSection.className === 'hidden')
        selectedSection.className = 'visible';
}

function hideOtherSections(visibleSection) {
    let sections = ['pizza', 'sandwich', 'drink'];

    for (const section of sections) {
        if (visibleSection.id != section)
            document.getElementById(section).className = 'hidden';
    }
}