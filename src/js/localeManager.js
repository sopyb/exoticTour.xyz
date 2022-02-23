let locales = {
    "ro-RO": {},
    "en-US": {}
}

Object.keys(locales).forEach(key => {
    $.ajax({
        url: `src/localizations/${key}.json`,
        async: false,
        dataType: "json",
        success: (data) => {
            locales[key] = data
        }
    })
})


$(document).ready(() =>  {
    let language = localStorage.getItem("lang");
    if (!language) {
        language = "ro-RO"
        localStorage.setItem("lang", "ro-RO");
    }

    $('a[onload]').trigger('onload');
})

function changeLang(locale) {
    if (["ro-RO", "en-US"].includes(locale)) localStorage.setItem("lang", locale);
    location.reload()
}

function getLocaleString(string) {
    return locales[localStorage.getItem("lang")][string]
}