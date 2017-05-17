$(document).ready(function() {
  SetupImageCaptions();
});

function SetupImageCaptions()
{
  var images = $('.post-content img');

  if(!images.length) return;


  images.wrap('<div class="img-wrapper"></div>');

  for(var i = 0; i < images.length; i++) {
    var image = images.eq(i);
    var caption = image.attr('caption') || image.attr('');
    var alt = image.attr('alt');


    if(!caption && !alt) continue;
    if(!caption && alt) caption = alt;

    var parent = image.parent();
    var imageStyle = image.attr('style');
    var width = image.width();

    //put the given style for the image onto the new parent
    image.attr('style', '');   
    parent.attr('style', imageStyle);

    //add our element to hold the caption
    parent.append('<div class="caption">' + caption + '</div>');
  }
}