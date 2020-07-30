$file.getUrl("/a/leak/colors.html", function(url) {
    $window({
        url: url,
        title: "Color"
    })
})