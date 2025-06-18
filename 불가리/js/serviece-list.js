$(function(){
  var $list = $('.event-list');
  var isDragging = false;
  var startPos, scrollLeft;
  
  $list.mousedown(function(e){
      isDragging = true;
      startPos = e.pageX - $list.offset().left;
      scrollLeft = $list.scrollLeft();
      $list.css('cursor', 'grabbing');
  });
  
  $(document).mousemove(function(e){
      if(!isDragging) return;
      e.preventDefault();
      var x = e.pageX - $list.offset().left;
      $list.scrollLeft(scrollLeft - (x - startPos));
  });
  
  $(document).mouseup(function(){
      isDragging = false;
      $list.css('cursor', 'grab');
  });
});