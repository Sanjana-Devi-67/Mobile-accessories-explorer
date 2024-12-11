    /* let mapApi=mapApi;
    console.log(mapApi); */
    // maptilersdk.config.apiKey =mapApi ;
    // const map = new maptilersdk.Map({
    //   container: 'map', // container's id or the HTML element in which the SDK will render the map
    //   style: maptilersdk.MapStyle.STREETS,
    //   center: [77.5937,12.9719 ], // starting position [lng, lat]
    //   zoom: 9// starting zoom
    // });
    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [77.5937, 12.9719], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });

    
    const marker = new mapboxgl.Marker({color:"red"})
        .setLngLat([77.5937, 12.9719])
        .addTo(map);