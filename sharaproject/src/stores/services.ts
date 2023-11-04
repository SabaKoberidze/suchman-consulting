import { defineStore } from "pinia";
import { $t } from "../plugins/i18n";

export const services = defineStore("services", {
  state: () => ({
    pageindex: 0,
    services: {
      geophysics: {
        title: $t('Geophysics'),     
        serviceInfo:{
          headers: [            
            $t('GeophysicsHeader1')  
          ],
          articles:[  
            [
              $t('GeophysicsArticle1-1'),
              $t('GeophysicsArticle1-2'),
              $t('GeophysicsArticle1-3'),
              $t('GeophysicsArticle1-4'),
              $t('GeophysicsArticle1-5'),
              $t('GeophysicsArticle1-6')
            ]                    
          ]
        }
      },
      geotechnics: {
        title: $t('GeoTechnics'),
        serviceInfo:{
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
        title: $t('Geology'),
        serviceInfo:{
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
        title: $t('Geodesy'),
          serviceInfo:{
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
      supervising: {
        title: $t('Supervising'),
        serviceInfo:{              
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
      archeology: {
        title: $t('Archeology'),
        serviceInfo:{
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
    },
   
  }),
  actions: {
    setNewLocale(){
      this.services = {         
          geophysics: {
            title: $t('Geophysics'),
            serviceInfo:{
              headers: [            
                $t('GeophysicsHeader1'),
                $t('GeophysicsHeader2'),
                $t('GeophysicsHeader3'),
                $t('GeophysicsHeader4'),
                $t('GeophysicsHeader5'),
                $t('GeophysicsHeader6'),
                $t('GeophysicsHeader7'),
                $t('GeophysicsHeader8'),
                $t('GeophysicsHeader9'),
              ],
              articles:[  
                [
                  $t('GeophysicsArticle1-1'),
                  $t('GeophysicsArticle1-2'),
                  $t('GeophysicsArticle1-3'),
                  $t('GeophysicsArticle1-4'),
                  $t('GeophysicsArticle1-5'),
                  $t('GeophysicsArticle1-6')
                ],
                [
                  $t('GeophysicsArticle2-1'),
                  $t('GeophysicsArticle2-2'),
                  $t('GeophysicsArticle2-3'),
                  $t('GeophysicsArticle2-4'),
                  $t('GeophysicsArticle2-5'),
                  $t('GeophysicsArticle2-6'),
                  $t('GeophysicsArticle2-7'),
                  $t('GeophysicsArticle2-8'),
                  $t('GeophysicsArticle2-9')
                ],
                [
                  $t('GeophysicsArticle3-1'),
                  $t('GeophysicsArticle3-2'),
                  $t('GeophysicsArticle3-3'), 
                ],
                [
                  $t('GeophysicsArticle4-1'),
                  $t('GeophysicsArticle4-2'),
                  $t('GeophysicsArticle4-3'),
                  $t('GeophysicsArticle4-4'),
                ],        
                [
                  $t('GeophysicsArticle5-1'),
                  $t('GeophysicsArticle5-2'),
                  $t('GeophysicsArticle5-3'),
                  $t('GeophysicsArticle5-4'),
                  $t('GeophysicsArticle5-5'),
                  $t('GeophysicsArticle5-6'),
                ],   
                [
                  $t('GeophysicsArticle6-1'),
                  $t('GeophysicsArticle6-2'),
                ], 
                [
                  $t('GeophysicsArticle7-1'),
                  $t('GeophysicsArticle7-2'),
                  $t('GeophysicsArticle7-3'),
                ],      
                [
                  $t('GeophysicsArticle8-1'),
                  $t('GeophysicsArticle8-2'),
                  $t('GeophysicsArticle8-3'),
                  $t('GeophysicsArticle8-4'),
                ],
                [
                  $t('GeophysicsArticle9-1'),
                  $t('GeophysicsArticle9-2'),
                  $t('GeophysicsArticle9-3'),
                  $t('GeophysicsArticle9-4'),
                ],
              ]
            }
          },
          geotechnics: {
            title: $t('GeoTechnics'),
            serviceInfo:{
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
            title: $t('Geology'),
            serviceInfo:{
              headers: [            
                $t('GeologyHeader1'),
              ],  
              articles:[
                [
                  $t('GeologyArticle1-1'),
                  $t('GeologyArticle1-2'),
                ]
              ]
            }
          },     
          geodesy: {
            title: $t('Geodesy'),
            serviceInfo:{
              headers: [''],
              articles:[[
                $t('GeodesicArticle1-1'),
                $t('GeodesicArticle1-2'),
                $t('GeodesicArticle1-3'),
                $t('GeodesicArticle1-4'),
                $t('GeodesicArticle1-5'),
                $t('GeodesicArticle1-6'),
                $t('GeodesicArticle1-7'),
                $t('GeodesicArticle1-8'),
                $t('GeodesicArticle1-9'),
                $t('GeodesicArticle1-10'),
                $t('GeodesicArticle1-11'),
                $t('GeodesicArticle1-12'),
                $t('GeodesicArticle1-13'),
                $t('GeodesicArticle1-14'),
              ]]
            }
          },
          supervising: {
            title: $t('Supervising'),
            serviceInfo:{             
              headers: [''],
              articles:[[
                $t('SupervisingArticle1-1'),
                $t('SupervisingArticle1-2'),
                $t('SupervisingArticle1-3'),
                $t('SupervisingArticle1-4'),
                $t('SupervisingArticle1-5'),
                $t('SupervisingArticle1-6'),
                $t('SupervisingArticle1-7'),
                $t('SupervisingArticle1-8'),
                $t('SupervisingArticle1-9'),
                $t('SupervisingArticle1-10'),
                $t('SupervisingArticle1-11'),
                $t('SupervisingArticle1-12'),
                $t('SupervisingArticle1-13'),
              ]]
            }             
          },
          archeology: {
            title: $t('Archeology'),
            serviceInfo:{              
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
      }
    }
  }
});
