
// 創建地圖並設定中心點與縮放等級
var map = L.map('map').setView([25.033964, 121.564468], 20); // 台北 101 的經緯度

// 添加地圖圖層（OpenStreetMap 作為範例）
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// 添加標記點
var marker = L.marker([25.033964, 121.564468]).addTo(map)
    .bindPopup('這裡是台北 101!')
    //.openPopup();

    var marker2 = L.marker([25.026632206262597, 121.52739790405337]).addTo(map)
    .bindPopup('這裡是師大!')
    //.openPopup();

    var marker3 = L.marker([25.008314587492467, 121.53697329623708]).addTo(map)
    .bindPopup('這裡是師大分部!')
    //.openPopup();

marker.on('click', function () {
    console.log("Click 1");
    infoDiv.textcontent("101介紹");
    alert('你點擊了 Marker！這裡是台北 101 的位置。');
    map.panTo([25.033964, 121.564468]); // 平移到台北 101
});



marker2.on('click', function () {
    console.log("Click 2");
    alert('你點擊了 Marker！這裡是師大的位置。');
    map.panTo([25.02628220891764, 121.52756985187678]); // 平移到台北 101
});

    

marker3.on('click', function () {
    console.log("Click 3");
    alert('你點擊了 Marker！這裡是師大分部的位置。');
    map.panTo([25.008314587492467, 121.53697329623708]); // 平移到台北 101
});


function goPage(){
    window.location.href = "https://mira-ar.n010.app/show/Xxa0Tm";
}
