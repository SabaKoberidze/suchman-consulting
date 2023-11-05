import { defineStore } from "pinia";
import { $t } from "../plugins/i18n";

export const services = defineStore("services", {
  state: () => ({
    pageindex: 0,
    services: {
      geophysics: {
        title: $t('Geophysics'),
        serviceInfo:{
          bullets: [false,true,true,true,true,true,true,true,true],
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
          bullets: [false, false, true, false, true, false],
          headers: [            
            "",
            $t('GeotechnicsHeader2'),
            $t('GeotechnicsHeader3'),
            $t('GeotechnicsHeader4'),
            $t('GeotechnicsHeader5'),
            $t('GeotechnicsHeader6')
          ],
          articles:[            
            [
              $t('GeotechnicsArticle1-1'),
              $t('GeotechnicsArticle1-2'),
              $t('GeotechnicsArticle1-3')
            ],
            [
              $t('GeotechnicsArticle2-1'),
              $t('GeotechnicsArticle2-2'),
            ],
            [
              $t('GeotechnicsArticle3-1'),
              $t('GeotechnicsArticle3-2'),
              $t('GeotechnicsArticle3-3'),
              $t('GeotechnicsArticle3-4'),
              $t('GeotechnicsArticle3-5'),
            ],
            [
              $t('GeotechnicsArticle4-1'),
            ],
            [
              $t('GeotechnicsArticle5-1'),
              $t('GeotechnicsArticle5-2'),
              $t('GeotechnicsArticle5-3'),
              $t('GeotechnicsArticle5-4'),
              $t('GeotechnicsArticle5-5'),
            ],
            [
              $t('GeotechnicsArticle6-1'),
              $t('GeotechnicsArticle6-2'),
            ],
          ]
        }
      },
      geology: {
        title: $t('Geology'),
        serviceInfo:{
          bullets: [false, false],
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
          bullets: [true], 
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
          bullets: [false, true],    
          headers: ['',''],
          articles:[
            [
              $t('SupervisingArticle1-1'),
            ],
            [
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
            ]                
          ]
        }             
      },
      archeology: {
        title: $t('Archeology'),
        serviceInfo:{   
          bullets: [true],           
          headers: [''],
          articles:[[
            $t('ArcheologyArticle1-2'),
            $t('ArcheologyArticle1-3'),
            $t('ArcheologyArticle1-4'),
            $t('ArcheologyArticle1-5'),
            $t('ArcheologyArticle1-6'),
            $t('ArcheologyArticle1-7'),
            $t('ArcheologyArticle1-8'),
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
              bullets: [false,true,true,true,true,true,true,true,true],
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
              bullets: [false, false, true, false, true, false],
              headers: [            
                "",
                $t('GeotechnicsHeader2'),
                $t('GeotechnicsHeader3'),
                $t('GeotechnicsHeader4'),
                $t('GeotechnicsHeader5'),
                $t('GeotechnicsHeader6')
              ],
              articles:[            
                [
                  $t('GeotechnicsArticle1-1'),
                  $t('GeotechnicsArticle1-2'),
                  $t('GeotechnicsArticle1-3')
                ],
                [
                  $t('GeotechnicsArticle2-1'),
                  $t('GeotechnicsArticle2-2'),
                ],
                [
                  $t('GeotechnicsArticle3-1'),
                  $t('GeotechnicsArticle3-2'),
                  $t('GeotechnicsArticle3-3'),
                  $t('GeotechnicsArticle3-4'),
                  $t('GeotechnicsArticle3-5'),
                ],
                [
                  $t('GeotechnicsArticle4-1'),
                ],
                [
                  $t('GeotechnicsArticle5-1'),
                  $t('GeotechnicsArticle5-2'),
                  $t('GeotechnicsArticle5-3'),
                  $t('GeotechnicsArticle5-4'),
                  $t('GeotechnicsArticle5-5'),
                ],
                [
                  $t('GeotechnicsArticle6-1'),
                  $t('GeotechnicsArticle6-2'),
                ],
              ]
            }
          },
          geology: {
            title: $t('Geology'),
            serviceInfo:{
              bullets: [false, false],
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
              bullets: [true], 
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
              bullets: [false, true],    
              headers: ['',''],
              articles:[
                [
                  $t('SupervisingArticle1-1'),
                ],
                [
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
                ]                
              ]
            }             
          },
          archeology: {
            title: $t('Archeology'),
            serviceInfo:{   
              bullets: [true],           
              headers: [''],
              articles:[[
                $t('ArcheologyArticle1-2'),
                $t('ArcheologyArticle1-3'),
                $t('ArcheologyArticle1-4'),
                $t('ArcheologyArticle1-5'),
                $t('ArcheologyArticle1-6'),
                $t('ArcheologyArticle1-7'),
                $t('ArcheologyArticle1-8'),
              ]]
            }             
          },
      }
    }
  }
});
