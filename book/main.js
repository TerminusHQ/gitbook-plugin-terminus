require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        $(".book-header").children().slice(3).remove();
    });

    gitbook.events.bind("exercise.submit", function() {
        // do something
    });
});
