import { defineStore } from "pinia";

export const services = defineStore("services", {
  state: () => ({
    pageindex: 0,
    services: {
      archeology: {
        title: "Archeology",
        description: "Suchman Consulting offers a full range of geoarchaeology studies. Our team uses a variety of earth sciences methodologies to help enhance our understanding of the archaeological record and assess the potential for buried cultural resources within your project area.",
        serviceInfo:{
          mainHeader: 
            "Archeological services",
          headers: [''],
          articles:[[
            "Searching for high-resolution aerospace images in the research area and deciphering them (probable separation of archaeological zones)",
            "GPS of archaeological objects during field reconnaissance Marking with coordinates.",
            "Creating a GIS project and integrating existing spatial data",
            "Based on the results of aerial and field-archaeological reconnaissance, Preparation of large and medium-scale thematic maps.",        
            "Aerial photogrammetric surveying using GPS points gives us 2 different products: orthophoto and relief surface Digital model. Resolution depends on shooting height and It varies within 1 - 20 cm. Geographical accuracy is absolute in coordinates < 0.5 m.",
            "Multispectral aerial photography of the infrared range sensor additionally. Different types of pseudo-color images are obtained and Different types of indices (eg vegetation index).",
            "Archaeological supervision during the construction period.",
            "Photogrammetric 3D fixation of the archaeological excavation site By shooting in the field, detailed 3D models, plans and cuts by building"
            ]]
        }
         
      },
      geophysics: {
        title: "Geophysics",
        description: "we can precisely mark the position and depth of various underground utilities, including gas, communications, and sewer lines as well as underground storage tanks and PVC pipes. Our team can provide a high-quality report within an understandable time frame depending on the size of your project",
        serviceInfo:{
          mainHeader: "Geophysical services",
          headers: [            
            "Seismics",
            "Electrical search work",
            "Drilling of wells and description",
          ],
          articles:[            
            ["The task of geophysical (seismic profiling) research is to study the properties of the ground Determination by the method of seismic, refracted waves: longitudinal (Vp) and transversal (Vs) Determination of propagation velocities of elastic waves for geological layers. Determination of the soil category of the study area, determination of Vs 30 - Vs 60. German company DMT Group seismic is used for the work Recorder Summit X one, 48 pieces GS-20DX type 10 Hz seismic waves Counter with geophones (sensors)."
            ],
            ["The electrical impedance tomography method of ground impedance measurement By means, it gives us the opportunity to: research water resources, and soil Identify features, and look for gaps. Using the method as well It is possible to determine the suitability of the land for construction and for them To determine safety standards. DMT Group RECESS recording device with 24 electrodes is used. The hardware allows it to be used for recording various Configurations: Wenner, Schlumberger, Dipole-Dipole, also by user Other configurations defined.",
            ],
            ["geotechnical and engineering drilling;",
            "Water drilling",        
            "Logging (optical and acoustic scanning, gamma,temperature ....); of Kearneyfull description;",
            "Laboratory research of core samples;"
            ],
          ]
        }
      },
      geology: {
        title: "Geology",
        description: "We provide geoscientific assessment of geological resources. Our team has extensive experience in assessing the natural resources. Our team provides industry-recognised expertise across a broad range of commodities, including; aggregates and industrial minerals, metallic minerals, hydrocarbons, and much more.",
        serviceInfo:{
          mainHeader:"Geological services",
          headers: [''],  
          articles:[
            ["Engineering geology, structural geology, geotechnics, hydrogeology, hydrology;",
            "Water drilling;",
            "Soil Laboratory Research;",
            "Logging, complete description of the soil.",        
            "Geotechnical and engineering drilling;",
            ]
          ]
        }
      },     
      geodesy: {
        title: "Geodesy",
        description: "Topographic and Cadastral measurements, Monitoring of works, Registration of rights, GIS - geoinformation systems, Digital aerial photography and cartography using drones, ultispectral imaging, (bathygraphic) Bottom depth scan, building a bathygraphic depth map.",
        serviceInfo:{
          mainHeader:"Geodesy Services",
          headers: [''],
          articles:[[
            "Topographic measurements;",
            "Cadastral measurements;",
            "GIS - geoinformation systems;",
            "Digital aerial photography and cartography using drones;",        
            "Multispectral imaging;",
            "Building a bathygraphic (bottom depth) map;"
          ]]
        }
      },
    },
  }),
  actions: {
  },
});
