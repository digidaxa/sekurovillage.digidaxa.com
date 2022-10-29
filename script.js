(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.playAudioList([this.audio_155084E7_3ED0_F962_41BA_7DA703691080]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_318C7562_3EB1_3B62_41BC_FCBABC24D25F], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist,this.mainPlayList]); this.playList_39327B10_1219_51E2_41A6_293E85791D0C.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_318C8562_3EB1_3B62_41B7_C87FD7621B30].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_338F6AEF_3EB7_0962_41C7_5C633A24BCCC",
  "this.Container_1EDE886C_3F5F_0966_41BC_353B57EC559D",
  "this.Container_1A0554E5_3FF0_F966_41B8_0078AC614EAC",
  "this.Container_3397D7C3_1209_5066_41A4_3C9692EF45E3",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_318C6562_3EB1_3B62_41B9_0F3C092F879D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Player",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "propagateClick": false,
 "vrPolyfillScale": 0.55,
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "yaw": -5.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31FD2DC9_1219_5062_4184_9FC9AA46A29C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -155.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_37BED045_1219_7062_418A_1BCCA173FD3C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -87.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3792601C_1219_4FE2_4181_00090ECCAAFA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -141.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31BB5E1B_1219_53E6_41AB_CDA7966513B6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 1.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_373D2FCA_1219_5066_419F_689D38077830",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 167.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_345A3060_1219_7022_41A1_1D4DA016BBB3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -30.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_34AFC14B_1219_7066_4170_55A0E3BB5C62",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 139.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3477907C_1219_7022_4196_B823C99A0A6A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "buttonCardboardView": "this.IconButton_318CB562_3EB1_3B62_41B3_D6C0A7EE0BCB",
 "gyroscopeEnabled": true,
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_318C7562_3EB1_3B62_41BC_FCBABC24D25F",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 75.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_34A0B13D_1219_7022_416F_A60D18CC7044",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -2.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3430B0B3_1219_7026_41B0_04F4046C2C28",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -0.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3517D18F_1219_70FE_41A1_0BA5B7E50DFF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeInEffect_3982CB57_1219_506E_4161_1E7556AF0D1A",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "21",
 "id": "panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2",
 "overlays": [
  "this.overlay_41A77AC2_4FC8_E329_41C4_334D03040514",
  "this.overlay_41A75AC2_4FC8_E329_41D3_39A261A9C2B7",
  "this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 15.52,
   "yaw": 92.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2"
  },
  {
   "backwardYaw": -122.88,
   "yaw": 174.92,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_t.jpg",
 "hfovMax": 80
},
{
 "duration": 500,
 "id": "FadeInEffect_326F0564_1279_F022_4142_01BC9AA25D38",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 76.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3759DF6A_1219_5026_41A9_A262DAA62C0D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 12.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_36111E8B_1219_50E6_41A4_01B456E40378",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeOutEffect_399BAB50_1219_5062_41B2_2F46BF216C1C",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 66.71,
  "class": "PanoramaCameraPosition",
  "pitch": 4.02
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -175.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_34DB40DD_1219_7062_41A6_8993E96E078A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Z1",
 "id": "panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3",
 "overlays": [
  "this.panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_tcap0",
  "this.overlay_4AB2AFDA_598D_76FD_41B7_D20AC1E72B51",
  "this.overlay_4B39B6D6_598D_36F5_41C1_573BF6FC9236"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -90.37,
   "yaw": -143.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0"
  },
  {
   "backwardYaw": 179.62,
   "yaw": 8.46,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_521C0B23_599F_1F4C_41D4_2A07055DE335"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -72.43,
  "class": "PanoramaCameraPosition",
  "pitch": -2.04
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 171.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_34668089_1219_70E2_41A2_45F6BCB4DF67",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -123.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_36BBEF4F_1219_507E_41AB_0E58DE1ACE1D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_8E0784B5_964A_BA65_41C4_623844C733ED",
  "this.overlay_8C77A6F6_964B_A7E6_41D2_45E2BA6C3437"
 ],
 "thumbnailUrl": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_t.jpg",
 "id": "panorama_76E691B9_7D41_0813_41B4_229318D5EC3A",
 "label": "Z12",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 27.31,
   "yaw": 174.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D"
  },
  {
   "backwardYaw": -145.3,
   "yaw": -167.67,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -147.66,
  "class": "PanoramaCameraPosition",
  "pitch": 7.53
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 177.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3712DFA2_1219_5026_4184_9D67B14CFF64",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_85D93C9A_965B_AA2E_41E2_884706359521",
  "this.overlay_853C8C8E_965A_EA26_41DC_02DE43F95DE7"
 ],
 "thumbnailUrl": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_t.jpg",
 "id": "panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416",
 "label": "Z5",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -89.78,
   "yaw": -101.41,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7681AE61_7D43_3833_41D6_173CD45465C2"
  },
  {
   "backwardYaw": 37.4,
   "yaw": 165.63,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Z3",
 "id": "panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD",
 "overlays": [
  "this.panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_tcap0",
  "this.overlay_4A1E46A4_59B3_6954_41A0_D9F63B4F0FC6"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 4.12,
   "yaw": -178.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_521C0B23_599F_1F4C_41D4_2A07055DE335"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "yaw": -14.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_37F6D001_1219_4FE2_41AA_22E153072F96",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 200,
 "id": "effect_580FF761_4F08_3F00_4191_91ACF9401F9E",
 "class": "FadeOutEffect",
 "easing": "quad_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 3.41,
  "class": "PanoramaCameraPosition",
  "pitch": 6.32
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeInEffect_39841B59_1219_5062_4120_913F7079705C",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "initialPosition": {
  "yaw": 80.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_36718E61_1219_5022_41AC_3E4DDFC765AD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 176.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_342EF0CF_1219_707E_41A8_14EB2A2055CE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeOutEffect_326F3564_1279_F022_41AE_BCA68F3287DB",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "from": "left",
 "duration": 400,
 "id": "effect_4F69C86C_5705_6B41_41BC_5E5273634FBF",
 "class": "SlideInEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1FB04879_11C6_B273_4195_46E7946468F7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeOutEffect_39998B4F_1219_507E_4190_2AF18DDB5F44",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_03A44A46_1206_B06E_4193_73AF4E035B27",
  "this.overlay_01172699_1219_B0E2_41AF_4F51DAD140D0",
  "this.overlay_00C08B4A_121A_B066_41B0_7D858DE43C2F"
 ],
 "thumbnailUrl": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_t.jpg",
 "id": "panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3",
 "label": "Y2",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1FB19609_11C7_D190_4197_3B70A15B24F0"
  },
  {
   "backwardYaw": -143.7,
   "yaw": 129.45,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1E94E33B_11C6_B7F0_419E_42B068C19173"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -168.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_355C4159_1219_7062_4198_A744EDDFEF59",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeInEffect_399A8B4F_1219_507E_41A1_091685346CDB",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "levels": [
  {
   "url": "media/zoomImage_32EDC821_127A_B022_41A4_7E96DE2A2141_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32EDC821_127A_B022_41A4_7E96DE2A2141_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32EDC821_127A_B022_41A4_7E96DE2A2141_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32EDC821_127A_B022_41A4_7E96DE2A2141_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32EDC821_127A_B022_41A4_7E96DE2A2141_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_39811B56_1219_506E_419C_1F118289CA8C",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "18",
 "id": "panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B",
 "overlays": [
  "this.overlay_410BDA29_4FC8_637B_41C1_F8B2ADE7F80D",
  "this.overlay_410BAA29_4FC8_637B_41D1_29C321776BE2",
  "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_tcap0",
  "this.overlay_1D19825A_120E_B066_419E_45F8ECDE9B0A",
  "this.overlay_1D8E5244_120A_B062_41A4_9701B2A2F73B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 91.57,
   "yaw": -93.56,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09"
  },
  {
   "backwardYaw": 3.32,
   "yaw": 87.95,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1FB19609_11C7_D190_4197_3B70A15B24F0"
  },
  {
   "backwardYaw": -2.1,
   "yaw": -179.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827"
  },
  {
   "backwardYaw": 180,
   "yaw": -3.71,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 89.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3568C181_1219_70E2_419B_E46D76FE2C22",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_155084E7_3ED0_F962_41BA_7DA703691080.ogg",
  "mp3Url": "media/audio_155084E7_3ED0_F962_41BA_7DA703691080.mp3",
  "class": "AudioResource"
 },
 "id": "audio_155084E7_3ED0_F962_41BA_7DA703691080",
 "data": {
  "label": "Snowy Peaks pt I - Chris Haugen"
 },
 "class": "MediaAudio"
},
{
 "duration": 200,
 "id": "effect_40355B01_547B_B1A1_41C1_07A687AFC47C",
 "class": "FadeOutEffect",
 "easing": "quad_out"
},
{
 "duration": 200,
 "id": "effect_59CA3A81_4F08_D101_41D3_0462DF8FB066",
 "class": "FadeOutEffect",
 "easing": "quad_out"
},
{
 "duration": 500,
 "id": "FadeInEffect_3981BB57_1219_506E_4183_8BD060DCEB39",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "duration": 500,
 "id": "FadeOutEffect_326C5560_1279_F022_4159_91543A86CEB0",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_8_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_8",
 "width": 5184,
 "label": "IMG_6087",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_8.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -175.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_37AB2052_1219_7066_41A4_D6C1C0F0D0C9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 178.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_370E3FBD_1219_5022_41A4_4DADD8A3570E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_8E817468_964A_BAEB_41D4_F8543924A453"
 ],
 "thumbnailUrl": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_t.jpg",
 "id": "panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB",
 "label": "Z13",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -167.67,
   "yaw": -145.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_76E691B9_7D41_0813_41B4_229318D5EC3A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_34F8C0F9_1219_7022_4166_C565CF88F18A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "from": "left",
 "duration": 400,
 "id": "effect_404559BF_570B_6D3E_41C6_9F4FDDDF0AEB",
 "class": "SlideInEffect",
 "easing": "quad_in"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "10",
 "id": "panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A",
 "overlays": [
  "this.overlay_4097FF3B_4FC9_A15F_41B2_4126521DD4D7",
  "this.overlay_40978F3B_4FC9_A15F_41BB_D2EAE7F375AC",
  "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 96.68,
   "yaw": 11.19,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827"
  },
  {
   "backwardYaw": 84.64,
   "yaw": -179.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -100.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_34CA20EB_1219_7026_41B0_1744A08C4ABA",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/zoomImage_32F46DD1_1279_5062_414E_AC8CA04D2D65_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32F46DD1_1279_5062_414E_AC8CA04D2D65_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32F46DD1_1279_5062_414E_AC8CA04D2D65_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32F46DD1_1279_5062_414E_AC8CA04D2D65_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32F46DD1_1279_5062_414E_AC8CA04D2D65_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_399EBB53_1219_5066_41B1_FAA6B805983B",
 "class": "ImageResource"
},
{
 "duration": 500,
 "id": "FadeOutEffect_326F9565_1279_F022_4196_B8B546A210B8",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "levels": [
  {
   "url": "media/zoomImage_0D83AB45_120B_D062_419E_557727066E73_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_0D83AB45_120B_D062_419E_557727066E73_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_0D83AB45_120B_D062_419E_557727066E73_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_0D83AB45_120B_D062_419E_557727066E73_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_0D83AB45_120B_D062_419E_557727066E73_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_3270D567_1279_F02E_41A0_8706517ABFCD",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "26",
 "id": "panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE",
 "overlays": [
  "this.overlay_43273D27_4FC8_6176_41CD_84B35E747788",
  "this.overlay_4327ED28_4FC8_6179_41D2_ADEFCB49E803",
  "this.overlay_4327CD28_4FC8_6179_41D0_34BFEEA67B96",
  "this.panorama_4327AD28_4FC8_6179_41C8_1A8303379853"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -94.75,
   "yaw": 91.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E"
  },
  {
   "backwardYaw": 108.29,
   "yaw": 10.56,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2"
  },
  {
   "backwardYaw": 31.75,
   "yaw": -11.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 47.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3EE0EC36_1219_502E_41A5_30C43D1171BC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 71.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3E249C01_1219_57E5_4193_7C187E2250AF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "4",
 "id": "panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0",
 "overlays": [
  "this.overlay_4080DECE_4FC8_6338_41CD_7F7B3CE0BC96",
  "this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_tcap0",
  "this.overlay_4B87C3BD_598F_2EB7_41AF_650A34F59C0B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -132.98,
   "yaw": 79.4,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728"
  },
  {
   "backwardYaw": -143.78,
   "yaw": -90.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -92.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_369E5F33_1219_5026_4182_08BAD6EFBBA8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -1.47,
  "class": "PanoramaCameraPosition",
  "pitch": 7.99
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -83.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_36E46F17_1219_51EE_4190_205397083290",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_10_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_10",
 "width": 5184,
 "label": "IMG_6094",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_10.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_76D920C3_7D41_0876_41B5_14382B793FFC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_3_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_3",
 "width": 5184,
 "label": "IMG_6040",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_3.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_5_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_5",
 "width": 5184,
 "label": "IMG_6059",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_5.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "initialPosition": {
  "yaw": 36.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_34B2512F_1219_703E_41A1_B5719F0F06BD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 6.1,
  "class": "PanoramaCameraPosition",
  "pitch": 5.76
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -18.29,
  "class": "PanoramaCameraPosition",
  "pitch": 2.82
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -131.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0.87
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -98.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_37E3600E_1219_4FFE_41B1_70493B761E18",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_39327B10_1219_51E2_41A6_293E85791D0C",
 "class": "PlayList"
},
{
 "duration": 200,
 "id": "effect_5F42DCC8_4F18_5100_41CB_F5BBF9EF1A1D",
 "class": "FadeInEffect",
 "easing": "quad_in"
},
{
 "items": [
  {
   "media": "this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49",
   "camera": "this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C",
   "camera": "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728",
   "camera": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315",
   "camera": "this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D",
   "camera": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_407237A6_4FD7_E168_417A_BDC09A783A9C",
   "camera": "this.panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9",
   "camera": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0",
   "camera": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A",
   "camera": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0",
   "camera": "this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F",
   "camera": "this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30",
   "camera": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0",
   "camera": "this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2",
   "camera": "this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC",
   "camera": "this.panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B",
   "camera": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827",
   "camera": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2",
   "camera": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259",
   "camera": "this.panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2",
   "camera": "this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E",
   "camera": "this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D",
   "camera": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2",
   "camera": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25",
   "camera": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE",
   "camera": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 25, 26)",
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3",
   "camera": "this.panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_521C0B23_599F_1F4C_41D4_2A07055DE335",
   "camera": "this.panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD",
   "camera": "this.panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7681AE61_7D43_3833_41D6_173CD45465C2",
   "camera": "this.panorama_7681AE61_7D43_3833_41D6_173CD45465C2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416",
   "camera": "this.panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04",
   "camera": "this.panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76D920C3_7D41_0876_41B5_14382B793FFC",
   "camera": "this.panorama_76D920C3_7D41_0876_41B5_14382B793FFC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F",
   "camera": "this.panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750",
   "camera": "this.panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC",
   "camera": "this.panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D",
   "camera": "this.panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76E691B9_7D41_0813_41B4_229318D5EC3A",
   "camera": "this.panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB",
   "camera": "this.panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1E94E33B_11C6_B7F0_419E_42B068C19173",
   "camera": "this.panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3",
   "camera": "this.panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1FB19609_11C7_D190_4197_3B70A15B24F0",
   "camera": "this.panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09",
   "camera": "this.panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926",
   "camera": "this.panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1FB04879_11C6_B273_4195_46E7946468F7",
   "camera": "this.panorama_1FB04879_11C6_B273_4195_46E7946468F7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist, 44, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist",
 "class": "PlayList"
},
{
 "duration": 500,
 "id": "FadeOutEffect_399D1B52_1219_5066_419E_BA7B2E37DC29",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "duration": 500,
 "id": "FadeOutEffect_39801B55_1219_5062_41B0_572CBB8F4A2A",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3579A174_1219_7022_4197_F6D95DD3E124",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/zoomImage_32881339_127F_7022_41AB_87D72A7B461D_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32881339_127F_7022_41AB_87D72A7B461D_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32881339_127F_7022_41AB_87D72A7B461D_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32881339_127F_7022_41AB_87D72A7B461D_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32881339_127F_7022_41AB_87D72A7B461D_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_399B8B50_1219_5062_4161_EB620E5D449C",
 "class": "ImageResource"
},
{
 "duration": 500,
 "id": "FadeOutEffect_399A9B4F_1219_507E_41AC_25D46C295A3D",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "23",
 "id": "panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D",
 "overlays": [
  "this.overlay_4190C09B_4FC9_9F5F_41C8_2308EB2F1C04",
  "this.overlay_4190D09B_4FC9_9F5F_41B6_C80AD4B3078D",
  "this.overlay_4190E09B_4FC9_9F5F_41C0_5CA231B362F9",
  "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_tcap0",
  "this.overlay_98DC07C0_964B_A61A_41D6_65EE765B3FE2",
  "this.overlay_99DE6512_9657_9A3F_41D4_D5FBA657E8A8",
  "this.overlay_853F49FB_9655_ADED_41BF_99CF84456B49",
  "this.overlay_85E1DF04_965B_E61A_41DC_66F919810543"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 92.82,
   "yaw": -12.59,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F"
  },
  {
   "backwardYaw": -3.25,
   "yaw": -40.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2"
  },
  {
   "backwardYaw": 174.57,
   "yaw": 27.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_76E691B9_7D41_0813_41B4_229318D5EC3A"
  },
  {
   "backwardYaw": 174.92,
   "yaw": -122.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2"
  },
  {
   "backwardYaw": 98.76,
   "yaw": -2.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC"
  },
  {
   "backwardYaw": -42.29,
   "yaw": 38.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25"
  },
  {
   "backwardYaw": -43.17,
   "yaw": -179.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7681AE61_7D43_3833_41D6_173CD45465C2"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_t.jpg",
 "hfovMax": 80
},
{
 "duration": 500,
 "id": "FadeInEffect_39831B58_1219_5062_41A6_5409C98075A0",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "initialPosition": {
  "yaw": -50.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3E606BBC_1219_5022_41A9_421BE5ACC55C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "12",
 "id": "panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F",
 "overlays": [
  "this.overlay_40F864AD_4FC8_E77B_41CB_9249DB79C971",
  "this.overlay_40F844AD_4FC8_E77B_41C9_9EDDD377188D",
  "this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -104.17,
   "yaw": 3.44,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827"
  },
  {
   "backwardYaw": 149.78,
   "yaw": -179.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -132.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31275D79_1219_5022_419E_560A8E614CA5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -88.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_37DA8FE6_1219_502E_41B1_43922CF84BB3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/zoomImage_0DF9378F_120B_70FE_4191_F30BC2897040_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_0DF9378F_120B_70FE_4191_F30BC2897040_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_0DF9378F_120B_70FE_4191_F30BC2897040_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_0DF9378F_120B_70FE_4191_F30BC2897040_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_0DF9378F_120B_70FE_4191_F30BC2897040_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_32704566_1279_F02E_41B2_3D4AFD6CCD2D",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 86.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31006D25_1219_5022_41A2_8E040281849D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 166.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_37463F77_1219_502E_41AA_F968B7ED248D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -93.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31DF7DA1_1219_5022_4199_98D8A023D9DC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -93.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3E36EBF3_1219_5026_41B1_486A58D35A52",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 6.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0.34
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeOutEffect_39854B5A_1219_5066_41AF_B3460C6BC65C",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_1_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_1",
 "width": 5184,
 "label": "IMG_6029",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_1.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -125.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_36AA0F5C_1219_5062_41AD_5BA3B0D9DC66",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_015EBFBE_121B_B01E_41AC_C1F737ABE05A",
  "this.overlay_04019A6C_121A_D022_4184_E0133B4FCF25",
  "this.overlay_044B90AC_1219_D022_4169_D24C1F4FC96D"
 ],
 "thumbnailUrl": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_t.jpg",
 "id": "panorama_1E94E33B_11C6_B7F0_419E_42B068C19173",
 "label": "Y1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B"
  },
  {
   "backwardYaw": 129.45,
   "yaw": -143.7,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3"
  },
  {
   "backwardYaw": 77.36,
   "yaw": 56.13,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1FB19609_11C7_D190_4197_3B70A15B24F0"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "5",
 "id": "panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315",
 "overlays": [
  "this.overlay_4062BCD8_4FD8_A0D8_41D1_24E5F8A74D7A",
  "this.overlay_40624CD8_4FD8_A0D8_41AE_8BAB2EF92B85",
  "this.overlay_40625CD8_4FD8_A0D8_41C6_158829CBF50B",
  "this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D"
  },
  {
   "backwardYaw": 38.43,
   "yaw": 50.32,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728"
  },
  {
   "backwardYaw": -40.52,
   "yaw": -46.05,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -25.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_36C09EED_1219_5022_4195_EA13506EF3C9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -71.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31328D50_1219_5062_4146_CD5731D72200",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 136.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_36D5FEDF_1219_501E_41A1_88BA628451D2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_8473E06A_965E_BAEF_41C7_262E88DE2D8B",
  "this.overlay_8479DA80_965E_6E1B_41CB_4D861D48AEE2",
  "this.overlay_85E8AEA0_965D_A61B_41D6_BDB19383BB91"
 ],
 "thumbnailUrl": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_t.jpg",
 "id": "panorama_7681AE61_7D43_3833_41D6_173CD45465C2",
 "label": "Z4",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -99.3,
   "yaw": -99.4,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_76D920C3_7D41_0876_41B5_14382B793FFC"
  },
  {
   "backwardYaw": -179.8,
   "yaw": -43.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D"
  },
  {
   "backwardYaw": -101.41,
   "yaw": -89.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "duration": 200,
 "id": "effect_59CA1A81_4F08_D101_41D2_30683CB5E100",
 "class": "FadeInEffect",
 "easing": "quad_in"
},
{
 "levels": [
  {
   "url": "media/zoomImage_0D850BE4_120F_5022_41B1_8FC1659FC32C_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_0D850BE4_120F_5022_41B1_8FC1659FC32C_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_0D850BE4_120F_5022_41B1_8FC1659FC32C_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_0D850BE4_120F_5022_41B1_8FC1659FC32C_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_0D850BE4_120F_5022_41B1_8FC1659FC32C_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_326BB55F_1279_F01E_41A7_0B4D394A896F",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 168.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_363FDEC2_1219_5066_4173_483DDAF8A6CF",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49",
   "camera": "this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C",
   "camera": "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728",
   "camera": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315",
   "camera": "this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D",
   "camera": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_407237A6_4FD7_E168_417A_BDC09A783A9C",
   "camera": "this.panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9",
   "camera": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0",
   "camera": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A",
   "camera": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0",
   "camera": "this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F",
   "camera": "this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30",
   "camera": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0",
   "camera": "this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2",
   "camera": "this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC",
   "camera": "this.panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B",
   "camera": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827",
   "camera": "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2",
   "camera": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259",
   "camera": "this.panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2",
   "camera": "this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E",
   "camera": "this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D",
   "camera": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2",
   "camera": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25",
   "camera": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE",
   "camera": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  },
  {
   "media": "this.panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3",
   "camera": "this.panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_521C0B23_599F_1F4C_41D4_2A07055DE335",
   "camera": "this.panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD",
   "camera": "this.panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_7681AE61_7D43_3833_41D6_173CD45465C2",
   "camera": "this.panorama_7681AE61_7D43_3833_41D6_173CD45465C2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416",
   "camera": "this.panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04",
   "camera": "this.panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76D920C3_7D41_0876_41B5_14382B793FFC",
   "camera": "this.panorama_76D920C3_7D41_0876_41B5_14382B793FFC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F",
   "camera": "this.panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750",
   "camera": "this.panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC",
   "camera": "this.panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D",
   "camera": "this.panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76E691B9_7D41_0813_41B4_229318D5EC3A",
   "camera": "this.panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB",
   "camera": "this.panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1E94E33B_11C6_B7F0_419E_42B068C19173",
   "camera": "this.panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3",
   "camera": "this.panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1FB19609_11C7_D190_4197_3B70A15B24F0",
   "camera": "this.panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09",
   "camera": "this.panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926",
   "camera": "this.panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1FB04879_11C6_B273_4195_46E7946468F7",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_1FB04879_11C6_B273_4195_46E7946468F7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 400,
 "id": "effect_25FE7E90_3014_D1B3_41A1_6EBC34409425",
 "to": "left",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "24",
 "id": "panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2",
 "overlays": [
  "this.overlay_418839CB_4FC8_613F_41AB_E4A55ED4493C",
  "this.overlay_418819CB_4FC8_613F_41C2_1624C2F04E19",
  "this.overlay_418809CB_4FC8_613F_41A2_DFC5546318B7",
  "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -40.07,
   "yaw": -3.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D"
  },
  {
   "backwardYaw": -8.96,
   "yaw": -114.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25"
  },
  {
   "backwardYaw": 10.56,
   "yaw": 108.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "yaw": -169.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31066D33_1219_5026_416C_EF9733ED5A6C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -171.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_372A6FD8_1219_5062_41A5_85EF6621DC50",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 200,
 "id": "effect_5B21667B_4F08_3100_41C7_3B45A9C1819F",
 "class": "FadeOutEffect",
 "easing": "quad_out"
},
{
 "initialPosition": {
  "yaw": 136.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31871DFF_1219_501E_418E_A82443FCCEB6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -81.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31914DE4_1219_5022_4192_6302BE4B37C2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_37817029_1219_7022_41A4_72C37166260D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -5.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31E8FDD7_1219_506E_419E_DF9C4FE4EA85",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -169.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_34131097_1219_70EE_41AD_552DFFFB2599",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -95.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_36922F25_1219_5022_41B1_F2698B3783DD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 100.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_34942114_1219_71E2_4174_E7A04B8F78ED",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_820532E8_9656_7FEB_41D3_E8F61B52E99E"
 ],
 "thumbnailUrl": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_t.jpg",
 "id": "panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04",
 "label": "Z6",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 165.63,
   "yaw": 37.4,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_343F10C1_1219_7062_4190_533E7C51F5DC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -178.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "manualRotationSpeed": 1803,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_36CB3EFB_1219_5026_418D_5CB2C3148616",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -88.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_37751F86_1219_50EE_4193_4B164C07F24A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/zoomImage_32EB317B_127B_D026_41B0_49DFED5ADCAF_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32EB317B_127B_D026_41B0_49DFED5ADCAF_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32EB317B_127B_D026_41B0_49DFED5ADCAF_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32EB317B_127B_D026_41B0_49DFED5ADCAF_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32EB317B_127B_D026_41B0_49DFED5ADCAF_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_3983FB58_1219_5062_41A9_0ADC8C8AA314",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "19",
 "id": "panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2",
 "overlays": [
  "this.overlay_416C0FD6_4FCF_A128_41CE_DE01AB8CF5E9",
  "this.overlay_416C2FD6_4FCF_A128_41BA_893C4C516613",
  "this.overlay_416CFFD6_4FCF_A128_41C8_1E0DF759EE2E",
  "this.overlay_416C9FD6_4FCF_A128_418E_352F3A876F6F",
  "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 92.52,
   "yaw": 15.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2"
  },
  {
   "backwardYaw": -179.6,
   "yaw": 84.64,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A"
  },
  {
   "backwardYaw": 74.77,
   "yaw": -85.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E"
  },
  {
   "backwardYaw": 24.42,
   "yaw": 137.91,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "yaw": -176.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3763CF94_1219_50E2_4191_094A1FBB4DD0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/zoomImage_33EE538B_1279_F0E5_4193_801B18AEAA99_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_33EE538B_1279_F0E5_4193_801B18AEAA99_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_33EE538B_1279_F0E5_4193_801B18AEAA99_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_33EE538B_1279_F0E5_4193_801B18AEAA99_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_33EE538B_1279_F0E5_4193_801B18AEAA99_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_39986B4F_1219_507E_4198_F436181F734A",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -129.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_34E7A106_1219_71EE_41AF_EE647C3968E0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_0AD33609_121B_73E2_419F_96D86E053B58",
  "this.overlay_08710AB4_121A_D022_4175_5BDF060022D0"
 ],
 "thumbnailUrl": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_t.jpg",
 "id": "panorama_1FB04879_11C6_B273_4195_46E7946468F7",
 "label": "Y6",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -93.9,
   "yaw": 0.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09"
  },
  {
   "backwardYaw": -43.77,
   "yaw": 52.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 9.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3EC13C1C_1219_57E3_41A9_D2ECFF5459C6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "22",
 "id": "panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E",
 "overlays": [
  "this.overlay_41BA5DC4_4FC8_6128_41C6_66BE5D3BED27",
  "this.overlay_41BA3DC4_4FC8_6128_419D_76554DB8625E",
  "this.overlay_41BA2DC4_4FC8_6128_41D0_598E0B7C4EF7",
  "this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D"
  },
  {
   "backwardYaw": 91.98,
   "yaw": -94.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE"
  },
  {
   "backwardYaw": -85.86,
   "yaw": 74.77,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "yaw": 80.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31B19E0D_1219_53E2_418D_2DB6F4B32CE3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -105.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_378FF037_1219_702E_41A0_5531B0E8D200",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_804BC676_964A_A6E6_41E1_BD96FAEB5F9C"
 ],
 "thumbnailUrl": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_t.jpg",
 "id": "panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750",
 "label": "Z9",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -77.17,
   "yaw": 112.44,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "duration": 500,
 "id": "FadeOutEffect_39832B58_1219_5062_4182_45B814A04F8A",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Z2",
 "id": "panorama_521C0B23_599F_1F4C_41D4_2A07055DE335",
 "overlays": [
  "this.panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_tcap0",
  "this.overlay_4AE4B0CE_59B2_EAD5_41C5_6A5C3B310BEF",
  "this.overlay_4DE9A596_59B3_2B75_41C8_E8895BCC0C8B"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -178.43,
   "yaw": 4.12,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD"
  },
  {
   "backwardYaw": 8.46,
   "yaw": 179.62,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -152.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3650EE37_1219_502E_419A_E2B9DDF6CEC8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_41724950_4FC8_E129_41A3_D8B03FE57827_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeOutEffect_39842B59_1219_5062_4170_CC0B8129C0AE",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "levels": [
  {
   "url": "media/zoomImage_32F2788A_127F_F0E6_41B2_214CB268FB82_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32F2788A_127F_F0E6_41B2_214CB268FB82_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32F2788A_127F_F0E6_41B2_214CB268FB82_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32F2788A_127F_F0E6_41B2_214CB268FB82_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32F2788A_127F_F0E6_41B2_214CB268FB82_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_399CAB51_1219_5062_41B0_EEB50BF9E6BB",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -176.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_354B2166_1219_702E_4182_6931DE83773F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_4_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_4",
 "width": 5184,
 "label": "IMG_6050",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_4.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "duration": 500,
 "id": "FadeInEffect_326FE565_1279_F022_41AB_F841198B7374",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "levels": [
  {
   "url": "media/zoomImage_32F178E2_127F_7026_4191_DB6C442CBA60_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32F178E2_127F_7026_4191_DB6C442CBA60_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32F178E2_127F_7026_4191_DB6C442CBA60_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32F178E2_127F_7026_4191_DB6C442CBA60_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32F178E2_127F_7026_4191_DB6C442CBA60_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_399DCB52_1219_5066_4190_504073AAF168",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 44.32,
  "class": "PanoramaCameraPosition",
  "pitch": 5.13
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeInEffect_399ECB53_1219_5066_41AC_9F3204D65EC2",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "duration": 200,
 "id": "effect_580F8760_4F08_3F00_41AC_F78771BB3ADF",
 "class": "FadeInEffect",
 "easing": "quad_in"
},
{
 "duration": 500,
 "id": "FadeOutEffect_399F0B54_1219_5062_41A3_6F785350DABF",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "6",
 "id": "panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D",
 "overlays": [
  "this.overlay_407E7E1D_4FD8_635B_41C0_FEDCC4DA5519",
  "this.overlay_407E6E1D_4FD8_635B_41B0_1B166296BF15",
  "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -77.96,
   "yaw": -170.59,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0"
  },
  {
   "backwardYaw": 47.14,
   "yaw": -1.79,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_407237A6_4FD7_E168_417A_BDC09A783A9C"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_t.jpg",
 "hfovMax": 80
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_6_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_6",
 "width": 5184,
 "label": "IMG_6069",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_6.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "duration": 500,
 "id": "FadeInEffect_39853B5A_1219_5066_41A8_D288DEB5494D",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "levels": [
  {
   "url": "media/zoomImage_32EE6464_127E_F022_419E_4B618955D616_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32EE6464_127E_F022_419E_4B618955D616_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32EE6464_127E_F022_419E_4B618955D616_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32EE6464_127E_F022_419E_4B618955D616_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32EE6464_127E_F022_419E_4B618955D616_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_399D9B53_1219_5066_4173_A2DAD8E26822",
 "class": "ImageResource"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained",
 "class": "MapPlayer"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "25",
 "id": "panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25",
 "overlays": [
  "this.overlay_4184786E_4FC8_EFF9_41CE_5C345B27EC55",
  "this.overlay_4184586E_4FC8_EFF9_41C8_2A841176E5B1",
  "this.overlay_4185B86E_4FC8_EFF9_41C7_B77D16C5F0EC",
  "this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 38.75,
   "yaw": -42.29,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D"
  },
  {
   "backwardYaw": -114.75,
   "yaw": -8.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2"
  },
  {
   "backwardYaw": -11.57,
   "yaw": 31.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "playList": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_AlbumPlayList",
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07",
 "class": "PhotoAlbum",
 "label": "Photo Album IMG_6015"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -148.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31393D5D_1219_5062_41AA_FD9231D91957",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_11_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_11",
 "width": 5184,
 "label": "IMG_6111",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_11.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "1",
 "id": "panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49",
 "overlays": [
  "this.overlay_09858E54_06C6_DAA8_4187_EF4427796952",
  "this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.98,
   "yaw": 1.36,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_t.jpg",
 "hfovMax": 80
},
{
 "duration": 200,
 "id": "effect_406C8EDB_5426_70A1_41AB_C419AD03A638",
 "class": "FadeOutEffect",
 "easing": "quad_out"
},
{
 "duration": 200,
 "id": "effect_5A5A28D5_4F08_3101_41C5_4679DCEA4295",
 "class": "FadeOutEffect",
 "easing": "quad_out"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -87.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31C9FDAF_1219_503E_4176_2C5600152561",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -127.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_340230A5_1219_7022_41AC_0BBC82E139D7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "17",
 "id": "panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC",
 "overlays": [
  "this.overlay_411D7F1E_4FC9_E159_41D0_9F0063E695C1",
  "this.overlay_411D6F1E_4FC9_E159_41BE_6CB5B3128BC0",
  "this.panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30"
  },
  {
   "backwardYaw": 154.88,
   "yaw": -108.81,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_t.jpg",
 "hfovMax": 80
},
{
 "duration": 200,
 "id": "effect_5B21267B_4F08_3100_41A1_F6699BEFB8F1",
 "class": "FadeInEffect",
 "easing": "quad_in"
},
{
 "duration": 200,
 "id": "effect_47C93ED9_547A_F0A1_41BB_B178B1BD72E3",
 "class": "FadeOutEffect",
 "easing": "quad_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "11",
 "id": "panorama_41724950_4FC8_E129_41A3_D8B03FE57827",
 "overlays": [
  "this.overlay_41725950_4FC8_E129_41D0_A363A1814D7A",
  "this.overlay_4173B950_4FC8_E129_41B4_A6DE57466C4C",
  "this.overlay_41738950_4FC8_E129_41CC_1109888046B1",
  "this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 11.19,
   "yaw": 96.68,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A"
  },
  {
   "backwardYaw": 3.44,
   "yaw": -104.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F"
  },
  {
   "backwardYaw": -179.76,
   "yaw": -2.1,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_t.jpg",
 "hfovMax": 80
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_14_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_14",
 "width": 5184,
 "label": "IMG_6258",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_14.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "8",
 "id": "panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9",
 "overlays": [
  "this.overlay_405FC15E_4FC8_61D9_41D1_AD7AA3ABAF45",
  "this.overlay_405FB15F_4FC8_61D8_41C7_AF53FD59C8B8",
  "this.overlay_405F915F_4FC8_61D8_41C3_A8BDCFFE681E",
  "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -171.16,
   "yaw": 67.53,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0"
  },
  {
   "backwardYaw": -46.05,
   "yaw": -40.52,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315"
  },
  {
   "backwardYaw": 86.06,
   "yaw": -79.42,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_t.jpg",
 "hfovMax": 80
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_07B2FEEF_121E_D03E_41B1_68213B818051",
  "this.overlay_05F40FFA_121F_D026_4163_68DACE051C1A",
  "this.overlay_0A4267A2_121E_F026_41A2_13BD5A0F3F88"
 ],
 "thumbnailUrl": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_t.jpg",
 "id": "panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09",
 "label": "Y4",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.75,
   "yaw": -93.9,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1FB04879_11C6_B273_4195_46E7946468F7"
  },
  {
   "backwardYaw": -93.56,
   "yaw": 91.57,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B"
  },
  {
   "backwardYaw": 10.06,
   "yaw": 177.54,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 36.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3EEE1C44_1219_5062_4192_D4D81EBDEC4A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeOutEffect_39813B56_1219_506E_4175_10BBE6548F3A",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_0_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_0",
 "width": 5184,
 "label": "IMG_6015",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "levels": [
  {
   "url": "media/zoomImage_32EFF5AB_1279_D026_419A_88021AE6C2F5_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32EFF5AB_1279_D026_419A_88021AE6C2F5_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32EFF5AB_1279_D026_419A_88021AE6C2F5_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32EFF5AB_1279_D026_419A_88021AE6C2F5_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32EFF5AB_1279_D026_419A_88021AE6C2F5_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_399FDB54_1219_5062_41A3_12BBE1802E39",
 "class": "ImageResource"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_050DA8A0_1219_D022_4182_63E06A465C60",
  "this.overlay_0AC3FE43_1219_5066_4173_9B28F08EF01A",
  "this.overlay_05EF34D3_121B_7066_41A6_A89C8F1A012E"
 ],
 "thumbnailUrl": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_t.jpg",
 "id": "panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926",
 "label": "Y5",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 52.88,
   "yaw": -43.77,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1FB04879_11C6_B273_4195_46E7946468F7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B"
  },
  {
   "backwardYaw": 177.54,
   "yaw": 10.06,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 8.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_312EDD86_1219_50EE_41A6_8B0CF6A7E9E9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/zoomImage_32EEF779_127B_5022_4197_214258B1DA5D_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32EEF779_127B_5022_4197_214258B1DA5D_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32EEF779_127B_5022_4197_214258B1DA5D_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32EEF779_127B_5022_4197_214258B1DA5D_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32EEF779_127B_5022_4197_214258B1DA5D_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_3982BB57_1219_506E_41AB_ACD446B45F84",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 85.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_310B1D41_1219_5062_41B0_4F390B9D14E4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 57.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3E5EEB92_1219_50E6_4184_F5E8D04A78C2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeOutEffect_399EDB53_1219_5066_41AA_FEFBCB0F0851",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "duration": 500,
 "id": "FadeOutEffect_399CDB51_1219_5062_41A1_AFDB2218AF68",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_367BFE6F_1219_503E_41AA_7BC0AAD2FCD6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -67.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3448806E_1219_703E_418C_04327591929C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "13",
 "id": "panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0",
 "overlays": [
  "this.overlay_40CEC2CE_4FCB_A339_41B0_72A5B3195890",
  "this.overlay_40CEF2CF_4FCB_A337_41B6_17009B06203D",
  "this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 86.98,
   "yaw": -103.89,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30"
  },
  {
   "backwardYaw": -108.81,
   "yaw": 154.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_t.jpg",
 "hfovMax": 80
},
{
 "levels": [
  {
   "url": "media/zoomImage_32F6720C_127A_B3E2_4189_46EC3F80DAEE_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32F6720C_127A_B3E2_4189_46EC3F80DAEE_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32F6720C_127A_B3E2_4189_46EC3F80DAEE_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32F6720C_127A_B3E2_4189_46EC3F80DAEE_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32F6720C_127A_B3E2_4189_46EC3F80DAEE_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_39819B57_1219_506E_417D_54DD3B9FDE14",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -42.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3645CE54_1219_5062_41AC_DD8F05EA5AC7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 139.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31A5FE29_1219_5022_4164_B4FAE1F27804",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 78.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3667DE7D_1219_5022_41A4_1DB98D090146",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_9_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_9",
 "width": 5184,
 "label": "IMG_6093",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_9.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_13_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_13",
 "width": 5184,
 "label": "IMG_6183",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_13.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "initialPosition": {
  "yaw": -26.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3E1ABBD7_1219_506E_4199_5AD7118DD33D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -179.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3E9E9C51_1219_5062_41AD_754B153FA62C",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 71.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3ED35C0F_1219_57FE_41B0_247EB488BAA4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeInEffect_399DBB53_1219_5066_41A9_03CD776E2E86",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 137.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_319C4DF2_1219_5026_4165_3B97DD9A56DD",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 17.79,
  "class": "PanoramaCameraPosition",
  "pitch": 3.71
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 34.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_36592E45_1219_5062_41B0_D1D1F07F0C17",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_12_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_12",
 "width": 5184,
 "label": "IMG_6141",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_12.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "levels": [
  {
   "url": "media/zoomImage_32E903AB_127A_D026_41B1_14F1EA54ABB2_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32E903AB_127A_D026_41B1_14F1EA54ABB2_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32E903AB_127A_D026_41B1_14F1EA54ABB2_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32E903AB_127A_D026_41B1_14F1EA54ABB2_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32E903AB_127A_D026_41B1_14F1EA54ABB2_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_39852B5A_1219_5066_41AD_A6A51581C7E3",
 "class": "ImageResource"
},
{
 "duration": 200,
 "id": "effect_4016129C_5467_90A7_41B5_2C5E462A0C83",
 "class": "FadeOutEffect",
 "easing": "quad_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_828A3E2F_9656_A666_41DE_6965CBD93798"
 ],
 "thumbnailUrl": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_t.jpg",
 "id": "panorama_76D920C3_7D41_0876_41B5_14382B793FFC",
 "label": "Z7",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -99.4,
   "yaw": -99.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7681AE61_7D43_3833_41D6_173CD45465C2"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_7681AE61_7D43_3833_41D6_173CD45465C2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 176.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31F4BDBC_1219_5022_41A0_64C7A0DAC1F6",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeOutEffect_3981CB57_1219_506E_41A9_5B47E1A63FD8",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 172.58,
  "class": "PanoramaCameraPosition",
  "pitch": 5.34
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeInEffect_399CCB51_1219_5062_41A6_B7380774F986",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 65.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3633FEB4_1219_5022_41A6_6D2B6B363E0B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 145.58,
  "class": "PanoramaCameraPosition",
  "pitch": 11.22
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_0D3B0103_06C9_46A8_4194_48573AE17728_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "20",
 "id": "panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259",
 "overlays": [
  "this.overlay_415C91E9_4FCF_A0FB_41C7_AA957E42797E",
  "this.overlay_415CB1E9_4FCF_A0FB_4161_5347794EA51E",
  "this.panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A"
  },
  {
   "backwardYaw": 137.91,
   "yaw": 24.42,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 152.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_36F7AF09_1219_51E2_41B0_3FB8B3598DB7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -164.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3E53CB84_1219_50E2_41AC_815314193A04",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 2.25,
  "class": "PanoramaCameraPosition",
  "pitch": 5.21
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_7_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_7",
 "width": 5184,
 "label": "IMG_6086",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_7.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "duration": 200,
 "id": "effect_5F42ACC8_4F18_5100_41D2_9FAF67DDCB7B",
 "class": "FadeOutEffect",
 "easing": "quad_out"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 102.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31209D6B_1219_5026_41B1_76F375C4A043",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeInEffect_399FEB54_1219_5062_41B1_D61D4879D048",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "duration": 200,
 "id": "effect_5A5A58D5_4F08_3101_41D1_AE0FDA00D4F0",
 "class": "FadeInEffect",
 "easing": "quad_in"
},
{
 "duration": 500,
 "id": "FadeInEffect_32707566_1279_F02E_41A3_2C9F8BCB5B88",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "duration": 500,
 "id": "FadeInEffect_326BA55F_1279_F01E_4194_BE05E8CAA20A",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "duration": 500,
 "id": "FadeOutEffect_3982FB57_1219_506E_41A8_1D5CF141C884",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "duration": 500,
 "id": "FadeInEffect_39812B56_1219_506E_41AF_80C9B0B846AA",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 94.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_37C72FF3_1219_5026_41B0_E2E43C370263",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeOutEffect_399DCB53_1219_5066_419F_3FDB0F64E170",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "3",
 "id": "panorama_0D3B0103_06C9_46A8_4194_48573AE17728",
 "overlays": [
  "this.overlay_1575EF7B_07DA_F958_417A_10159269154E",
  "this.overlay_1569D0A2_07D9_C7E8_418D_F6A87A767BBA",
  "this.overlay_15797AE0_07C6_FB68_4191_0A425FDD5056",
  "this.overlay_169BCCE6_07C9_FF68_4165_ED728F142633",
  "this.overlay_15E0862A_07C9_4AF8_4161_D8539EDF9E0C",
  "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 4.09,
   "yaw": -27.28,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C"
  },
  {
   "backwardYaw": 79.4,
   "yaw": -132.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0"
  },
  {
   "backwardYaw": -179.02,
   "yaw": 149.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F"
  },
  {
   "backwardYaw": 50.32,
   "yaw": 38.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315"
  },
  {
   "backwardYaw": -79.42,
   "yaw": 86.06,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "yaw": -123.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_368E8F41_1219_5062_418F_8AFB92BA31F1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 102.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_361DFE99_1219_50E2_4195_195B2B580059",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 59.68,
  "class": "PanoramaCameraPosition",
  "pitch": -0.64
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "14",
 "id": "panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2",
 "overlays": [
  "this.overlay_4114130F_4FC8_A136_4167_50901FC0E646",
  "this.overlay_41142310_4FC8_A129_41C6_EA42B22E9D9A",
  "this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -179.25,
   "yaw": -13.88,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30"
  },
  {
   "backwardYaw": -3.71,
   "yaw": 180,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -0.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_34831122_1219_7026_4176_B1828053C9AC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeOutEffect_3270F567_1279_F02E_4192_9EF6F7E5643A",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "9",
 "id": "panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0",
 "overlays": [
  "this.overlay_40BF9A4B_4FC8_A33F_41D1_C9B00223740A",
  "this.overlay_40BF8A4B_4FC8_A33F_41CD_83AF9C7E157A",
  "this.overlay_40BFAA4B_4FC8_A33F_41CB_FAE38FA92F71",
  "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -108.43,
   "yaw": 54.93,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30"
  },
  {
   "backwardYaw": -170.59,
   "yaw": -77.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D"
  },
  {
   "backwardYaw": 67.53,
   "yaw": -171.16,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_t.jpg",
 "hfovMax": 80
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1024,
 "label": "floorplan",
 "image": {
  "levels": [
   {
    "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E.jpeg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   },
   {
    "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_lq.jpeg",
    "width": 313,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 209
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "class": "Map",
 "overlays": [
  "this.overlay_2A6B646A_3EF1_1962_41C4_FD41B45A4861",
  "this.overlay_2A1C335A_3EF7_18A2_41C5_8BFDFA71FD07",
  "this.overlay_2B7B5AE9_3EF1_096E_41C7_58416DF15D49",
  "this.overlay_29F9B04C_3EF1_F8A6_41BC_3510B8DFE04B",
  "this.overlay_29BE8983_3EF1_0BA2_41C4_1C71805D4965",
  "this.overlay_28B42D8E_3EF3_0BA5_41AF_C62A896CD8AE",
  "this.overlay_28300FF2_3EF3_0762_418E_C8B817602814",
  "this.overlay_2941EEB3_3EF1_09E2_41C6_5CD64DA63BFC",
  "this.overlay_26742D38_3EFF_08EE_41C4_EA7BCC4742E5",
  "this.overlay_262DFBC5_3EFF_0FA6_41C3_50F6A97B310D",
  "this.overlay_26CF6034_3EF1_38E6_41A9_2CADA3D4ACAB",
  "this.overlay_26D7F923_3EF1_08E2_41C4_97DC3AE9DF35",
  "this.overlay_263DCCAA_3EF3_09ED_4174_527BB1EED459",
  "this.overlay_24CA2A98_3EF1_09AE_41C6_8FC8ACC49A76",
  "this.overlay_27E350CC_3EF1_19A6_41C0_4B072DD9EC05",
  "this.overlay_24B9CE46_3EF7_08A2_41BF_F83979A9F3B9",
  "this.overlay_245DB2FE_3EF0_F962_41BC_D844CEC37FAC",
  "this.overlay_25716BFE_3EF1_0F63_41BA_FA99A785AAD3",
  "this.overlay_25A2EEF9_3EF3_096E_41B9_EB7E3DB85937",
  "this.overlay_238FF28B_3EF3_19A2_41C9_2CB943A6293D",
  "this.overlay_22C80EC5_3EF1_09A6_41CB_CD16C463E155",
  "this.overlay_232EBFA6_3EEF_07E3_41A3_65042B7AC827",
  "this.overlay_20B6946F_3EEF_1962_41C3_2F2344657A9B",
  "this.overlay_23728712_3ED1_78A2_41BC_37F9D8C5ADF1",
  "this.overlay_21EC967E_3ED1_7962_41C1_CCE1F6AE8835",
  "this.overlay_887FB2BC_965A_AFFC_41D0_08D75B9A6ABF",
  "this.overlay_8BD5ECD7_9655_DB8C_41BC_77014D3060C5",
  "this.overlay_881B8F59_964A_D685_41C0_78A63E4A9D71",
  "this.overlay_88D51543_964B_EA84_41E1_FF70DAAD91EC",
  "this.overlay_89E8B180_964A_AD83_41E2_1BBF7DDBDFCC",
  "this.overlay_B6085C1A_964E_7A84_41D2_5CCA4BF45059"
 ],
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "height": 682
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_0303CFD8_1209_F062_4197_1FBFA958665D",
  "this.overlay_00CBB9B1_1206_F022_41AC_E110CE367DAA",
  "this.overlay_03A52BE8_1207_B022_4195_98EE5E3FECAC"
 ],
 "thumbnailUrl": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_t.jpg",
 "id": "panorama_1FB19609_11C7_D190_4197_3B70A15B24F0",
 "label": "Y3",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 87.95,
   "yaw": 3.32,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B"
  },
  {
   "backwardYaw": 56.13,
   "yaw": 77.36,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1E94E33B_11C6_B7F0_419E_42B068C19173"
  },
  {
   "backwardYaw": 56.13,
   "yaw": 45.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_1E94E33B_11C6_B7F0_419E_42B068C19173"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -177.19,
  "class": "PanoramaCameraPosition",
  "pitch": 7.54
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeInEffect_39987B4F_1219_507E_41A1_C96D79ADF79C",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_8086CCD9_964E_AA2A_41DF_A9E3EA7C023E",
  "this.overlay_8E9CCB1F_964E_6E26_41AE_AA36904D1FF9"
 ],
 "thumbnailUrl": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_t.jpg",
 "id": "panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC",
 "label": "Z10",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 153.96,
   "yaw": 81.28,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D"
  },
  {
   "backwardYaw": -2.17,
   "yaw": 98.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "2",
 "id": "panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C",
 "overlays": [
  "this.overlay_09F74AD2_06D9_5BA8_419A_1699CF3A4006",
  "this.overlay_0386A72F_0C48_24F0_418E_4644DDF1DDB9",
  "this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.36,
   "yaw": 179.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49"
  },
  {
   "backwardYaw": -27.28,
   "yaw": 4.09,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_t.jpg",
 "hfovMax": 80
},
{
 "initialPosition": {
  "yaw": -142.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3E753BAE_1219_503E_4187_BE8A9ACECB4E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "16",
 "id": "panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30",
 "overlays": [
  "this.overlay_40C1444C_4FCB_A738_4199_3EF68EFC8C23",
  "this.overlay_40C1744C_4FCB_A738_41CA_426B1FF2DA01",
  "this.overlay_40C1144C_4FCB_A738_41BB_C5CC13E78653",
  "this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 54.93,
   "yaw": -108.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0"
  },
  {
   "backwardYaw": -103.89,
   "yaw": 86.98,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0"
  },
  {
   "backwardYaw": -13.88,
   "yaw": -179.25,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_t.jpg",
 "hfovMax": 80
},
{
 "duration": 500,
 "id": "FadeInEffect_399B9B50_1219_5062_41AE_F20B9665E8AA",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "duration": 5000,
 "height": 3456,
 "thumbnailUrl": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_2_t.png",
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_2",
 "width": 5184,
 "label": "IMG_6030",
 "image": {
  "levels": [
   {
    "url": "media/album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo"
},
{
 "levels": [
  {
   "url": "media/zoomImage_32F8599F_1209_501E_419F_8C8001668CEA_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32F8599F_1209_501E_419F_8C8001668CEA_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32F8599F_1209_501E_419F_8C8001668CEA_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32F8599F_1209_501E_419F_8C8001668CEA_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32F8599F_1209_501E_419F_8C8001668CEA_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_326F1564_1279_F022_4186_4A37844582F6",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "yaw": 90.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3E49CB9F_1219_501E_4189_177CECCFCE53",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 500,
 "id": "FadeOutEffect_32706566_1279_F02E_41A1_86AE47F914AC",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "7",
 "id": "panorama_407237A6_4FD7_E168_417A_BDC09A783A9C",
 "overlays": [
  "this.overlay_407217A6_4FD7_E168_41CC_45148E86AB38",
  "this.panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_tcap0"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.79,
   "yaw": 47.14,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_t.jpg",
 "hfovMax": 80
},
{
 "duration": 500,
 "id": "FadeInEffect_39800B55_1219_5062_415C_435D914E5EEE",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -112.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3EF19C29_1219_5025_41AC_3E51B7EFCA8B",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "levels": [
  {
   "url": "media/zoomImage_32EB1EFF_1279_B01E_41B1_A98D5E28B6F5_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32EB1EFF_1279_B01E_41B1_A98D5E28B6F5_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32EB1EFF_1279_B01E_41B1_A98D5E28B6F5_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32EB1EFF_1279_B01E_41B1_A98D5E28B6F5_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32EB1EFF_1279_B01E_41B1_A98D5E28B6F5_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_3980EB55_1219_5062_41A2_0A4BABEA1A47",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/zoomImage_0DE731F3_120A_D025_4184_DF2956FE75BE_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_0DE731F3_120A_D025_4184_DF2956FE75BE_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_0DE731F3_120A_D025_4184_DF2956FE75BE_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_0DE731F3_120A_D025_4184_DF2956FE75BE_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_0DE731F3_120A_D025_4184_DF2956FE75BE_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_326FF565_1279_F022_419A_B5C39143C135",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -47.43,
  "class": "PanoramaCameraPosition",
  "pitch": 3.92
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_371F5FB0_1219_5022_41A6_DB3C37411252",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/zoomImage_32E272A9_127B_7022_417E_E7FCDDF83063_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32E272A9_127B_7022_417E_E7FCDDF83063_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32E272A9_127B_7022_417E_E7FCDDF83063_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32E272A9_127B_7022_417E_E7FCDDF83063_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32E272A9_127B_7022_417E_E7FCDDF83063_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_39840B59_1219_5062_41A6_885726E41BDB",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 2.05,
  "class": "PanoramaCameraPosition",
  "pitch": 15.71
 },
 "manualRotationSpeed": 1803,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 2.05,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90,
  "stereographicFactor": 1
 },
 "id": "panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetHfov": 80,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 15.71
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "levels": [
  {
   "url": "media/zoomImage_32B78385_127E_B0E2_41A1_E3DA5E27D74F_0_0.png",
   "width": 5184,
   "class": "ImageResourceLevel",
   "height": 3456
  },
  {
   "url": "media/zoomImage_32B78385_127E_B0E2_41A1_E3DA5E27D74F_0_1.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2730
  },
  {
   "url": "media/zoomImage_32B78385_127E_B0E2_41A1_E3DA5E27D74F_0_2.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1365
  },
  {
   "url": "media/zoomImage_32B78385_127E_B0E2_41A1_E3DA5E27D74F_0_3.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/zoomImage_32B78385_127E_B0E2_41A1_E3DA5E27D74F_0_4.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "id": "ImageResource_39997B4F_1219_507E_4191_6E6FA82B14AE",
 "class": "ImageResource"
},
{
 "duration": 400,
 "id": "effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0",
 "to": "left",
 "class": "SlideOutEffect",
 "easing": "quad_in"
},
{
 "duration": 500,
 "id": "FadeInEffect_399DFB52_1219_5066_41AD_5A730603220C",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "initialPosition": {
  "yaw": -102.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3E6D0BCA_1219_5066_41AD_F2DDA2404376",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 43.78,
  "class": "PanoramaCameraPosition",
  "pitch": -3.33
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": -141.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_36076EA7_1219_502E_41B0_9B6DFE335883",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 177.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_3E064BE5_1219_5022_416E_A84D23A9DEB3",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_83E91749_964A_662A_41DD_4664E9CA991E",
  "this.overlay_81413E28_964A_666A_41E1_6B7F52803D8F"
 ],
 "thumbnailUrl": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_t.jpg",
 "id": "panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F",
 "label": "Z8",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -12.59,
   "yaw": 92.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D"
  },
  {
   "backwardYaw": 112.44,
   "yaw": -77.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "duration": 500,
 "id": "FadeInEffect_3270C567_1279_F02E_41AD_BCB871CE6C32",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "initialPosition": {
  "hfov": 80,
  "yaw": 133.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_31D6BD94_1219_50E2_41B0_9B6E0EF9799F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 200,
 "id": "effect_400C418A_547D_B0A3_41BD_8A5BC1E4FFB9",
 "class": "FadeOutEffect",
 "easing": "quad_out"
},
{
 "initialPosition": {
  "yaw": 86.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_36293ED1_1219_5062_418D_7257D0F5A9F5",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "height": 4608,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_81F3DDEF_964D_A5E5_41B3_D641202B271E"
 ],
 "thumbnailUrl": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_t.jpg",
 "id": "panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D",
 "label": "Z11",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 81.28,
   "yaw": 153.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "vrPointerSelectionColor": "#000066",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#9BC1BB"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_338F6AEF_3EB7_0962_41C7_5C633A24BCCC",
 "left": "0%",
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_30F8DAD0_3EB7_09BE_411F_0CBC4DA7DF80",
  "this.Container_30F8BAD0_3EB7_09BE_41BA_6ECC080992DA"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--- LEFT PANEL 6"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1EDE886C_3F5F_0966_41BC_353B57EC559D",
 "backgroundOpacity": 0.3,
 "children": [
  "this.MapViewer",
  "this.IconButton_1EF1773B_3F51_F8E2_41B6_E8192CA62870"
 ],
 "scrollBarVisible": "rollOver",
 "right": "2.48%",
 "width": "71.392%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "bottom": "11.5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "height": "75.374%",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Containerfloorplan"
 },
 "shadow": false,
 "layout": "absolute",
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_1A0554E5_3FF0_F966_41B8_0078AC614EAC",
 "backgroundOpacity": 0,
 "children": [
  "this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A",
  "this.IconButton_1A18A158_3FF7_18AE_41B6_E21D02F5A9B7"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "14.431%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "class": "Container",
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Containerkanan"
 },
 "verticalAlign": "top",
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_3397D7C3_1209_5066_41A4_3C9692EF45E3",
 "left": "2%",
 "children": [
  "this.Image_33333699_1209_D0E2_4194_31FBB4C3EBE1",
  "this.Image_32D3811B_120B_51E6_4198_BED40A5DF159",
  "this.Image_0D02C5B8_1209_D022_415C_1E326B63523C",
  "this.Image_0CED2514_1207_51E3_4192_4EE98854D453",
  "this.Image_0C834FC2_1207_F066_41A8_044A1C4FEEAD",
  "this.Image_325E96EB_123A_F026_4179_8F0F97A77D96",
  "this.Image_0CEDED9D_123B_D0E2_4196_7462A0F7F830",
  "this.Image_0D2767ED_1239_5022_41A7_32D43FA71512",
  "this.Image_0C9FA927_1239_502E_419E_7C01F1781994",
  "this.Image_0C9A2C22_123F_B026_41AB_258291CFC961",
  "this.Image_0C8B1470_123F_7022_419F_2450027E5387",
  "this.Image_0CD86FC4_1239_B062_41B0_D6996CD4413A",
  "this.Image_0C971F4B_1239_5066_41B0_D4172CF9E6FC",
  "this.Image_0CF075ED_123B_D03D_41AC_E09DC89B31EA",
  "this.Image_0CF9F78A_123A_B0E6_41AC_B55E00A84555",
  "this.Image_30964C39_121F_5022_41AB_D236A064B802",
  "this.Image_0D40F32A_1219_B026_41A8_E891BF109962",
  "this.Image_0D42EA88_121B_50E2_4157_CE807849125C",
  "this.Image_0D6145D0_121A_B062_4147_BF55FD1CCC60",
  "this.Image_0D7AEFDA_1219_5066_41AC_49C28137FA7C",
  "this.IconButton_0D6BD6C7_120A_B06D_41AD_F3B26F592B2E"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.5,
 "right": "2%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "2%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "bottom": "2%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container foto"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "UIComponent",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "borderRadius": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "UIComponent47819"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "ZoomImage",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "borderRadius": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage47820"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "paddingRight": 5,
 "paddingLeft": 5,
 "class": "CloseButton",
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "borderRadius": 0,
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton47821"
 },
 "fontSize": "1.29vmin",
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_318C6562_3EB1_3B62_41B9_0F3C092F879D",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "width": 27,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "class": "IconButton",
 "propagateClick": false,
 "height": 28,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_318C6562_3EB1_3B62_41B9_0F3C092F879D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_318C6562_3EB1_3B62_41B9_0F3C092F879D.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton Sound"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_318C8562_3EB1_3B62_41B7_C87FD7621B30",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "width": 29,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "class": "IconButton",
 "propagateClick": false,
 "height": 30,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_318C8562_3EB1_3B62_41B7_C87FD7621B30_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_318C8562_3EB1_3B62_41B7_C87FD7621B30.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton Fullscreen"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_318CB562_3EB1_3B62_41B3_D6C0A7EE0BCB",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "class": "IconButton",
 "propagateClick": false,
 "height": 35,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_318CB562_3EB1_3B62_41B3_D6C0A7EE0BCB_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_318CB562_3EB1_3B62_41B3_D6C0A7EE0BCB.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 60,
 "id": "IconButton_318C7562_3EB1_3B62_41BC_FCBABC24D25F",
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "width": 35,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "class": "IconButton",
 "propagateClick": false,
 "height": 33,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_318C7562_3EB1_3B62_41BC_FCBABC24D25F_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_318C7562_3EB1_3B62_41BC_FCBABC24D25F.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 92.52,
   "hfov": 11.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2, this.camera_3E53CB84_1219_50E2_41AC_815314193A04); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 92.52,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_1_HS_0_0.png",
      "width": 400,
      "class": "ImageResourceLevel",
      "height": 298
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 11.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41A77AC2_4FC8_E329_41C4_334D03040514",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 174.92,
   "hfov": 11.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.68
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D, this.camera_3E5EEB92_1219_50E6_4184_F5E8D04A78C2); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 174.92,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_1_HS_1_0.png",
      "width": 400,
      "class": "ImageResourceLevel",
      "height": 363
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.68,
   "hfov": 11.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41A75AC2_4FC8_E329_41D3_39A261A9C2B7",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 8.46,
   "hfov": 29.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.4
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_521C0B23_599F_1F4C_41D4_2A07055DE335, this.camera_3517D18F_1219_70FE_41A1_0BA5B7E50DFF); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 8.46,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0_HS_0_0.png",
      "width": 1095,
      "class": "ImageResourceLevel",
      "height": 1095
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.4,
   "hfov": 29.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4AB2AFDA_598D_76FD_41B7_D20AC1E72B51",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -143.78,
   "hfov": 29.38,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.62
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0, this.camera_3568C181_1219_70E2_419B_E46D76FE2C22); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -143.78,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3_0_HS_1_0.png",
      "width": 1095,
      "class": "ImageResourceLevel",
      "height": 1095
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.62,
   "hfov": 29.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4B39B6D6_598D_36F5_41C1_573BF6FC9236",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_1_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 174.57,
   "hfov": 22.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D, this.camera_3650EE37_1219_502E_419A_E2B9DDF6CEC8); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 174.57,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_1_HS_0_0.png",
      "width": 858,
      "class": "ImageResourceLevel",
      "height": 683
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 22.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E0784B5_964A_BA65_41C4_623844C733ED",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -167.67,
   "hfov": 22.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.29
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB, this.camera_36592E45_1219_5062_41B0_D1D1F07F0C17); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -167.67,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E691B9_7D41_0813_41B4_229318D5EC3A_1_HS_1_0.png",
      "width": 847,
      "class": "ImageResourceLevel",
      "height": 933
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.29,
   "hfov": 22.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8C77A6F6_964B_A7E6_41D2_45E2BA6C3437",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 165.63,
   "hfov": 35.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.85
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04, this.camera_3E753BAE_1219_503E_4187_BE8A9ACECB4E); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 165.63,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_1_HS_0_0.png",
      "width": 1380,
      "class": "ImageResourceLevel",
      "height": 1154
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.85,
   "hfov": 35.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_85D93C9A_965B_AA2E_41E2_884706359521",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -101.41,
   "hfov": 18.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.86
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7681AE61_7D43_3833_41D6_173CD45465C2, this.camera_3E49CB9F_1219_501E_4189_177CECCFCE53); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -101.41,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416_1_HS_1_0.png",
      "width": 712,
      "class": "ImageResourceLevel",
      "height": 723
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.86,
   "hfov": 18.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_853C8C8E_965A_EA26_41DC_02DE43F95DE7",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -178.43,
   "hfov": 40.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.07
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_521C0B23_599F_1F4C_41D4_2A07055DE335, this.camera_37AB2052_1219_7066_41A4_D6C1C0F0D0C9); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -178.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD_0_HS_0_0.png",
      "width": 1505,
      "class": "ImageResourceLevel",
      "height": 1434
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.07,
   "hfov": 40.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4A1E46A4_59B3_6954_41A0_D9F63B4F0FC6",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -74.73,
   "hfov": 21.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.8
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -74.73,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_1_HS_0_0.png",
      "width": 811,
      "class": "ImageResourceLevel",
      "height": 854
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.8,
   "hfov": 21.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_03A44A46_1206_B06E_4193_73AF4E035B27",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 129.45,
   "hfov": 32.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.89
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1E94E33B_11C6_B7F0_419E_42B068C19173, this.camera_34B2512F_1219_703E_41A1_B5719F0F06BD); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 129.45,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_1_HS_1_0.png",
      "width": 1222,
      "class": "ImageResourceLevel",
      "height": 1307
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.89,
   "hfov": 32.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_01172699_1219_B0E2_41AF_4F51DAD140D0",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_1_HS_2_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 177.54,
   "hfov": 30.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.74
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 177.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3_1_HS_2_0.png",
      "width": 1146,
      "class": "ImageResourceLevel",
      "height": 905
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.74,
   "hfov": 30.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_00C08B4A_121A_B066_41B0_7D858DE43C2F",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.71,
   "hfov": 18.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.95
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2, this.camera_371F5FB0_1219_5022_41A6_DB3C37411252); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -3.71,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_1_HS_0_0.png",
      "width": 688,
      "class": "ImageResourceLevel",
      "height": 775
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.95,
   "hfov": 18.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_410BDA29_4FC8_637B_41C1_F8B2ADE7F80D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -179.76,
   "hfov": 11.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.29
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827, this.camera_3712DFA2_1219_5026_4184_9D67B14CFF64); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -179.76,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_1_HS_1_0.png",
      "width": 441,
      "class": "ImageResourceLevel",
      "height": 478
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.29,
   "hfov": 11.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_410BAA29_4FC8_637B_41D1_29C321776BE2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 87.95,
   "hfov": 22.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.37
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1FB19609_11C7_D190_4197_3B70A15B24F0, this.camera_3763CF94_1219_50E2_4191_094A1FBB4DD0); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 87.95,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0_HS_2_0.png",
      "width": 844,
      "class": "ImageResourceLevel",
      "height": 816
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.37,
   "hfov": 22.88,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1D19825A_120E_B066_419E_45F8ECDE9B0A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -93.56,
   "hfov": 17.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.45
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09, this.camera_37751F86_1219_50EE_4193_4B164C07F24A); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -93.56,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B_0_HS_3_0.png",
      "width": 663,
      "class": "ImageResourceLevel",
      "height": 663
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.45,
   "hfov": 17.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1D8E5244_120A_B062_41A4_9701B2A2F73B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -145.3,
   "hfov": 39.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.69
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76E691B9_7D41_0813_41B4_229318D5EC3A, this.camera_36111E8B_1219_50E6_41A4_01B456E40378); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -145.3,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E6DE7E_7D41_3811_41B2_71626D6AAEAB_1_HS_0_0.png",
      "width": 1480,
      "class": "ImageResourceLevel",
      "height": 1580
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.69,
   "hfov": 39.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E817468_964A_BAEB_41D4_F8543924A453",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 11.19,
   "hfov": 9.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.34
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827, this.camera_36E46F17_1219_51EE_4190_205397083290); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 11.19,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_1_HS_0_0.png",
      "width": 349,
      "class": "ImageResourceLevel",
      "height": 316
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.34,
   "hfov": 9.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4097FF3B_4FC9_A15F_41B2_4126521DD4D7",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -179.6,
   "hfov": 9.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.3
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2, this.camera_36922F25_1219_5022_41B1_F2698B3783DD); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -179.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_1_HS_1_0.png",
      "width": 334,
      "class": "ImageResourceLevel",
      "height": 419
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.3,
   "hfov": 9.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40978F3B_4FC9_A15F_41BB_D2EAE7F375AC",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -11.57,
   "hfov": 6.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.1
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25, this.camera_31393D5D_1219_5062_41AA_FD9231D91957); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -11.57,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_1_HS_0_0.png",
      "width": 234,
      "class": "ImageResourceLevel",
      "height": 315
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.1,
   "hfov": 6.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_43273D27_4FC8_6176_41CD_84B35E747788",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 10.56,
   "hfov": 5.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.54
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2, this.camera_31328D50_1219_5062_4146_CD5731D72200); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 10.56,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_1_HS_1_0.png",
      "width": 197,
      "class": "ImageResourceLevel",
      "height": 186
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.54,
   "hfov": 5.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4327ED28_4FC8_6179_41D2_ADEFCB49E803",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 91.98,
   "hfov": 9.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.28
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E, this.camera_310B1D41_1219_5062_41B0_4F390B9D14E4); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 91.98,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE_0_HS_2_0.png",
      "width": 346,
      "class": "ImageResourceLevel",
      "height": 330
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.28,
   "hfov": 9.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4327CD28_4FC8_6179_41D0_34BFEEA67B96",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_4327AD28_4FC8_6179_41C8_1A8303379853",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 79.4,
   "hfov": 12.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.67
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728, this.camera_3EE0EC36_1219_502E_41A5_30C43D1171BC); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 79.4,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_1_HS_0_0.png",
      "width": 460,
      "class": "ImageResourceLevel",
      "height": 501
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.67,
   "hfov": 12.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4080DECE_4FC8_6338_41CD_7F7B3CE0BC96",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -90.37,
   "hfov": 9.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.88
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3, this.camera_3EEE1C44_1219_5062_4192_D4D81EBDEC4A); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -90.37,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0_0_HS_1_0.png",
      "width": 360,
      "class": "ImageResourceLevel",
      "height": 420
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.88,
   "hfov": 9.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4B87C3BD_598F_2EB7_41AF_650A34F59C0B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -122.88,
   "hfov": 11.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.46
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2, this.camera_31E8FDD7_1219_506E_419E_DF9C4FE4EA85); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -122.88,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_1_HS_0_0.png",
      "width": 410,
      "class": "ImageResourceLevel",
      "height": 372
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.46,
   "hfov": 11.17,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4190C09B_4FC9_9F5F_41C8_2308EB2F1C04",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_1_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -40.07,
   "hfov": 9.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.14
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2, this.camera_31F4BDBC_1219_5022_41A0_64C7A0DAC1F6); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -40.07,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_1_HS_1_0.png",
      "width": 346,
      "class": "ImageResourceLevel",
      "height": 300
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.14,
   "hfov": 9.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4190D09B_4FC9_9F5F_41B6_C80AD4B3078D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_1_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 38.75,
   "hfov": 11.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.89
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25, this.camera_319C4DF2_1219_5026_4165_3B97DD9A56DD); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 38.75,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_1_HS_2_0.png",
      "width": 438,
      "class": "ImageResourceLevel",
      "height": 376
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.89,
   "hfov": 11.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4190E09B_4FC9_9F5F_41C0_5CA231B362F9",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -179.8,
   "hfov": 14.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.66
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7681AE61_7D43_3833_41D6_173CD45465C2, this.camera_31871DFF_1219_501E_418E_A82443FCCEB6); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -179.8,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0_HS_3_0.png",
      "width": 527,
      "class": "ImageResourceLevel",
      "height": 578
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.66,
   "hfov": 14.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_98DC07C0_964B_A61A_41D6_65EE765B3FE2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -12.59,
   "hfov": 7.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.43
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F, this.camera_31C9FDAF_1219_503E_4176_2C5600152561); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -12.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0_HS_4_0.png",
      "width": 293,
      "class": "ImageResourceLevel",
      "height": 322
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.43,
   "hfov": 7.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_99DE6512_9657_9A3F_41D4_D5FBA657E8A8",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -2.17,
   "hfov": 7.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.49
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC, this.camera_31914DE4_1219_5022_4192_6302BE4B37C2); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -2.17,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0_HS_5_0.png",
      "width": 291,
      "class": "ImageResourceLevel",
      "height": 311
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.49,
   "hfov": 7.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_853F49FB_9655_ADED_41BF_99CF84456B49",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 27.31,
   "hfov": 8.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.42
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76E691B9_7D41_0813_41B4_229318D5EC3A, this.camera_31FD2DC9_1219_5062_4184_9FC9AA46A29C); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 27.31,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D_0_HS_6_0.png",
      "width": 320,
      "class": "ImageResourceLevel",
      "height": 352
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.42,
   "hfov": 8.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_85E1DF04_965B_E61A_41DC_66F919810543",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -179.02,
   "hfov": 17.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.08
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728, this.camera_34AFC14B_1219_7066_4170_55A0E3BB5C62); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -179.02,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_1_HS_0_0.png",
      "width": 624,
      "class": "ImageResourceLevel",
      "height": 638
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.08,
   "hfov": 17.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40F864AD_4FC8_E77B_41CB_9249DB79C971",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 3.44,
   "hfov": 7.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.35
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_41724950_4FC8_E129_41A3_D8B03FE57827, this.camera_34A0B13D_1219_7022_416F_A60D18CC7044); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 3.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_1_HS_1_0.png",
      "width": 280,
      "class": "ImageResourceLevel",
      "height": 310
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.35,
   "hfov": 7.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40F844AD_4FC8_E77B_41C9_9EDDD377188D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -177.51,
   "hfov": 22.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.65
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -177.51,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_1_HS_0_0.png",
      "width": 828,
      "class": "ImageResourceLevel",
      "height": 828
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.65,
   "hfov": 22.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_015EBFBE_121B_B01E_41AC_C1F737ABE05A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -143.7,
   "hfov": 24.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.5
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1F8B6B0B_11C7_5790_4183_E62D5B16AEA3, this.camera_3E606BBC_1219_5022_41A9_421BE5ACC55C); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -143.7,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_1_HS_1_0.png",
      "width": 898,
      "class": "ImageResourceLevel",
      "height": 926
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.5,
   "hfov": 24.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_04019A6C_121A_D022_4184_E0133B4FCF25",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 56.13,
   "hfov": 24.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.23
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1FB19609_11C7_D190_4197_3B70A15B24F0, this.camera_3E6D0BCA_1219_5066_41AD_F2DDA2404376); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 56.13,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1E94E33B_11C6_B7F0_419E_42B068C19173_1_HS_2_0.png",
      "width": 898,
      "class": "ImageResourceLevel",
      "height": 926
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.23,
   "hfov": 24.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_044B90AC_1219_D022_4169_D24C1F4FC96D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 50.32,
   "hfov": 14.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.89
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728, this.camera_31BB5E1B_1219_53E6_41AB_CDA7966513B6); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 50.32,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_1_HS_0_0.png",
      "width": 534,
      "class": "ImageResourceLevel",
      "height": 492
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.89,
   "hfov": 14.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4062BCD8_4FD8_A0D8_41D1_24E5F8A74D7A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -46.05,
   "hfov": 11.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.21
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9, this.camera_31A5FE29_1219_5022_4164_B4FAE1F27804); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -46.05,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_1_HS_1_0.png",
      "width": 436,
      "class": "ImageResourceLevel",
      "height": 432
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.21,
   "hfov": 11.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40624CD8_4FD8_A0D8_41AE_8BAB2EF92B85",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -101.53,
   "hfov": 16.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.84
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -101.53,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_1_HS_2_0.png",
      "width": 592,
      "class": "ImageResourceLevel",
      "height": 623
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.84,
   "hfov": 16.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40625CD8_4FD8_A0D8_41C6_158829CBF50B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -43.17,
   "hfov": 17.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.18
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D, this.camera_367BFE6F_1219_503E_41AA_7BC0AAD2FCD6); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -43.17,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_1_HS_0_0.png",
      "width": 650,
      "class": "ImageResourceLevel",
      "height": 801
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.18,
   "hfov": 17.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8473E06A_965E_BAEF_41C7_262E88DE2D8B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -89.78,
   "hfov": 7.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.14
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416, this.camera_3667DE7D_1219_5022_41A4_1DB98D090146); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -89.78,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_1_HS_1_0.png",
      "width": 282,
      "class": "ImageResourceLevel",
      "height": 314
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.14,
   "hfov": 7.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8479DA80_965E_6E1B_41CB_4D861D48AEE2",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -99.4,
   "hfov": 8.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.07
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76D920C3_7D41_0876_41B5_14382B793FFC, this.camera_36718E61_1219_5022_41AC_3E4DDFC765AD); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -99.4,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_7681AE61_7D43_3833_41D6_173CD45465C2_1_HS_2_0.png",
      "width": 306,
      "class": "ImageResourceLevel",
      "height": 279
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.07,
   "hfov": 8.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_85E8AEA0_965D_A61B_41D6_BDB19383BB91",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -114.75,
   "hfov": 11.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.09
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25, this.camera_34668089_1219_70E2_41A2_45F6BCB4DF67); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -114.75,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_1_HS_0_0.png",
      "width": 422,
      "class": "ImageResourceLevel",
      "height": 471
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.09,
   "hfov": 11.53,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_418839CB_4FC8_613F_41AB_E4A55ED4493C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_1_HS_1_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -3.25,
   "hfov": 12.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D, this.camera_3477907C_1219_7022_4196_B823C99A0A6A); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -3.25,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_1_HS_1_0.png",
      "width": 451,
      "class": "ImageResourceLevel",
      "height": 304
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4,
   "hfov": 12.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_418819CB_4FC8_613F_41C2_1624C2F04E19",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 24
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 108.29,
   "hfov": 5.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.97
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE, this.camera_34131097_1219_70EE_41AD_552DFFFB2599); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 108.29,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_1_HS_2_0.png",
      "width": 198,
      "class": "ImageResourceLevel",
      "height": 298
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.97,
   "hfov": 5.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_418809CB_4FC8_613F_41A2_DFC5546318B7",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 37.4,
   "hfov": 28.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.64
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76D97967_7D40_F83F_41DC_B5AA3A7D9416, this.camera_37F6D001_1219_4FE2_41AA_22E153072F96); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 37.4,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E2330A_7D41_09F6_41D7_2424F47AFB04_1_HS_0_0.png",
      "width": 1095,
      "class": "ImageResourceLevel",
      "height": 1095
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.64,
   "hfov": 28.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_820532E8_9656_7FEB_41D3_E8F61B52E99E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 84.64,
   "hfov": 6.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.33
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A, this.camera_37817029_1219_7022_41A4_72C37166260D); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 84.64,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_0_0.png",
      "width": 221,
      "class": "ImageResourceLevel",
      "height": 295
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.33,
   "hfov": 6.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_416C0FD6_4FCF_A128_41CE_DE01AB8CF5E9",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 137.91,
   "hfov": 8.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.31
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259, this.camera_37BED045_1219_7062_418A_1BCCA173FD3C); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 137.91,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_1_0.png",
      "width": 326,
      "class": "ImageResourceLevel",
      "height": 412
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.31,
   "hfov": 8.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_416C2FD6_4FCF_A128_41BA_893C4C516613",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 15.52,
   "hfov": 10.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.81
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_41A70AC2_4FC8_E329_41BC_92F37E2C16E2, this.camera_3792601C_1219_4FE2_4181_00090ECCAAFA); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 15.52,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_2_0.png",
      "width": 370,
      "class": "ImageResourceLevel",
      "height": 411
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.81,
   "hfov": 10.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_416CFFD6_4FCF_A128_41C8_1E0DF759EE2E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 27
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -85.86,
   "hfov": 8.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.97
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E, this.camera_378FF037_1219_702E_41A0_5531B0E8D200); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -85.86,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_1_HS_3_0.png",
      "width": 295,
      "class": "ImageResourceLevel",
      "height": 508
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.97,
   "hfov": 8.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_416C9FD6_4FCF_A128_418E_352F3A876F6F",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 0.75,
   "hfov": 22.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.22
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09, this.camera_36293ED1_1219_5062_418D_7257D0F5A9F5); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 0.75,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_1_HS_0_0.png",
      "width": 817,
      "class": "ImageResourceLevel",
      "height": 706
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.22,
   "hfov": 22.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AD33609_121B_73E2_419F_96D86E053B58",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 52.88,
   "hfov": 20.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.09
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926, this.camera_36D5FEDF_1219_501E_41A1_88BA628451D2); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 52.88,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB04879_11C6_B273_4195_46E7946468F7_1_HS_1_0.png",
      "width": 762,
      "class": "ImageResourceLevel",
      "height": 817
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.09,
   "hfov": 20.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_08710AB4_121A_D022_4175_5BDF060022D0",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -94.75,
   "hfov": 8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.39
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE, this.camera_37DA8FE6_1219_502E_41B1_43922CF84BB3); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -94.75,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_1_HS_0_0.png",
      "width": 293,
      "class": "ImageResourceLevel",
      "height": 303
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.39,
   "hfov": 8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41BA5DC4_4FC8_6128_41C6_66BE5D3BED27",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_1_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -8.25,
   "hfov": 9.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.22
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -8.25,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_1_HS_1_0.png",
      "width": 334,
      "class": "ImageResourceLevel",
      "height": 292
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.22,
   "hfov": 9.12,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41BA3DC4_4FC8_6128_419D_76554DB8625E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 74.77,
   "hfov": 8.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.37
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2, this.camera_37C72FF3_1219_5026_41B0_E2E43C370263); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 74.77,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_1_HS_2_0.png",
      "width": 324,
      "class": "ImageResourceLevel",
      "height": 303
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.37,
   "hfov": 8.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41BA2DC4_4FC8_6128_41D0_598E0B7C4EF7",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_41BA7DC4_4FC8_6128_41D0_451F706F532E_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 112.44,
   "hfov": 34.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.58
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F, this.camera_361DFE99_1219_50E2_4195_195B2B580059); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 112.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750_1_HS_0_0.png",
      "width": 1320,
      "class": "ImageResourceLevel",
      "height": 1363
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.58,
   "hfov": 34.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_804BC676_964A_A6E6_41E1_BD96FAEB5F9C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 4.12,
   "hfov": 36.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.97
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5212D58F_599E_EB53_41CC_F6D6C19295FD, this.camera_373D2FCA_1219_5066_419F_689D38077830); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 4.12,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0_HS_0_0.png",
      "width": 1474,
      "class": "ImageResourceLevel",
      "height": 1362
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.97,
   "hfov": 36.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4AE4B0CE_59B2_EAD5_41C5_6A5C3B310BEF",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 179.62,
   "hfov": 34.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.06
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5265EDD4_599F_1AF4_41B8_FABB8161B2C3, this.camera_372A6FD8_1219_5062_41A5_85EF6621DC50); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 179.62,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_521C0B23_599F_1F4C_41D4_2A07055DE335_0_HS_1_0.png",
      "width": 1294,
      "class": "ImageResourceLevel",
      "height": 1209
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.06,
   "hfov": 34.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4DE9A596_59B3_2B75_41C8_E8895BCC0C8B",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -170.59,
   "hfov": 20.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.36
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0, this.camera_31209D6B_1219_5026_41B1_76F375C4A043); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -170.59,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_1_HS_0_0.png",
      "width": 740,
      "class": "ImageResourceLevel",
      "height": 752
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.36,
   "hfov": 20.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_407E7E1D_4FD8_635B_41C0_FEDCC4DA5519",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -1.79,
   "hfov": 13.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 13.93
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_407237A6_4FD7_E168_417A_BDC09A783A9C, this.camera_31275D79_1219_5022_419E_560A8E614CA5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -1.79,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_1_HS_1_0.png",
      "width": 514,
      "class": "ImageResourceLevel",
      "height": 559
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.93,
   "hfov": 13.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_407E6E1D_4FD8_635B_41B0_1B166296BF15",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#000066",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 2,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "progressBarBackgroundColor": [
  "#9BC1BB"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeight": 10,
 "click": "this.setMediaBehaviour(this.playList_39327B10_1219_51E2_41A6_293E85791D0C, 0)",
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -8.96,
   "hfov": 6.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.19
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_418879CB_4FC8_613F_41B5_82FCA613ABB2, this.camera_3633FEB4_1219_5022_41A6_6D2B6B363E0B); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -8.96,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_1_HS_0_0.png",
      "width": 245,
      "class": "ImageResourceLevel",
      "height": 304
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.19,
   "hfov": 6.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4184786E_4FC8_EFF9_41CE_5C345B27EC55",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 31.75,
   "hfov": 7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.87
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_43269D27_4FC8_6177_419F_2E423E1D8BCE, this.camera_363FDEC2_1219_5066_4173_483DDAF8A6CF); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 31.75,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_1_HS_1_0.png",
      "width": 258,
      "class": "ImageResourceLevel",
      "height": 328
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.87,
   "hfov": 7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4184586E_4FC8_EFF9_41C8_2A841176E5B1",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_1_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -42.29,
   "hfov": 5.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.7
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D, this.camera_36076EA7_1219_502E_41B0_9B6DFE335883); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -42.29,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_1_HS_2_0.png",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.7,
   "hfov": 5.42,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4185B86E_4FC8_EFF9_41C7_B77D16C5F0EC",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_4184086E_4FC8_EFF9_41D0_4AFC5869AE25_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "items": [
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_0",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.48",
     "class": "PhotoCameraPosition",
     "y": "0.35",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_1",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.72",
     "class": "PhotoCameraPosition",
     "y": "0.73",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_2",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.49",
     "class": "PhotoCameraPosition",
     "y": "0.71",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_3",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.32",
     "class": "PhotoCameraPosition",
     "y": "0.30",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_4",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "y": "0.32",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_5",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.65",
     "class": "PhotoCameraPosition",
     "y": "0.31",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_6",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.34",
     "class": "PhotoCameraPosition",
     "y": "0.26",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_7",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.65",
     "class": "PhotoCameraPosition",
     "y": "0.41",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_8",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.69",
     "class": "PhotoCameraPosition",
     "y": "0.57",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_9",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.40",
     "class": "PhotoCameraPosition",
     "y": "0.65",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_10",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.38",
     "class": "PhotoCameraPosition",
     "y": "0.60",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_11",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.49",
     "class": "PhotoCameraPosition",
     "y": "0.67",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_12",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.47",
     "class": "PhotoCameraPosition",
     "y": "0.29",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_13",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.41",
     "class": "PhotoCameraPosition",
     "y": "0.51",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_14",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "y": "0.67",
     "zoomFactor": 1.1
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_15A75A9F_3EF7_09A3_41C7_508C2EF32D07_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 1.36,
   "hfov": 9.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.14
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C, this.camera_34831122_1219_7026_4176_B1828053C9AC); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 1.36,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_0_HS_0_0.png",
      "width": 341,
      "class": "ImageResourceLevel",
      "height": 300
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.14,
   "hfov": 9.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_09858E54_06C6_DAA8_4187_EF4427796952",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 26
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -108.81,
   "hfov": 8.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.33
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0, this.camera_36C09EED_1219_5022_4195_EA13506EF3C9); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -108.81,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_1_HS_0_0.png",
      "width": 307,
      "class": "ImageResourceLevel",
      "height": 500
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.33,
   "hfov": 8.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_411D7F1E_4FC9_E159_41D0_9F0063E695C1",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -173.8,
   "hfov": 7.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.13
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -173.8,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_1_HS_1_0.png",
      "width": 273,
      "class": "ImageResourceLevel",
      "height": 344
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.13,
   "hfov": 7.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_411D6F1E_4FC9_E159_41BE_6CB5B3128BC0",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -2.1,
   "hfov": 9.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.78
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B, this.camera_3579A174_1219_7022_4197_F6D95DD3E124); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -2.1,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_1_HS_0_0.png",
      "width": 355,
      "class": "ImageResourceLevel",
      "height": 295
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.78,
   "hfov": 9.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41725950_4FC8_E129_41D0_A363A1814D7A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -104.17,
   "hfov": 8.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.5
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F, this.camera_354B2166_1219_702E_4182_6931DE83773F); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -104.17,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_1_HS_1_0.png",
      "width": 329,
      "class": "ImageResourceLevel",
      "height": 276
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.5,
   "hfov": 8.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4173B950_4FC8_E129_41B4_A6DE57466C4C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 96.68,
   "hfov": 9.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.86
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4097CF3B_4FC9_A15F_41D0_57DBFEE00C7A, this.camera_355C4159_1219_7062_4198_A744EDDFEF59); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 96.68,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_41724950_4FC8_E129_41A3_D8B03FE57827_1_HS_2_0.png",
      "width": 341,
      "class": "ImageResourceLevel",
      "height": 374
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.86,
   "hfov": 9.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41738950_4FC8_E129_41CC_1109888046B1",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_41724950_4FC8_E129_41A3_D8B03FE57827_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_1_HS_0_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -79.42,
   "hfov": 9.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.84
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728, this.camera_31DF7DA1_1219_5022_4199_98D8A023D9DC); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -79.42,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_1_HS_0_0.png",
      "width": 347,
      "class": "ImageResourceLevel",
      "height": 421
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.84,
   "hfov": 9.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_405FC15E_4FC8_61D9_41D1_AD7AA3ABAF45",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -40.52,
   "hfov": 10.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.47
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315, this.camera_31D6BD94_1219_50E2_41B0_9B6E0EF9799F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -40.52,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_1_HS_1_0.png",
      "width": 397,
      "class": "ImageResourceLevel",
      "height": 486
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.47,
   "hfov": 10.81,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_405FB15F_4FC8_61D8_41C7_AF53FD59C8B8",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_1_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 67.53,
   "hfov": 10.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.7
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0, this.camera_312EDD86_1219_50EE_41A6_8B0CF6A7E9E9); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 67.53,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_1_HS_2_0.png",
      "width": 389,
      "class": "ImageResourceLevel",
      "height": 321
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.7,
   "hfov": 10.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_405F915F_4FC8_61D8_41C3_A8BDCFFE681E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 91.57,
   "hfov": 20.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.15
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B, this.camera_31006D25_1219_5022_41A2_8E040281849D); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 91.57,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_1_HS_0_0.png",
      "width": 747,
      "class": "ImageResourceLevel",
      "height": 747
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.15,
   "hfov": 20.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_07B2FEEF_121E_D03E_41B1_68213B818051",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 177.54,
   "hfov": 27.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.17
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926, this.camera_31066D33_1219_5026_416C_EF9733ED5A6C); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 177.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_1_HS_1_0.png",
      "width": 1014,
      "class": "ImageResourceLevel",
      "height": 833
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.17,
   "hfov": 27.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_05F40FFA_121F_D026_4163_68DACE051C1A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -93.9,
   "hfov": 23.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.72
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1FB04879_11C6_B273_4195_46E7946468F7, this.camera_3E9E9C51_1219_5062_41AD_754B153FA62C); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -93.9,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09_1_HS_2_0.png",
      "width": 858,
      "class": "ImageResourceLevel",
      "height": 900
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.72,
   "hfov": 23.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0A4267A2_121E_F026_41A2_13BD5A0F3F88",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 10.06,
   "hfov": 21.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.76
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1FB1F1C1_11C7_D290_41AF_EDC0C37F9D09, this.camera_3430B0B3_1219_7026_41B0_04F4046C2C28); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 10.06,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_1_HS_0_0.png",
      "width": 815,
      "class": "ImageResourceLevel",
      "height": 759
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.76,
   "hfov": 21.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_050DA8A0_1219_D022_4182_63E06A465C60",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -43.77,
   "hfov": 19.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.9
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1FB04879_11C6_B273_4195_46E7946468F7, this.camera_340230A5_1219_7022_41AC_0BBC82E139D7); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -43.77,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_1_HS_1_0.png",
      "width": 717,
      "class": "ImageResourceLevel",
      "height": 801
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.9,
   "hfov": 19.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0AC3FE43_1219_5066_4173_9B28F08EF01A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 48.03,
   "hfov": 20.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.44
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 48.03,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB18E62_11C7_B191_41A0_B1CB717AE926_1_HS_2_0.png",
      "width": 773,
      "class": "ImageResourceLevel",
      "height": 843
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.44,
   "hfov": 20.85,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_05EF34D3_121B_7066_41A6_A89C8F1A012E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -103.89,
   "hfov": 15.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.95
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30, this.camera_3E36EBF3_1219_5026_41B1_486A58D35A52); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -103.89,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_1_HS_0_0.png",
      "width": 587,
      "class": "ImageResourceLevel",
      "height": 533
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.95,
   "hfov": 15.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40CEC2CE_4FCB_A339_41B0_72A5B3195890",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 154.88,
   "hfov": 28.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.33
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4102CF1E_4FC9_E159_41C2_4762E743CDAC, this.camera_3E249C01_1219_57E5_4193_7C187E2250AF); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 154.88,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_1_HS_1_0.png",
      "width": 1051,
      "class": "ImageResourceLevel",
      "height": 603
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.33,
   "hfov": 28.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40CEF2CF_4FCB_A337_41B6_17009B06203D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -99.3,
   "hfov": 28.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.62
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7681AE61_7D43_3833_41D6_173CD45465C2, this.camera_31B19E0D_1219_53E2_418D_2DB6F4B32CE3); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -99.3,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_76D920C3_7D41_0876_41B5_14382B793FFC_1_HS_0_0.png",
      "width": 1095,
      "class": "ImageResourceLevel",
      "height": 1095
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.62,
   "hfov": 28.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_828A3E2F_9656_A666_41DE_6965CBD93798",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 24.42,
   "hfov": 12.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.16
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_416C1FD6_4FCF_A128_41BE_2E2684A04AF2, this.camera_3645CE54_1219_5062_41AC_DD8F05EA5AC7); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 24.42,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_1_HS_0_0.png",
      "width": 480,
      "class": "ImageResourceLevel",
      "height": 508
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.16,
   "hfov": 12.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_415C91E9_4FCF_A0FB_41C7_AA957E42797E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 125.55,
   "hfov": 10.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.81
  }
 ],
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 125.55,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_1_HS_1_0.png",
      "width": 375,
      "class": "ImageResourceLevel",
      "height": 494
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.81,
   "hfov": 10.13,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_415CB1E9_4FCF_A0FB_4161_5347794EA51E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_415C81E9_4FCF_A0FB_41A7_3EA4BB6F5259_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -132.98,
   "hfov": 14.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.16
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4080EEC9_4FC8_6338_41C6_989FCCA0D4E0, this.camera_34CA20EB_1219_7026_41B0_1744A08C4ABA); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -132.98,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_0_0.png",
      "width": 510,
      "class": "ImageResourceLevel",
      "height": 656
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.16,
   "hfov": 14.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1575EF7B_07DA_F958_417A_10159269154E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 38.43,
   "hfov": 11.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.34
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40629CD8_4FD8_A0D8_41BC_D0F94953D315, this.camera_34E7A106_1219_71EE_41AF_EE647C3968E0); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 38.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_1_0.png",
      "width": 407,
      "class": "ImageResourceLevel",
      "height": 490
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.34,
   "hfov": 11.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_1569D0A2_07D9_C7E8_418D_F6A87A767BBA",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 86.06,
   "hfov": 11.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.56
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9, this.camera_34942114_1219_71E2_4174_E7A04B8F78ED); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 86.06,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_2_0.png",
      "width": 416,
      "class": "ImageResourceLevel",
      "height": 379
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.56,
   "hfov": 11.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_15797AE0_07C6_FB68_4191_0A425FDD5056",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 149.78,
   "hfov": 11.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.5
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40F874AD_4FC8_E77B_41C4_C7F658A8091F, this.camera_34F8C0F9_1219_7022_4166_C565CF88F18A); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 149.78,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_3_0.png",
      "width": 406,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.5,
   "hfov": 11.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_169BCCE6_07C9_FF68_4165_ED728F142633",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -27.28,
   "hfov": 12.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.28
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C, this.camera_34DB40DD_1219_7062_41A6_8993E96E078A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -27.28,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0D3B0103_06C9_46A8_4194_48573AE17728_0_HS_4_0.png",
      "width": 456,
      "class": "ImageResourceLevel",
      "height": 463
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.28,
   "hfov": 12.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_15E0862A_07C9_4AF8_4161_D8539EDF9E0C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_0D3B0103_06C9_46A8_4194_48573AE17728_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -13.88,
   "hfov": 9.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.39
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30, this.camera_343F10C1_1219_7062_4190_533E7C51F5DC); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -13.88,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_1_HS_0_0.png",
      "width": 357,
      "class": "ImageResourceLevel",
      "height": 368
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.39,
   "hfov": 9.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4114130F_4FC8_A136_4167_50901FC0E646",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 180,
   "hfov": 13.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.42
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B, this.camera_342EF0CF_1219_707E_41A8_14EB2A2055CE); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 180,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_1_HS_1_0.png",
      "width": 514,
      "class": "ImageResourceLevel",
      "height": 479
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.42,
   "hfov": 13.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41142310_4FC8_A129_41C6_EA42B22E9D9A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -77.96,
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.44
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D, this.camera_3EC13C1C_1219_57E3_41A9_D2ECFF5459C6); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -77.96,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_1_HS_0_0.png",
      "width": 431,
      "class": "ImageResourceLevel",
      "height": 435
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.44,
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40BF9A4B_4FC8_A33F_41D1_C9B00223740A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -171.16,
   "hfov": 17.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.69
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_405FF15E_4FC8_61D8_41CC_3F3056DB5CB9, this.camera_3EF19C29_1219_5025_41AC_3E51B7EFCA8B); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -171.16,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_1_HS_1_0.png",
      "width": 650,
      "class": "ImageResourceLevel",
      "height": 678
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.69,
   "hfov": 17.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40BF8A4B_4FC8_A33F_41CD_83AF9C7E157A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 54.93,
   "hfov": 14.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.66
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30, this.camera_3ED35C0F_1219_57FE_41B0_247EB488BAA4); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 54.93,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_1_HS_2_0.png",
      "width": 525,
      "class": "ImageResourceLevel",
      "height": 525
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.66,
   "hfov": 14.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40BFAA4B_4FC8_A33F_41CB_FAE38FA92F71",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 824.41,
  "height": 40.68,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 240.36
 },
 "image": {
  "x": 823.92,
  "height": 40.68,
  "y": 239.76,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_0.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 40
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2A6B646A_3EF1_1962_41C4_FD41B45A4861",
 "data": {
  "label": "A"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 760.04,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 244.53
 },
 "image": {
  "x": 759.33,
  "height": 40,
  "y": 243.93,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_1.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2A1C335A_3EF7_18A2_41C5_8BFDFA71FD07",
 "data": {
  "label": "B"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 697.04,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 260.01
 },
 "image": {
  "x": 696.33,
  "height": 40,
  "y": 259.35,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_2.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2B7B5AE9_3EF1_096E_41C7_58416DF15D49",
 "data": {
  "label": "C"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 671.58,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 206.06
 },
 "image": {
  "x": 670.98,
  "height": 40,
  "y": 205.29,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_3.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_29F9B04C_3EF1_F8A6_41BC_3510B8DFE04B",
 "data": {
  "label": "D"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 753.57,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 290.57
 },
 "image": {
  "x": 752.85,
  "height": 40,
  "y": 289.91,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_4.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_29BE8983_3EF1_0BA2_41C4_1C71805D4965",
 "data": {
  "label": "E"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 802.74,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 416.29
 },
 "image": {
  "x": 801.97,
  "height": 40,
  "y": 415.69,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_5.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_28B42D8E_3EF3_0BA5_41AF_C62A896CD8AE",
 "data": {
  "label": "F"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 914.14,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_6_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 410.15
 },
 "image": {
  "x": 913.48,
  "height": 40,
  "y": 409.55,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_6.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_28300FF2_3EF3_0762_418E_C8B817602814",
 "data": {
  "label": "G"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 685.58,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_7_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 328.27
 },
 "image": {
  "x": 684.97,
  "height": 40,
  "y": 327.72,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_7.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_2941EEB3_3EF1_09E2_41C6_5CD64DA63BFC",
 "data": {
  "label": "H"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 711.64,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_8_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 413.72
 },
 "image": {
  "x": 711.04,
  "height": 40,
  "y": 413.11,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_8.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_26742D38_3EFF_08EE_41C4_EA7BCC4742E5",
 "data": {
  "label": "I"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 390.34,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_9_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 273.12
 },
 "image": {
  "x": 389.62,
  "height": 40,
  "y": 272.52,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_9.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_262DFBC5_3EFF_0FA6_41C3_50F6A97B310D",
 "data": {
  "label": "Q"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 605.84,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_10_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 266.37
 },
 "image": {
  "x": 605.13,
  "height": 40,
  "y": 265.71,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_10.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_26CF6034_3EF1_38E6_41A9_2CADA3D4ACAB",
 "data": {
  "label": "J"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 522.54,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_11_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 508.98
 },
 "image": {
  "x": 521.93,
  "height": 40,
  "y": 508.32,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_11.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_26D7F923_3EF1_08E2_41C4_97DC3AE9DF35",
 "data": {
  "label": "K"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 243.87,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_12_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 553.76
 },
 "image": {
  "x": 243.27,
  "height": 40,
  "y": 553.05,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_12.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_263DCCAA_3EF3_09ED_4174_527BB1EED459",
 "data": {
  "label": "L"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 232.51,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_13_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 476.66
 },
 "image": {
  "x": 231.85,
  "height": 40,
  "y": 476.06,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_13.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_24CA2A98_3EF1_09AE_41C6_8FC8ACC49A76",
 "data": {
  "label": "M"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 511.07,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_14_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 390.34
 },
 "image": {
  "x": 510.24,
  "height": 40,
  "y": 389.62,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_14.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_27E350CC_3EF1_19A6_41C0_4B072DD9EC05",
 "data": {
  "label": "N"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 499.1,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_15_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 332
 },
 "image": {
  "x": 498.39,
  "height": 40,
  "y": 331.46,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_15.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_24B9CE46_3EF7_08A2_41BF_F83979A9F3B9",
 "data": {
  "label": "O"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 496.09,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_16_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 271.15
 },
 "image": {
  "x": 495.37,
  "height": 40,
  "y": 270.49,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_16.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_245DB2FE_3EF0_F962_41BC_D844CEC37FAC",
 "data": {
  "label": "P"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 191.85,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_17_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 283.16
 },
 "image": {
  "x": 191.08,
  "height": 40,
  "y": 282.67,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_17.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_25716BFE_3EF1_0F63_41BA_FA99A785AAD3",
 "data": {
  "label": "R"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 276.69,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_18_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 298.97
 },
 "image": {
  "x": 276.03,
  "height": 40,
  "y": 298.26,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_18.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_25A2EEF9_3EF3_096E_41B9_EB7E3DB85937",
 "data": {
  "label": "S"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 339.19,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_19_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 183.95
 },
 "image": {
  "x": 338.48,
  "height": 40,
  "y": 183.29,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_19.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_238FF28B_3EF3_19A2_41C9_2CB943A6293D",
 "data": {
  "label": "T"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 96.25,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_20_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 259.4
 },
 "image": {
  "x": 95.54,
  "height": 40,
  "y": 258.74,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_20.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_22C80EC5_3EF1_09A6_41CB_CD16C463E155",
 "data": {
  "label": "U"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 252.21,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_21_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 153.05
 },
 "image": {
  "x": 251.5,
  "height": 40,
  "y": 152.34,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_21.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_232EBFA6_3EEF_07E3_41A3_65042B7AC827",
 "data": {
  "label": "V"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 170.28,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_22_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 158.76
 },
 "image": {
  "x": 169.62,
  "height": 40,
  "y": 158.1,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_22.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_20B6946F_3EEF_1962_41C3_2F2344657A9B",
 "data": {
  "label": "W"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 171.71,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_23_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 107.72
 },
 "image": {
  "x": 171.11,
  "height": 40,
  "y": 107.06,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_23.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_23728712_3ED1_78A2_41BC_37F9D8C5ADF1",
 "data": {
  "label": "X"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 40,
  "x": 25.08,
  "height": 40,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_24_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 222.03
 },
 "image": {
  "x": 24.37,
  "height": 40,
  "y": 221.32,
  "width": 40,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_24.png",
     "width": 39,
     "class": "ImageResourceLevel",
     "height": 39
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_21EC967E_3ED1_7962_41C1_CCE1F6AE8835",
 "data": {
  "label": "Y"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 133.9,
  "x": 17.73,
  "height": 333.31,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_25_map.gif",
     "width": 66,
     "class": "ImageResourceLevel",
     "height": 166
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 335.02
 },
 "image": {
  "width": 133.9,
  "x": 17.73,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_25.png",
     "width": 133,
     "class": "ImageResourceLevel",
     "height": 333
    }
   ],
   "class": "ImageResource"
  },
  "y": 335.02,
  "class": "HotspotMapOverlayImage",
  "height": 333.31
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_887FB2BC_965A_AFFC_41D0_08D75B9A6ABF",
 "data": {
  "label": "Polygon"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 60,
  "x": 54.88,
  "height": 60,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_26_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 340.24
 },
 "image": {
  "x": 54.88,
  "height": 60,
  "y": 340.24,
  "width": 60,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_26.png",
     "width": 60,
     "class": "ImageResourceLevel",
     "height": 60
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_8BD5ECD7_9655_DB8C_41BC_77014D3060C5",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 60,
  "x": 54.88,
  "height": 60,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_27_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 406.09
 },
 "image": {
  "x": 54.88,
  "height": 60,
  "y": 406.09,
  "width": 60,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_27.png",
     "width": 60,
     "class": "ImageResourceLevel",
     "height": 60
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_881B8F59_964A_D685_41C0_78A63E4A9D71",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 60,
  "x": 54.88,
  "height": 60,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_28_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 471.94
 },
 "image": {
  "x": 54.88,
  "height": 60,
  "y": 471.94,
  "width": 60,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_28.png",
     "width": 60,
     "class": "ImageResourceLevel",
     "height": 60
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_88D51543_964B_EA84_41E1_FF70DAAD91EC",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 60,
  "x": 54.88,
  "height": 60,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_29_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 537.79
 },
 "image": {
  "x": 54.88,
  "height": 60,
  "y": 537.79,
  "width": 60,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_29.png",
     "width": 60,
     "class": "ImageResourceLevel",
     "height": 60
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_89E8B180_964A_AD83_41E2_1BBF7DDBDFCC",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 60,
  "x": 54.88,
  "height": 60,
  "offsetX": 0,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_30_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 603.64
 },
 "image": {
  "x": 54.88,
  "height": 60,
  "y": 603.64,
  "width": 60,
  "image": {
   "levels": [
    {
     "url": "media/map_2AA5F4EC_3EF3_3966_41AC_FB8B6884600E_HS_30.png",
     "width": 60,
     "class": "ImageResourceLevel",
     "height": 60
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_B6085C1A_964E_7A84_41D2_5CCA4BF45059",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 77.36,
   "hfov": 19.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.59
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1E94E33B_11C6_B7F0_419E_42B068C19173, this.camera_368E8F41_1219_5062_418F_8AFB92BA31F1); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 77.36,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_1_HS_0_0.png",
      "width": 742,
      "class": "ImageResourceLevel",
      "height": 742
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.59,
   "hfov": 19.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0303CFD8_1209_F062_4197_1FBFA958665D",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 45.82,
   "hfov": 21.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.53
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1E94E33B_11C6_B7F0_419E_42B068C19173, this.camera_36BBEF4F_1219_507E_41AB_0E58DE1ACE1D); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 45.82,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_1_HS_1_0.png",
      "width": 812,
      "class": "ImageResourceLevel",
      "height": 883
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.53,
   "hfov": 21.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_00CBB9B1_1206_F022_41AC_E110CE367DAA",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_1_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 3.32,
   "hfov": 21.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.5
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_410BFA28_4FC8_6379_4174_29D54B4FF99B, this.camera_369E5F33_1219_5026_4182_08BAD6EFBBA8); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 3.32,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1FB19609_11C7_D190_4197_3B70A15B24F0_1_HS_2_0.png",
      "width": 798,
      "class": "ImageResourceLevel",
      "height": 742
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.5,
   "hfov": 21.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_03A52BE8_1207_B022_4195_98EE5E3FECAC",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 81.28,
   "hfov": 16.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.46
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D, this.camera_3E1ABBD7_1219_506E_4199_5AD7118DD33D); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 81.28,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_1_HS_0_0.png",
      "width": 620,
      "class": "ImageResourceLevel",
      "height": 684
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.46,
   "hfov": 16.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8086CCD9_964E_AA2A_41DF_A9E3EA7C023E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 98.76,
   "hfov": 16.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.27
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D, this.camera_3E064BE5_1219_5022_416E_A84D23A9DEB3); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 98.76,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC_1_HS_1_0.png",
      "width": 620,
      "class": "ImageResourceLevel",
      "height": 677
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.27,
   "hfov": 16.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_8E9CCB1F_964E_6E26_41AE_AA36904D1FF9",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 4.09,
   "hfov": 13.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.63
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0D3B0103_06C9_46A8_4194_48573AE17728, this.camera_36F7AF09_1219_51E2_41B0_3FB8B3598DB7); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 4.09,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_1_HS_0_0.png",
      "width": 502,
      "class": "ImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.63,
   "hfov": 13.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_09F74AD2_06D9_5BA8_419A_1699CF3A4006",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_1_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 179.98,
   "hfov": 18.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.18
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49, this.camera_36CB3EFB_1219_5026_418D_5CB2C3148616); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 179.98,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_1_HS_2_0.png",
      "width": 695,
      "class": "ImageResourceLevel",
      "height": 597
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.18,
   "hfov": 18.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0386A72F_0C48_24F0_418E_4644DDF1DDB9",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_0BD1F1AD_06C9_49F9_4197_9EBE238E193C_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -108.43,
   "hfov": 15.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.68
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40A04A4B_4FC8_A33F_41C0_C179C3D1DCC0, this.camera_36AA0F5C_1219_5062_41AD_5BA3B0D9DC66); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -108.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_1_HS_0_0.png",
      "width": 574,
      "class": "ImageResourceLevel",
      "height": 478
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.68,
   "hfov": 15.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40C1444C_4FCB_A738_4199_3EF68EFC8C23",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_1_HS_1_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 86.98,
   "hfov": 10.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.46
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_40CEA2CE_4FCB_A339_41AE_11FA0471CBA0, this.camera_3759DF6A_1219_5026_41A9_A262DAA62C0D); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 86.98,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_1_HS_1_0.png",
      "width": 394,
      "class": "ImageResourceLevel",
      "height": 476
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.46,
   "hfov": 10.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40C1744C_4FCB_A738_41CA_426B1FF2DA01",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -179.25,
   "hfov": 15.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.76
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4114030F_4FC8_A137_41BD_CC7C81952CC2, this.camera_37463F77_1219_502E_41AA_F968B7ED248D); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -179.25,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_1_HS_2_0.png",
      "width": 578,
      "class": "ImageResourceLevel",
      "height": 636
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.76,
   "hfov": 15.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40C1144C_4FCB_A738_41BB_C5CC13E78653",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_40C1544C_4FCB_A738_41B3_8CB9DC002A30_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 47.14,
   "hfov": 28.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.56
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_407D9E1D_4FD8_635B_41BA_30DED51B153D, this.camera_370E3FBD_1219_5022_41A4_4DADD8A3570E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 47.14,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_1_HS_0_0.png",
      "width": 1095,
      "class": "ImageResourceLevel",
      "height": 1094
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.56,
   "hfov": 28.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_407217A6_4FD7_E168_41CC_45148E86AB38",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "inertia": false,
 "hfov": 45,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FC5A99C1_F6E5_5325_41EB_B32553F44C49_tcap0.png",
    "width": 1712,
    "class": "ImageResourceLevel",
    "height": 1712
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_407237A6_4FD7_E168_417A_BDC09A783A9C_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 92.82,
   "hfov": 34.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.07
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4190209B_4FC9_9F5F_41D3_6DDAB7390D8D, this.camera_345A3060_1219_7022_41A1_1D4DA016BBB3); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 92.82,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_1_HS_0_0.png",
      "width": 1295,
      "class": "ImageResourceLevel",
      "height": 1309
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07,
   "hfov": 34.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_83E91749_964A_662A_41DD_4664E9CA991E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -77.17,
   "hfov": 28.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.25
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76D95B90_7D41_1811_41A3_CB5B5DB32750, this.camera_3448806E_1219_703E_418C_04327591929C); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -77.17,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_76E5AEA5_7D41_1832_41CC_36F40B86BC0F_1_HS_1_0.png",
      "width": 1095,
      "class": "ImageResourceLevel",
      "height": 1094
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.25,
   "hfov": 28.85,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_81413E28_964A_666A_41E1_6B7F52803D8F",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 153.96,
   "hfov": 33.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.01
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76E53824_7D41_1831_41C0_ABF1F1C1FACC, this.camera_37E3600E_1219_4FFE_41B1_70493B761E18); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 153.96,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_76D9B3D2_7D41_0816_41D1_51B3CAA7A17D_1_HS_0_0.png",
      "width": 1271,
      "class": "ImageResourceLevel",
      "height": 1240
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.01,
   "hfov": 33.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_81F3DDEF_964D_A5E5_41B3_D641202B271E",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30F8DAD0_3EB7_09BE_411F_0CBC4DA7DF80",
 "left": "0%",
 "width": 66,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_30F8EAD0_3EB7_09BE_41B3_C176DF519668",
  "this.IconButton_30F89AD0_3EB7_09BE_41C7_5114593ADCD0"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "top": "0%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "height": "100%",
 "minWidth": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "layout": "absolute",
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30F8BAD0_3EB7_09BE_41BA_6ECC080992DA",
 "left": 0,
 "width": 330,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "children": [
  "this.Container_30F8AAD0_3EB7_09BE_41C4_644795129E2C",
  "this.IconButton_338F7AEF_3EB7_0962_41C6_BDA65C6C116B"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "height": "100%",
 "minWidth": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 512,
 "id": "IconButton_1EF1773B_3F51_F8E2_41B6_E8192CA62870",
 "backgroundOpacity": 0,
 "maxHeight": 512,
 "right": "0%",
 "width": 43,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "height": 43.85,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1EDE886C_3F5F_0966_41BC_353B57EC559D, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1EF1773B_3F51_F8E2_41B6_E8192CA62870.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton40564"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "itemLabelPosition": "bottom",
 "id": "ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A",
 "backgroundOpacity": 0.24,
 "width": 131,
 "itemBorderRadius": 0,
 "right": "0%",
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "paddingLeft": 20,
 "itemPaddingLeft": 3,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_1B6058A1_3FD7_099E_41C7_2D7905CA9C8A_playlist",
 "itemThumbnailShadowSpread": 1,
 "minWidth": 20,
 "height": "100%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "rollOverItemBackgroundOpacity": 0,
 "backgroundColorDirection": "vertical",
 "itemThumbnailShadowOpacity": 0.54,
 "rollOverItemLabelFontWeight": "normal",
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#5AA59A",
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "layout": "vertical",
 "itemThumbnailHeight": 75,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 8,
 "paddingRight": 20,
 "itemLabelGap": 9,
 "class": "ThumbnailList",
 "backgroundColorRatios": [
  0
 ],
 "borderRadius": 5,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "top": "0%",
 "itemThumbnailWidth": 75,
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemHorizontalAlign": "center",
 "gap": 10,
 "itemThumbnailShadowVerticalLength": 3,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "data": {
  "name": "hotspot kanan"
 },
 "itemThumbnailBorderRadius": 50,
 "itemLabelFontFamily": "Arial"
},
{
 "horizontalAlign": "center",
 "maxWidth": 512,
 "id": "IconButton_1A18A158_3FF7_18AE_41B6_E21D02F5A9B7",
 "left": "5.29%",
 "maxHeight": 512,
 "backgroundOpacity": 0,
 "width": 52,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0.13%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "height": 55,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1A0554E5_3FF0_F966_41B8_0078AC614EAC, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_1A18A158_3FF7_18AE_41B6_E21D02F5A9B7.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton50872"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_33333699_1209_D0E2_4194_31FBB4C3EBE1",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_33333699_1209_D0E2_4194_31FBB4C3EBE1.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "borderRadius": 0,
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_326BB55F_1279_F01E_41A7_0B4D394A896F, null, '90%', '90%', this.FadeInEffect_326BA55F_1279_F01E_4194_BE05E8CAA20A, this.FadeOutEffect_326C5560_1279_F022_4159_91543A86CEB0, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image31832"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_32D3811B_120B_51E6_4198_BED40A5DF159",
 "left": "20%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_32D3811B_120B_51E6_4198_BED40A5DF159.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "borderRadius": 0,
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_326F1564_1279_F022_4186_4A37844582F6, null, '90%', '90%', this.FadeInEffect_326F0564_1279_F022_4142_01BC9AA25D38, this.FadeOutEffect_326F3564_1279_F022_41AE_BCA68F3287DB, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image31915"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0D02C5B8_1209_D022_415C_1E326B63523C",
 "left": "40%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0D02C5B8_1209_D022_415C_1E326B63523C.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "borderRadius": 0,
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_326FF565_1279_F022_419A_B5C39143C135, null, '90%', '90%', this.FadeInEffect_326FE565_1279_F022_41AB_F841198B7374, this.FadeOutEffect_326F9565_1279_F022_4196_B8B546A210B8, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image31971"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0CED2514_1207_51E3_4192_4EE98854D453",
 "left": "60%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0CED2514_1207_51E3_4192_4EE98854D453.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "borderRadius": 0,
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_32704566_1279_F02E_41B2_3D4AFD6CCD2D, null, '90%', '90%', this.FadeInEffect_32707566_1279_F02E_41A3_2C9F8BCB5B88, this.FadeOutEffect_32706566_1279_F02E_41A1_86AE47F914AC, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32047"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0C834FC2_1207_F066_41A8_044A1C4FEEAD",
 "left": "80%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0C834FC2_1207_F066_41A8_044A1C4FEEAD.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "top": "5%",
 "borderRadius": 0,
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_3270D567_1279_F02E_41A0_8706517ABFCD, null, '90%', '90%', this.FadeInEffect_3270C567_1279_F02E_41AD_BCB871CE6C32, this.FadeOutEffect_3270F567_1279_F02E_4192_9EF6F7E5643A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32106"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_325E96EB_123A_F026_4179_8F0F97A77D96",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_325E96EB_123A_F026_4179_8F0F97A77D96.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "top": "28%",
 "borderRadius": 0,
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_39986B4F_1219_507E_4198_F436181F734A, null, '90%', '90%', this.FadeInEffect_39987B4F_1219_507E_41A1_C96D79ADF79C, this.FadeOutEffect_39998B4F_1219_507E_4190_2AF18DDB5F44, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32202"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0CEDED9D_123B_D0E2_4196_7462A0F7F830",
 "left": "20%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0CEDED9D_123B_D0E2_4196_7462A0F7F830.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "top": "28%",
 "borderRadius": 0,
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_39997B4F_1219_507E_4191_6E6FA82B14AE, null, '90%', '90%', this.FadeInEffect_399A8B4F_1219_507E_41A1_091685346CDB, this.FadeOutEffect_399A9B4F_1219_507E_41AC_25D46C295A3D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32264"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0D2767ED_1239_5022_41A7_32D43FA71512",
 "left": "40%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0D2767ED_1239_5022_41A7_32D43FA71512.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "top": "28%",
 "borderRadius": 0,
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_399B8B50_1219_5062_4161_EB620E5D449C, null, '90%', '90%', this.FadeInEffect_399B9B50_1219_5062_41AE_F20B9665E8AA, this.FadeOutEffect_399BAB50_1219_5062_41B2_2F46BF216C1C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32339"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0C9FA927_1239_502E_419E_7C01F1781994",
 "left": "60%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0C9FA927_1239_502E_419E_7C01F1781994.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "top": "28%",
 "borderRadius": 0,
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_399CAB51_1219_5062_41B0_EEB50BF9E6BB, null, '90%', '90%', this.FadeInEffect_399CCB51_1219_5062_41A6_B7380774F986, this.FadeOutEffect_399CDB51_1219_5062_41A1_AFDB2218AF68, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32404"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0C9A2C22_123F_B026_41AB_258291CFC961",
 "left": "80%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0C9A2C22_123F_B026_41AB_258291CFC961.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "top": "28%",
 "borderRadius": 0,
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_399DCB52_1219_5066_4190_504073AAF168, null, '90%', '90%', this.FadeInEffect_399DFB52_1219_5066_41AD_5A730603220C, this.FadeOutEffect_399D1B52_1219_5066_419E_BA7B2E37DC29, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32468"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0C8B1470_123F_7022_419F_2450027E5387",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0C8B1470_123F_7022_419F_2450027E5387.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "bottom": "29%",
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_399D9B53_1219_5066_4173_A2DAD8E26822, null, '90%', '90%', this.FadeInEffect_399DBB53_1219_5066_41A9_03CD776E2E86, this.FadeOutEffect_399DCB53_1219_5066_419F_3FDB0F64E170, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32530"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0CD86FC4_1239_B062_41B0_D6996CD4413A",
 "left": "20%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0CD86FC4_1239_B062_41B0_D6996CD4413A.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "bottom": "29%",
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_399EBB53_1219_5066_41B1_FAA6B805983B, null, '90%', '90%', this.FadeInEffect_399ECB53_1219_5066_41AC_9F3204D65EC2, this.FadeOutEffect_399EDB53_1219_5066_41AA_FEFBCB0F0851, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32594"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0C971F4B_1239_5066_41B0_D4172CF9E6FC",
 "left": "40%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0C971F4B_1239_5066_41B0_D4172CF9E6FC.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "bottom": "29%",
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_399FDB54_1219_5062_41A3_12BBE1802E39, null, '90%', '90%', this.FadeInEffect_399FEB54_1219_5062_41B1_D61D4879D048, this.FadeOutEffect_399F0B54_1219_5062_41A3_6F785350DABF, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32653"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0CF075ED_123B_D03D_41AC_E09DC89B31EA",
 "left": "60%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0CF075ED_123B_D03D_41AC_E09DC89B31EA.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "bottom": "29%",
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_3980EB55_1219_5062_41A2_0A4BABEA1A47, null, '90%', '90%', this.FadeInEffect_39800B55_1219_5062_415C_435D914E5EEE, this.FadeOutEffect_39801B55_1219_5062_41B0_572CBB8F4A2A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32722"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0CF9F78A_123A_B0E6_41AC_B55E00A84555",
 "left": "80%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0CF9F78A_123A_B0E6_41AC_B55E00A84555.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "bottom": "29%",
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_39811B56_1219_506E_419C_1F118289CA8C, null, '90%', '90%', this.FadeInEffect_39812B56_1219_506E_41AF_80C9B0B846AA, this.FadeOutEffect_39813B56_1219_506E_4175_10BBE6548F3A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32772"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_30964C39_121F_5022_41AB_D236A064B802",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_30964C39_121F_5022_41AB_D236A064B802.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "bottom": "5%",
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_39819B57_1219_506E_417D_54DD3B9FDE14, null, '90%', '90%', this.FadeInEffect_3981BB57_1219_506E_4183_8BD060DCEB39, this.FadeOutEffect_3981CB57_1219_506E_41A9_5B47E1A63FD8, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32844"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0D40F32A_1219_B026_41A8_E891BF109962",
 "left": "20%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0D40F32A_1219_B026_41A8_E891BF109962.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "bottom": "5%",
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_3982BB57_1219_506E_41AB_ACD446B45F84, null, '90%', '90%', this.FadeInEffect_3982CB57_1219_506E_4161_1E7556AF0D1A, this.FadeOutEffect_3982FB57_1219_506E_41A8_1D5CF141C884, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32895"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0D42EA88_121B_50E2_4157_CE807849125C",
 "left": "40%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0D42EA88_121B_50E2_4157_CE807849125C.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "bottom": "5%",
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_3983FB58_1219_5062_41A9_0ADC8C8AA314, null, '90%', '90%', this.FadeInEffect_39831B58_1219_5062_41A6_5409C98075A0, this.FadeOutEffect_39832B58_1219_5062_4182_45B814A04F8A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32949"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0D6145D0_121A_B062_4147_BF55FD1CCC60",
 "left": "60%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0D6145D0_121A_B062_4147_BF55FD1CCC60.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "bottom": "5%",
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_39840B59_1219_5062_41A6_885726E41BDB, null, '90%', '90%', this.FadeInEffect_39841B59_1219_5062_4120_913F7079705C, this.FadeOutEffect_39842B59_1219_5062_4170_CC0B8129C0AE, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image32995"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_0D7AEFDA_1219_5066_41AC_49C28137FA7C",
 "left": "80%",
 "backgroundOpacity": 0,
 "width": "19%",
 "paddingRight": 0,
 "url": "skin/Image_0D7AEFDA_1219_5066_41AC_49C28137FA7C.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "bottom": "5%",
 "height": "19%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.showPopupImage(this.ImageResource_39852B5A_1219_5066_41AD_A6A51581C7E3, null, '90%', '90%', this.FadeInEffect_39853B5A_1219_5066_41A8_D288DEB5494D, this.FadeOutEffect_39854B5A_1219_5066_41AF_B3460C6BC65C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, 10000, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image33044"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 512,
 "id": "IconButton_0D6BD6C7_120A_B06D_41AD_F3B26F592B2E",
 "backgroundOpacity": 0,
 "maxHeight": 512,
 "right": "0%",
 "width": 66.03,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0.14%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_3397D7C3_1209_5066_41A4_3C9692EF45E3, false, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_0D6BD6C7_120A_B06D_41AD_F3B26F592B2E.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton36228"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30F8EAD0_3EB7_09BE_41B3_C176DF519668",
 "left": "0%",
 "width": 30,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container blue"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 80,
 "id": "IconButton_30F89AD0_3EB7_09BE_41C7_5114593ADCD0",
 "left": 4,
 "maxHeight": 80,
 "backgroundOpacity": 0,
 "width": 50,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_30F89AD0_3EB7_09BE_41C7_5114593ADCD0_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_30F8BAD0_3EB7_09BE_41BA_6ECC080992DA, true, 0, this.effect_4F69C86C_5705_6B41_41BC_5E5273634FBF, 'showEffect', false); this.setComponentVisibility(this.Container_30F8DAD0_3EB7_09BE_411F_0CBC4DA7DF80, false, 0, this.effect_25FE7E90_3014_D1B3_41A1_6EBC34409425, 'hideEffect', false)",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_30F89AD0_3EB7_09BE_41C7_5114593ADCD0.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30F8AAD0_3EB7_09BE_41C4_644795129E2C",
 "left": "0%",
 "width": 305,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.65,
 "overflow": "scroll",
 "children": [
  "this.Image_30F87AD0_3EB7_09BE_41BC_466A92C47E59",
  "this.Container_30F86AD0_3EB7_09BE_41BA_9BCE7379F9A2",
  "this.Container_33886AEE_3EB7_0962_41CC_F28E6F0C55A8",
  "this.Container_2D480B3C_3EF1_08E6_41C9_50EA28CBD07A",
  "this.IconButton_18C7810B_3FF1_18A3_41C4_E729F2FE2797"
 ],
 "scrollBarMargin": 2,
 "paddingRight": 40,
 "paddingLeft": 40,
 "class": "Container",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "borderSize": 0,
 "paddingTop": 40,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 40,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Buttons set"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 40,
 "id": "IconButton_338F7AEF_3EB7_0962_41C6_BDA65C6C116B",
 "left": 280,
 "maxHeight": 40,
 "backgroundOpacity": 0,
 "width": 40,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_338F7AEF_3EB7_0962_41C6_BDA65C6C116B_rollover.png",
 "propagateClick": true,
 "top": "40%",
 "verticalAlign": "middle",
 "borderRadius": 0,
 "bottom": "40%",
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_30F8BAD0_3EB7_09BE_41BA_6ECC080992DA, false, 0, this.effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0, 'hideEffect', false); this.setComponentVisibility(this.Container_30F8DAD0_3EB7_09BE_411F_0CBC4DA7DF80, true, 0, this.effect_404559BF_570B_6D3E_41C6_9F4FDDDF0AEB, 'showEffect', false)",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_338F7AEF_3EB7_0962_41C6_BDA65C6C116B.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_30F87AD0_3EB7_09BE_41BC_466A92C47E59",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_30F87AD0_3EB7_09BE_41BC_466A92C47E59.png",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 30,
 "propagateClick": true,
 "top": "0%",
 "borderRadius": 0,
 "height": "16.183%",
 "verticalAlign": "top",
 "minWidth": 40,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image Company"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.15,
 "id": "Container_30F86AD0_3EB7_09BE_41BA_9BCE7379F9A2",
 "left": "0%",
 "children": [
  "this.Container_30F80AD0_3EB7_09BE_41C1_9F8214CC3665",
  "this.Button_30F83AD0_3EB7_09BE_418D_94110FD97CB3",
  "this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD",
  "this.Container_30FECAD1_3EB7_09BE_41C5_D186DB329D8B",
  "this.Button_30FEFAD1_3EB7_09BE_41B0_259DFF6D7A82",
  "this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041",
  "this.Container_338F4AED_3EB7_0966_41A0_2A6D758D5EE3",
  "this.Button_338F7AED_3EB7_0966_41C9_A75DDE898405",
  "this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC",
  "this.Container_338EBAED_3EB7_0966_41C8_94E1A35A3138",
  "this.Button_338EAAED_3EB7_0966_41C3_EF1F96C46D55",
  "this.Container_338E5AED_3EB7_0966_41C1_1BB5C35EF8D9",
  "this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3",
  "this.Button_338EDAED_3EB7_0966_419B_16B136484FB4",
  "this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E",
  "this.Container_338F9AEE_3EB7_0962_41C0_6B6DE66B3D23"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "94.545%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "top": "14.4%",
 "borderRadius": 0,
 "bottom": "46.46%",
 "scrollBarWidth": 6,
 "verticalAlign": "middle",
 "minWidth": 1,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 1"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_33886AEE_3EB7_0962_41CC_F28E6F0C55A8",
 "left": "0%",
 "children": [
  "this.Container_33881AEE_3EB7_0962_41B4_AC7F8B0BC056",
  "this.HTMLText_33880AEE_3EB7_0962_41C0_0DB7AE6F2C5B",
  "this.Container_33883AEE_3EB7_0962_41B7_1E650037D299",
  "this.Container_338F9AEF_3EB7_0962_41B3_3F638EB7294C"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 1,
 "propagateClick": true,
 "borderRadius": 0,
 "bottom": "8.24%",
 "scrollBarWidth": 10,
 "height": 96.05,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "layout": "vertical",
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container footer"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_2D480B3C_3EF1_08E6_41C9_50EA28CBD07A",
 "left": "0%",
 "children": [
  "this.Image_1D8ED159_3F51_18AE_41C1_CE1974EE80B9"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "bottom": "24.27%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "21.527%",
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container19379"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxWidth": 1811,
 "id": "IconButton_18C7810B_3FF1_18A3_41C4_E729F2FE2797",
 "left": "0.27%",
 "maxHeight": 662,
 "backgroundOpacity": 0,
 "width": 219.4,
 "paddingRight": 0,
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "bottom": "0%",
 "height": 45.6,
 "minWidth": 1,
 "mode": "push",
 "paddingBottom": 0,
 "click": "this.openLink('https://virtualreality.digidaxa.com/', '_blank')",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_18C7810B_3FF1_18A3_41C4_E729F2FE2797.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton53855"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30F80AD0_3EB7_09BE_41C1_9F8214CC3665",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_30F83AD0_3EB7_09BE_418D_94110FD97CB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "fontColor": "#3B4976",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "click": "this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, false, 0, this.effect_406C8EDB_5426_70A1_41AB_C419AD03A638, 'hideEffect', false); this.setComponentVisibility(this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC, false, 0, this.effect_406C8EDB_5426_70A1_41AB_C419AD03A638, 'hideEffect', false); this.setComponentVisibility(this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3, false, 0, this.effect_406C8EDB_5426_70A1_41AB_C419AD03A638, 'hideEffect', false); this.setComponentVisibility(this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E, false, 0, this.effect_406C8EDB_5426_70A1_41AB_C419AD03A638, 'hideEffect', false); if(!this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD.get('visible')){ this.setComponentVisibility(this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD, true, 0, this.effect_5F42DCC8_4F18_5100_41CB_F5BBF9EF1A1D, 'showEffect', false) } else { this.setComponentVisibility(this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD, false, 0, this.effect_5F42ACC8_4F18_5100_41D2_9FAF67DDCB7B, 'hideEffect', false) }",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Button",
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Contact",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 1 - Reception"
 },
 "verticalAlign": "middle",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "borderColor": "#000000",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_30FFDAD0_3EB7_09BE_41B8_C72E22EBAF6F",
  "this.Container_30FFFAD0_3EB7_09BE_41CE_D9C2FEE1B0FA",
  "this.Button_30FF9AD0_3EB7_09BE_4177_32220F94016A",
  "this.Button_30FF8AD1_3EB7_09BE_41B5_8D111E84228C"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "class": "Container",
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "height": 87,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 1-1"
 },
 "verticalAlign": "middle",
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30FECAD1_3EB7_09BE_41C5_D186DB329D8B",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_30FEFAD1_3EB7_09BE_41B0_259DFF6D7A82",
 "backgroundOpacity": 0,
 "width": "100%",
 "fontColor": "#3B4976",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "click": "if(!this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041.get('visible')){ this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, true, 0, this.effect_5B21267B_4F08_3100_41A1_F6699BEFB8F1, 'showEffect', false) } else { this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, false, 0, this.effect_5B21667B_4F08_3100_41C7_3B45A9C1819F, 'hideEffect', false) }; this.setComponentVisibility(this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD, false, 0, this.effect_4016129C_5467_90A7_41B5_2C5E462A0C83, 'hideEffect', false); this.setComponentVisibility(this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC, false, 0, this.effect_4016129C_5467_90A7_41B5_2C5E462A0C83, 'hideEffect', false); this.setComponentVisibility(this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3, false, 0, this.effect_4016129C_5467_90A7_41B5_2C5E462A0C83, 'hideEffect', false); this.setComponentVisibility(this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E, false, 0, this.effect_4016129C_5467_90A7_41B5_2C5E462A0C83, 'hideEffect', false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Button",
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Rooms",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "gap": 23,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 2 - Rooms"
 },
 "verticalAlign": "middle",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "borderColor": "#000000",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_30FEAAD1_3EB7_09BE_41CB_C90197562098",
  "this.Container_30FE5AD1_3EB7_09BE_41BB_E0AC4DE2DF4F",
  "this.Button_338F8AEC_3EB7_0966_41CD_9668DB9F4257",
  "this.Button_BF028CAA_96DE_7B87_41E2_B134FFFE81C8",
  "this.Button_30FE7AD1_3EB7_09BE_41B6_82F109BD5905",
  "this.Button_30FE3AD1_3EB7_09BE_418A_6A27C26E0049",
  "this.Button_BDF899E7_96DA_FD8C_41A1_7989A2020AAE"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "class": "Container",
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "height": 200,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 2-1"
 },
 "verticalAlign": "middle",
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_338F4AED_3EB7_0966_41A0_2A6D758D5EE3",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_338F7AED_3EB7_0966_41C9_A75DDE898405",
 "backgroundOpacity": 0,
 "width": "100%",
 "fontColor": "#3B4976",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "click": "if(!this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041.get('visible')){ this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, true, 0, this.effect_5A5A58D5_4F08_3101_41D1_AE0FDA00D4F0, 'showEffect', false) } else { this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, false, 0, this.effect_5A5A28D5_4F08_3101_41C5_4679DCEA4295, 'hideEffect', false) }; if(!this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC.get('visible')){ this.setComponentVisibility(this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC, true, 0, this.effect_5A5A58D5_4F08_3101_41D1_AE0FDA00D4F0, 'showEffect', false) } else { this.setComponentVisibility(this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC, false, 0, this.effect_5A5A28D5_4F08_3101_41C5_4679DCEA4295, 'hideEffect', false) }; this.setComponentVisibility(this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD, false, 0, this.effect_400C418A_547D_B0A3_41BD_8A5BC1E4FFB9, 'hideEffect', false); this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, false, 0, this.effect_400C418A_547D_B0A3_41BD_8A5BC1E4FFB9, 'hideEffect', false); this.setComponentVisibility(this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3, false, 0, this.effect_400C418A_547D_B0A3_41BD_8A5BC1E4FFB9, 'hideEffect', false); this.setComponentVisibility(this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E, false, 0, this.effect_400C418A_547D_B0A3_41BD_8A5BC1E4FFB9, 'hideEffect', false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Button",
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Resto & Bar",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "gap": 23,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 3 - Amenities"
 },
 "verticalAlign": "middle",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "borderColor": "#000000",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_338F6AED_3EB7_0966_41C5_BC920E894FFC",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_338F1AED_3EB7_0966_41C0_3638499E10A0",
  "this.Container_338F0AED_3EB7_0966_41B1_E81D589961A1",
  "this.Button_338F3AED_3EB7_0966_41C1_9388973A644F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "class": "Container",
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "height": 52,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 3-1"
 },
 "verticalAlign": "middle",
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_338EBAED_3EB7_0966_41C8_94E1A35A3138",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_338EAAED_3EB7_0966_41C3_EF1F96C46D55",
 "backgroundOpacity": 0,
 "width": "100%",
 "fontColor": "#3B4976",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "click": "if(!this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3.get('visible')){ this.setComponentVisibility(this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3, true, 0, this.effect_580F8760_4F08_3F00_41AC_F78771BB3ADF, 'showEffect', false) } else { this.setComponentVisibility(this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3, false, 0, this.effect_580FF761_4F08_3F00_4191_91ACF9401F9E, 'hideEffect', false) }; this.setComponentVisibility(this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD, false, 0, this.effect_40355B01_547B_B1A1_41C1_07A687AFC47C, 'hideEffect', false); this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, false, 0, this.effect_40355B01_547B_B1A1_41C1_07A687AFC47C, 'hideEffect', false); this.setComponentVisibility(this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC, false, 0, this.effect_40355B01_547B_B1A1_41C1_07A687AFC47C, 'hideEffect', false); this.setComponentVisibility(this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E, false, 0, this.effect_40355B01_547B_B1A1_41C1_07A687AFC47C, 'hideEffect', false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Button",
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 50,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Relax Spa",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 4 - Sports area"
 },
 "verticalAlign": "middle",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "borderColor": "#000000",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_338E5AED_3EB7_0966_41C1_1BB5C35EF8D9",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_338F9AED_3EB7_0966_41A5_ACF558B523C3",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_338F8AED_3EB7_0966_41BE_8775663E4B1C",
  "this.Button_338FAAED_3EB7_0966_41A4_A519F069AA4B"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "class": "Container",
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "height": 50,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 4-1"
 },
 "verticalAlign": "middle",
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_338EDAED_3EB7_0966_419B_16B136484FB4",
 "backgroundOpacity": 0,
 "width": "100%",
 "fontColor": "#3B4976",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "click": "if(!this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E.get('visible')){ this.setComponentVisibility(this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E, true, 0, this.effect_59CA1A81_4F08_D101_41D2_30683CB5E100, 'showEffect', false) } else { this.setComponentVisibility(this.Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E, false, 0, this.effect_59CA3A81_4F08_D101_41D3_0462DF8FB066, 'hideEffect', false) }; this.setComponentVisibility(this.Container_30F82AD0_3EB7_09BE_41C1_38EC80BD53AD, false, 0, this.effect_47C93ED9_547A_F0A1_41BB_B178B1BD72E3, 'hideEffect', false); this.setComponentVisibility(this.Container_30FE9AD1_3EB7_09BE_41CB_CCDD13F6E041, false, 0, this.effect_47C93ED9_547A_F0A1_41BB_B178B1BD72E3, 'hideEffect', false); this.setComponentVisibility(this.Container_338F6AED_3EB7_0966_41C5_BC920E894FFC, false, 0, this.effect_47C93ED9_547A_F0A1_41BB_B178B1BD72E3, 'hideEffect', false); this.setComponentVisibility(this.Container_338F9AED_3EB7_0966_41A5_ACF558B523C3, false, 0, this.effect_47C93ED9_547A_F0A1_41BB_B178B1BD72E3, 'hideEffect', false)",
 "iconHeight": 32,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingRight": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Button",
 "propagateClick": true,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "height": 43,
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Meeting Room",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "gap": 5,
 "pressedBackgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button 5 - Swimming"
 },
 "verticalAlign": "middle",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "borderColor": "#000000",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0,
 "id": "Container_338ECAED_3EB7_0966_41B1_DC9BC4C3543E",
 "backgroundOpacity": 0,
 "children": [
  "this.Container_338EFAED_3EB7_0966_41CE_9FF85675325B",
  "this.Button_338E9AEE_3EB7_0962_419F_32ED3904E5E4"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 7,
 "class": "Container",
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "height": 50,
 "minWidth": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Level 5-1"
 },
 "verticalAlign": "middle",
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_338F9AEE_3EB7_0962_41C0_6B6DE66B3D23",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_33881AEE_3EB7_0962_41B4_AC7F8B0BC056",
 "backgroundOpacity": 1,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "horizontal",
 "height": 2,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "blue line"
 },
 "shadow": false
},
{
 "scrollBarOpacity": 0.5,
 "id": "HTMLText_33880AEE_3EB7_0962_41C0_0DB7AE6F2C5B",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "HTMLText",
 "propagateClick": true,
 "height": 78,
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText47602"
 },
 "shadow": false,
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_33883AEE_3EB7_0962_41B7_1E650037D299",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_338FDAEE_3EB7_0962_41C6_AB7EF8F63C9C",
  "this.IconButton_338FCAEF_3EB7_0962_41CF_194240EDAEF1",
  "this.IconButton_338FEAEF_3EB7_0962_41BD_D4F81BE5EC48",
  "this.IconButton_B5C717A8_96CA_F583_41B2_B8CF1CDB6EC5",
  "this.IconButton_B0D0AD5F_96CD_BABC_41DE_D94B446C73B8"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "height": 39,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 7,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 1"
 },
 "verticalAlign": "bottom",
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_338F9AEF_3EB7_0962_41B3_3F638EB7294C",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_338F4AEF_3EB7_0962_418B_53DB056B3215",
  "this.Container_318CA561_3EB1_3B61_41C7_8687931CCCD5"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "height": 44,
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 7,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container Icons 2"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "horizontalAlign": "center",
 "maxHeight": 682,
 "maxWidth": 1024,
 "id": "Image_1D8ED159_3F51_18AE_41C1_CE1974EE80B9",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingRight": 0,
 "url": "skin/Image_1D8ED159_3F51_18AE_41C1_CE1974EE80B9.jpeg",
 "paddingLeft": 0,
 "class": "Image",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "borderRadius": 0,
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_1EDE886C_3F5F_0966_41BC_353B57EC559D, true, 0, null, null, false)",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image41414"
 },
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30FFDAD0_3EB7_09BE_41B8_C72E22EBAF6F",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30FFFAD0_3EB7_09BE_41CE_D9C2FEE1B0FA",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "height": 8,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_30FF9AD0_3EB7_09BE_4177_32220F94016A",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 20,
 "class": "Button",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#3B4976",
  "#3B4976"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "(+62)291 7701 999",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#5AA59A",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_30FF8AD1_3EB7_09BE_41B5_8D111E84228C",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "gap": 23,
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 20,
 "class": "Button",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "click": "this.openLink('https://web.whatsapp.com/send?phone=6288215000006', '_blank')",
 "borderRadius": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#3B4976",
  "#3B4976"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "WA(+62)8821 5000 006",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 2"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#5AA59A",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30FEAAD1_3EB7_09BE_41CB_C90197562098",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_30FE5AD1_3EB7_09BE_41BB_E0AC4DE2DF4F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "height": 8,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_338F8AEC_3EB7_0966_41CD_9668DB9F4257",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "gap": 5,
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 20,
 "class": "Button",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "click": "this.mainPlayList.set('selectedIndex', 29)",
 "borderRadius": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#3B4976",
  "#3B4976"
 ],
 "rollOverFontColor": "#5AA59A",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Villa 2 Bedrooms",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 6"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#5AA59A",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_BF028CAA_96DE_7B87_41E2_B134FFFE81C8",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "gap": 5,
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 20,
 "class": "Button",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "click": "this.mainPlayList.set('selectedIndex', 26)",
 "borderRadius": 0,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#3B4976",
  "#3B4976"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Premium Suite King Bed",
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#5AA59A",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_30FE7AD1_3EB7_09BE_41B6_82F109BD5905",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "gap": 5,
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 20,
 "class": "Button",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "click": "this.mainPlayList.set('selectedIndex', 35)",
 "borderRadius": 0,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#3B4976",
  "#3B4976"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Suite Twin Bed",
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#5AA59A",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "pressedLabel": "Lorem Ipsum",
 "id": "Button_30FE3AD1_3EB7_09BE_418A_6A27C26E0049",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "gap": 5,
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 20,
 "class": "Button",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "click": "this.mainPlayList.set('selectedIndex', 37)",
 "borderRadius": 0,
 "layout": "horizontal",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#3B4976",
  "#3B4976"
 ],
 "rollOverFontColor": "#5AA59A",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Suite King Bed",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 3"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#5AA59A",
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_BDF899E7_96DA_FD8C_41A1_7989A2020AAE",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "gap": 5,
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 20,
 "class": "Button",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "click": "this.mainPlayList.set('selectedIndex', 33)",
 "borderRadius": 0,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#3B4976",
  "#3B4976"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Studio Room Twin Bed",
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#5AA59A",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_338F1AED_3EB7_0966_41C0_3638499E10A0",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_338F0AED_3EB7_0966_41B1_E81D589961A1",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": true,
 "height": 8,
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line separator"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_338F3AED_3EB7_0966_41C1_9388973A644F",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "gap": 5,
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 20,
 "class": "Button",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "click": "this.openLink('http://sekurovillage.com/resto-bar/', '_blank')",
 "borderRadius": 0,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#3B4976",
  "#3B4976"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "Menu",
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#5AA59A",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_338F8AED_3EB7_0966_41BE_8775663E4B1C",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_338FAAED_3EB7_0966_41A4_A519F069AA4B",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "gap": 5,
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 20,
 "class": "Button",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "click": "this.mainPlayList.set('selectedIndex', 4)",
 "borderRadius": 0,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#3B4976",
  "#3B4976"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 36,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "label": "ZENSPA",
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#5AA59A",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_338EFAED_3EB7_0966_41CE_9FF85675325B",
 "backgroundOpacity": 0.5,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "height": 1,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "line"
 },
 "verticalAlign": "top",
 "shadow": false
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "horizontalAlign": "left",
 "id": "Button_338E9AEE_3EB7_0962_419F_32ED3904E5E4",
 "backgroundOpacity": 1,
 "width": "100%",
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#FFFFFF"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 20,
 "class": "Button",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverShadowBlurRadius": 18,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#3B4976",
  "#3B4976"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 24,
 "fontSize": 18,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "label": "Website",
 "fontStyle": "italic",
 "borderSize": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "layout": "horizontal",
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button text 1"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconWidth": 32,
 "shadowBlurRadius": 15,
 "shadowSpread": 1,
 "rollOverShadow": false,
 "cursor": "hand",
 "fontColor": "#5AA59A",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "maxWidth": 101,
 "id": "IconButton_338FDAEE_3EB7_0962_41C6_AB7EF8F63C9C",
 "backgroundOpacity": 0,
 "maxHeight": 101,
 "width": 33,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_338FDAEE_3EB7_0962_41C6_AB7EF8F63C9C_rollover.png",
 "class": "IconButton",
 "propagateClick": false,
 "height": 30,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_1A0554E5_3FF0_F966_41B8_0078AC614EAC, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_338FDAEE_3EB7_0962_41C6_AB7EF8F63C9C.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton Thumblist"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 101,
 "id": "IconButton_338FCAEF_3EB7_0962_41CF_194240EDAEF1",
 "backgroundOpacity": 0,
 "maxHeight": 101,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_338FCAEF_3EB7_0962_41CF_194240EDAEF1_rollover.png",
 "class": "IconButton",
 "propagateClick": false,
 "height": 31,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://g.page/sekurovillage?share', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_338FCAEF_3EB7_0962_41CF_194240EDAEF1.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton Location"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 101,
 "id": "IconButton_338FEAEF_3EB7_0962_41BD_D4F81BE5EC48",
 "backgroundOpacity": 0,
 "maxHeight": 101,
 "width": 34,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_338FEAEF_3EB7_0962_41BD_D4F81BE5EC48_rollover.png",
 "class": "IconButton",
 "propagateClick": false,
 "height": 33,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://www.instagram.com/sekurovillagebeachresort/', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_338FEAEF_3EB7_0962_41BD_D4F81BE5EC48.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 101,
 "id": "IconButton_B5C717A8_96CA_F583_41B2_B8CF1CDB6EC5",
 "backgroundOpacity": 0,
 "maxHeight": 101,
 "width": 34,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_B5C717A8_96CA_F583_41B2_B8CF1CDB6EC5_rollover.png",
 "class": "IconButton",
 "propagateClick": false,
 "height": 33,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://www.tiktok.com/@sekurovbr', '_blank')",
 "borderSize": 0,
 "iconURL": "skin/IconButton_B5C717A8_96CA_F583_41B2_B8CF1CDB6EC5.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 101,
 "id": "IconButton_B0D0AD5F_96CD_BABC_41DE_D94B446C73B8",
 "backgroundOpacity": 0,
 "maxHeight": 101,
 "width": 34,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_B0D0AD5F_96CD_BABC_41DE_D94B446C73B8_rollover.png",
 "class": "IconButton",
 "propagateClick": false,
 "height": 33,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "paddingTop": 0,
 "paddingBottom": 0,
 "click": "this.setComponentVisibility(this.Container_3397D7C3_1209_5066_41A4_3C9692EF45E3, true, 0, null, null, false)",
 "borderSize": 0,
 "iconURL": "skin/IconButton_B0D0AD5F_96CD_BABC_41DE_D94B446C73B8.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxWidth": 101,
 "id": "IconButton_338F4AEF_3EB7_0962_418B_53DB056B3215",
 "backgroundOpacity": 0,
 "maxHeight": 101,
 "width": 50,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "class": "IconButton",
 "propagateClick": false,
 "height": 50,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": false,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_338F4AEF_3EB7_0962_418B_53DB056B3215_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_338F4AEF_3EB7_0962_418B_53DB056B3215.png",
 "data": {
  "name": "IconButton --"
 },
 "shadow": false,
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_318CA561_3EB1_3B61_41C7_8687931CCCD5",
 "backgroundOpacity": 0,
 "children": [
  "this.IconButton_318CB562_3EB1_3B62_41B3_D6C0A7EE0BCB",
  "this.IconButton_318C8562_3EB1_3B62_41B7_C87FD7621B30",
  "this.IconButton_318C6562_3EB1_3B62_41B9_0F3C092F879D",
  "this.IconButton_318C7562_3EB1_3B62_41BC_FCBABC24D25F"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "scroll",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 16,
 "borderSize": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "-Container settings"
 },
 "verticalAlign": "middle",
 "shadow": false
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "scripts": {
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getKey": function(key){  return window[key]; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "existsKey": function(key){  return key in window; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); }
 },
 "buttonToggleFullscreen": "this.IconButton_318C8562_3EB1_3B62_41B7_C87FD7621B30",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player465"
 },
 "verticalAlign": "top",
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
