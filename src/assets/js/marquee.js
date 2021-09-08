$(function() {
    $('.marquee-left').marquee({
      duration: 15000,
      startVisible: true,
      duplicated: true,
      direction: 'right'
    });
    $('.marquee-right').marquee({
      duration: 15000,
      startVisible: true,
      duplicated: true,
      direction: 'left'
    });
});