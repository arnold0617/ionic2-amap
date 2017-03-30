

import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { IssuesPage } from '../issues/issues';
import { SiteInfoPage } from '../site-info/site-info';


declare var AMap;

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    public map: any;

    constructor(public navCtrl: NavController) {
    }

    setMarkers() {
        var appliances = [
            {
                "name": "nbapp-release: 3.0\n model: 5340\n IP: 10.200.78.90",
                "center": "116.33111715,39.99601054",
                "type": 1,
                "subDistricts": []
            },
            {
                "name": "nbapp-release: 3.0\n model: 5240\n IP: 10.200.78.91",
                "center": "116.33023739,39.99601054",
                "type": 1,
                "subDistricts": []
            },
            {
                "name": "nbapp-release: 3.0\n model: 5230\n IP: 10.200.5.194",
                "center": "116.41693175,39.90991729",
                "type": 3,
                "subDistricts": []
            },
            {
                "name": "nbapp-release: 3.0\n model: 5330\n IP: 10.200.172.232",
                "center": "104.065735,30.659462",
                "type": 1,
                "subDistricts": []
            }
        ];


        var markers = [];
        for (var i = 0; i < appliances.length; i += 1) {
            var marker;
            if (appliances[i].type === 4) {
                var icon = new AMap.Icon({
                    image: 'http://vdata.amap.com/icons/b18/1/2.png',
                    size: new AMap.Size(24, 24)
                });

                marker = new AMap.Marker({
                    icon: icon,
                    position: appliances[i].center.split(','),
                    offset: new AMap.Pixel(-12,-12),
                    zIndex: 101,
                    title: appliances[i].name,
                    map: this.map
                });
            }

            if (appliances[i].type === 1) {
                marker = new AMap.Marker({
                    position: appliances[i].center.split(','),
                    title: appliances[i].name,
                    map: this.map
                });
            }

            if (appliances[i].type === 2) {
                    var content= "<div class = 'taiwan'>Ã¥Â®ÂÃ¥Â²â€ºÃ¥ÂÂ°Ã¦Â¹Â¾</div>";
                    var baodao = new AMap.Marker({
                        content: content,
                        position: appliances[i].center.split(','),
                        title: appliances[i].name,
                        offset: new AMap.Pixel(0,0),
                        map: this.map
                    });
            }

            // appliance error
            if (appliances[i].type === 3) {
                var icon = new AMap.Icon({
                    image: "../assets/img/red_waterdrop.png",
                    size: new AMap.Size(24, 24),
                    imageSize: new AMap.Size(24, 24)
                });

                marker = new AMap.Marker({
                    icon: icon,
                    position: appliances[i].center.split(','),
                    offset: new AMap.Pixel(-12,-12),
                    zIndex: 101,
                    title: appliances[i].name,
                    clickable: true,
                    map: this.map
                });

                AMap.event.addListener(marker, 'click', (e) => {
                    //this.navCtrl.setRoot(IssuesPage);
                    this.navCtrl.push(IssuesPage);
                });
            }

            markers.push(marker);
        }

        this.map.setFitView();
    }

    loadMap() {

        this.map = new AMap.Map('container', {
            resizeEnable: true,
            zoom: 8,
            center: [116.39,39.9]
        });
    }

    ionViewDidLoad() {
        this.loadMap();
        this.setMarkers();
    }
}
