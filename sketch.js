var map = new naver.maps.Map('map', {
  center: new naver.maps.LatLng(37.5112, 127.0981), 
  zoom: 15
});


var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.5112, 127.0981),
  map: map
});