$file.getUrl("/a/leak/form.html", function(url) {
    $window({
        url: url,
        title: "HTML5 Form Elements",
      	width: 400,
      	height: 410,
    })
})