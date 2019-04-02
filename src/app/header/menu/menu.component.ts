import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScript('../../../assets/js/jquery.min.js');

    this.loadScript('../../../assets/js/popper.min.js');
    this.loadScript('../../../assets/js/bootstrap.min.js');
    this.loadScript('../../../assets/js/uza.bundle.js');
    this.loadScript('../../../assets/js/default-assets/active.js');
    this.loadScript('../../../assets/js/imagesloaded.pkgd.min.js');
    this.loadScript('../../../assets/js/isotope.pkgd.min.js');
    this.loadScript('../../../assets/js/jarallax.min.js');
    this.loadScript('../../../assets/js/jarallax-video.min.js');
    this.loadScript('../../../assets/js/jquery.counterup.min.js');
    this.loadScript('../../../assets/js/jarallax.min.js');
    this.loadScript('../../../assets/js/owl.carousel.min.js');
    this.loadScript('../../../assets/js/wow.min.js');
    this.loadScript('../../../assets/js/waypoints.min.js');
    this.loadScript('../../../assets/js/default-assets/avoid.console.error.js');
    this.loadScript('../../../assets/js/default-assets/classynav.js');
    this.loadScript('../../../assets/js/default-assets/jquery.scrollup.min.js');
    this.loadScript('../../../assets/js/jquery.easing.min.js');
    this.loadScript('../../../assets/js/jquery.magnific-popup.min.js');

  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
