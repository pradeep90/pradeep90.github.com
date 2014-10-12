$(function() {
  window.refresh = function () {
    // header links
    $('body').find('h1, h2, h3, h4, h5').each(function() {
      var $id = $(this).attr('id');
      var $text = $(this).text();

      $(this)
        .html('')
        .prepend('<span class="hash">#</span>')
        .append('<a href="#' + $id + '" class="header-link">' + $text + '</a>');
    });
  };

  window.refresh();
});
