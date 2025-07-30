var config = {
    style: 'mapbox://styles/namanxshah/cmdlk1y3t002s01s98w1o84yl',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibmFtYW54c2hhaCIsImEiOiJjbWMwMml6YjgxeXNqMmtxdWdyMXdhNmVjIn0.OWMNWtNI4Y8Wt4drnGtM7g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    //title: 'New York City Subway Access',
    //subtitle: 'The Storytelling Template helps you create an awesome animated map story with ease.',
    //byline: 'By a I.M. Amapper',
    //footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            //title: 'New York',
            //image: './assets/san-fran.jpeg',
            description: 'This is my neighbourhood, Sector 19 in Noida.',
            location: {
                center: [77.319027, 28.578866],
                zoom: 15,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'Sector 19',
                    opacity: 0.5,
                    duration: 500
                 }
            ],
            onChapterExit: [           ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            //title: 'Washington, D.C.',
            //image: './assets/washington-dc.jpg',
            description: "Proximity to <span style='background-color: #15F5BA; color: #211951; padding: 2px 6px; border-radius: 3px;'>commercial offices</span> and <span style='background-color: #15F5BA; color: #211951; padding: 2px 6px; border-radius: 3px;'>marketplaces</span> makes it a convenient address for many outstation employees like me. And it is right next to the national capital <span style='background-color: #bccbd7; color: #211951; padding: 2px 6px; border-radius: 3px;'>New Delhi</span>. The <span style='background-color: #24c5ff; color: #211951; padding: 2px 6px; border-radius: 3px;'>suburban metro station</span>, too, is a stone's throw away.",
            location: {
                center: [77.305019, 28.579441],
                // center: [77.319027, 28.578866],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                 layer: 'Commercial',
                 opacity: 0.5,
                 duration: 500
                },
                {
                 layer: 'Delhi',
                 opacity: 0.5,
                 duration: 500
                },
                {
                 layer: 'Metro',
                 opacity: 0.7,
                 duration: 500
                }
            ],
            onChapterExit: [
                 {
                 layer: 'Commercial',
                 opacity: 0,
                },
                {
                 layer: 'Delhi',
                 opacity: 0,
                },
                {
                 layer: 'Metro',
                 opacity: 0,
                 duration: 500
                }
            ]
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            //title: 'Buenos Aires',
            //image: './assets/buenos-aires.jpg',
            description: "As of 26 July, 2025, there are <span style='background-color: #15F5BA; color: #211951; padding: 2px 6px; border-radius: 3px;'>23 houses</span> in Sector 19 which are listed for rent on the housing website <a href='https://nobroker.in' target='_blank'; text-decoration: underline;'>nobroker.in</a>.",
            location: {
                center: [77.320730, 28.580360],
                zoom: 15.5,
                pitch: 30,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                 layer: 'Houses',
                 opacity: 1,
                 duration: 500
                } 
            ],
            onChapterExit: [
               {
                 layer: 'Houses',
                 opacity: 0,
                 duration: 500
                }  
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            //title: 'Buenos Aires',
            //image: './assets/buenos-aires.jpg',
            description: "<span style='background-color: #26d4f2; color: #211951; padding: 2px 6px; border-radius: 3px;'>Ten</span> of these 23 houses prefer renting to a family. <span style='background-color: #d56ef2; color: #211951; padding: 2px 6px; border-radius: 3px;'>Seven</span> want to rent to bachelors (two of these listings specified female bachelors, one mentioned males, and four didn’t mention any gender). Just <span style='background-color: #15F5BA; color: #211951; padding: 2px 6px; border-radius: 3px;'>six</span> are open to tenants with any marital status.",
            location: {
                center: [77.320730, 28.580360],
                zoom: 15.5,
                pitch: 30,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                 layer: 'Open for all',
                 opacity: 1,
                 duration: 500
                },
                {
                 layer: 'Family',
                 opacity: 1,
                 duration: 500
                },
                {
                 layer: 'Bachelors',
                 opacity: 1,
                 duration: 500
                } 
            ],
            onChapterExit: [
                {
                 layer: 'Open for all',
                 opacity: 0,
                 duration: 500
                },
                {
                 layer: 'Family',
                 opacity: 0,
                 duration: 500
                },
                {
                 layer: 'Bachelors',
                 opacity: 0,
                 duration: 500
                }  
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            //title: 'Buenos Aires',
            //image: './assets/buenos-aires.jpg',
            description: "And of these six houses, <span style='background-color: #acb8c1; color: #211951; padding: 2px 6px; border-radius: 3px;'>two</span> won’t rent to meat-eating tenants.<br><br>So effectively, just <span style='background-color: #15F5BA; color: #211951; padding: 2px 6px; border-radius: 3px;'>four</span> out of 23 houses available for rent in my neighbourhood are open to all kinds of tenants.",
            location: {
                center: [77.320730, 28.580360],
                zoom: 15.5,
                pitch: 30,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                 layer: 'Vegetarian',
                 opacity: 1,
                 duration: 500
                },
                {
                 layer: 'Open for all',
                 opacity: 1,
                 duration: 500
                }
            ],
            onChapterExit: [
                {
                 layer: 'Vegetarian',
                 opacity: 0,
                 duration: 500
                },
                {
                 layer: 'Open for all',
                 opacity: 0,
                 duration: 500
                },
            ]
        }
    ]
};
