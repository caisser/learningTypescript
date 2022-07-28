export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId)!, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(...mappable: Mappable[]): void {
    mappable.forEach((obj) => {
      const marker = new google.maps.Marker({
        map: this.googleMap,
        position: obj.location,
      });

      marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
          content: obj.markerContent(),
        });
        infoWindow.open(this.googleMap, marker);
      });
    });
  }
}
