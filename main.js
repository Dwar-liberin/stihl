
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    import { createChromaMaterial } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/chroma-video.js" 
    import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";
      let analytics=null
  const animationManager = new AnimationManager();

      const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;
      try {

        analytics = new Analytics(
          {
              appName: "DwAR",
              customerId: "4",
              campaignName: "Stihl",
              serverUrl: "https://staging.lttl.in/event"
          }
       );

      Analytics.active = true;

      } catch(e) {
        console.log("Err", e.message)
      }
      
  

    const THREE = window.MINDAR.IMAGE.THREE;

    
    async function loadUnmuteLogo() {
      const muteIconGeo = new THREE.CircleGeometry(0.5, 32);
      const muteIconTexture = await loadTexture("assets/mute.png");
      const muteIconMaterial = new THREE.MeshBasicMaterial({
        map: muteIconTexture,
      });
    
      const muteIconMesh = new THREE.Mesh(muteIconGeo, muteIconMaterial);
      muteIconMesh.scale.set(0.1, 0.1);
      muteIconMesh.position.set(0, -0.5, 0.3);
    
      muteIconMesh.userData.clickable = true;
    
      return muteIconMesh;
    }

    

    
 function executeAnimation(animation, mesh) {
  console.log('animation', animation)
  const { name, state, value, duration, delay } = animation;

  switch (name) {
    case "slide":
      if (state === "left") {
        animationManager.animateSlide(mesh, null, duration, null, value, delay);
      }
      else if (state === "right") {
        animationManager.animateSlide(mesh, null, duration, value, state, delay);
      } else if (state === "up") {
        animationManager.animateSlideUp(mesh, duration, value, delay);
      } else {
        animationManager.animateSlideDown(mesh, duration, value, delay);

      }
      break;
    case "fade":
      if (state == "in") {
        animationManager.animateFadeIn(mesh, duration, delay);
      } else {
        animationManager.animateFadeOut(mesh, duration, delay);
      }
      break;
    case "scale":
      if (state == "up") animationManager.animateScaleUp(mesh, value, duration, null, delay);
      else animationManager.animateScaleDown(mesh, value, duration, null, delay);
      break;
    case "bounce":
      animationManager.animateBounce(mesh, "z", value, duration, delay); // Assuming "z" axis for bounce
      break;
    default:
      console.error("Unknown animation");
      break;
  }
}
    

    document.addEventListener("DOMContentLoaded", () => {

    // DwAR Analytics
    try {
      console.log("ana", analytics)
      if(analytics){
        console.log("ana", analytics)
        analytics.trackPageLoad({
          eventType: 'load',
          payload: true,
        });
  
        analytics.sendQueryParam()
      }
     
    } catch(e) {
      console.log("e", e.message)
    }


    async function start(){

      let muteIconMesh;
      
      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const anchor = mindThree.addAnchor(0);

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loadFont = () => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json",
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  const font = await loadFont();
  

  
    
      const image_bf0f0d62_078fa708_iconGeometry = new THREE.PlaneGeometry(1, 0.5);
   const image_bf0f0d62_078fa708_texture = await loadTexture("assets/stihl-logo.png");
  const image_bf0f0d62_078fa708_image = new THREE.MeshBasicMaterial({
      map: image_bf0f0d62_078fa708_texture,
    });
    const image_bf0f0d62_078fa708 = new THREE.Mesh(image_bf0f0d62_078fa708_iconGeometry, image_bf0f0d62_078fa708_image);
    image_bf0f0d62_078fa708.scale.set(0.5, 0.5, 0.5);
    image_bf0f0d62_078fa708.position.set(0, -0.8, 0);
    image_bf0f0d62_078fa708.rotation.set(-0.001, 0, 0);
    image_bf0f0d62_078fa708.userData.clickable = true
    
    image_bf0f0d62_078fa708.userData.eventName ="Website"
const logo_07d2b06f_751d07d2b_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_07d2b06f_751d07d2b_texture = await loadTexture("assets/circle-wa-sm_113.png");
  const logo_07d2b06f_751d07d2b_image = new THREE.MeshBasicMaterial({
      map: logo_07d2b06f_751d07d2b_texture,
    });
    const logo_07d2b06f_751d07d2b = new THREE.Mesh(logo_07d2b06f_751d07d2b_iconGeometry, logo_07d2b06f_751d07d2b_image);
    logo_07d2b06f_751d07d2b.scale.set(0.3, 0.3, 0.3);
    logo_07d2b06f_751d07d2b.position.set(-0.6, -0.8, 0);
    logo_07d2b06f_751d07d2b.rotation.set(-0.001, 0, 0);
    logo_07d2b06f_751d07d2b.userData.clickable = true
    
    logo_07d2b06f_751d07d2b.userData.eventName ="Whatsapp"
const logo_dc709f98_4860dc709_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_dc709f98_4860dc709_texture = await loadTexture("assets/circle-call-sm_118.png");
  const logo_dc709f98_4860dc709_image = new THREE.MeshBasicMaterial({
      map: logo_dc709f98_4860dc709_texture,
    });
    const logo_dc709f98_4860dc709 = new THREE.Mesh(logo_dc709f98_4860dc709_iconGeometry, logo_dc709f98_4860dc709_image);
    logo_dc709f98_4860dc709.scale.set(0.3, 0.3, 0.3);
    logo_dc709f98_4860dc709.position.set(0.6, -0.8, 0);
    logo_dc709f98_4860dc709.rotation.set(-0.001, 0, 0);
    logo_dc709f98_4860dc709.userData.clickable = true
    
    logo_dc709f98_4860dc709.userData.eventName ="Call"
const target_imageundefibbe7f_iconGeometry = new THREE.PlaneGeometry(1, 0.9965156794425087);
   const target_imageundefibbe7f_texture = await loadTexture("assets/stihl-marker.png");
  const target_imageundefibbe7f_image = new THREE.MeshBasicMaterial({
      map: target_imageundefibbe7f_texture,
    });
    const target_imageundefibbe7f = new THREE.Mesh(target_imageundefibbe7f_iconGeometry, target_imageundefibbe7f_image);
    target_imageundefibbe7f.scale.set(1, 1, 1);
    target_imageundefibbe7f.position.set(0.01, -0.01, 0.01);
    target_imageundefibbe7f.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_f8056ec0bcf_planeGeometry = new THREE.PlaneGeometry(1, 0.5625);

    const video_asset_f8056ec0bcf_Item0Video = await loadVideo("assets/stihl-video.mp4");

    const video_asset_f8056ec0bcf_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_f8056ec0bcf_Item0Video
    );

    let video_asset_f8056ec0bcf_Item0VideoMaterial

      video_asset_f8056ec0bcf_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_f8056ec0bcf_Item0VideoTexture,
        })
    
     const video_asset_f8056ec0bcf = new THREE.Mesh(
      video_asset_f8056ec0bcf_planeGeometry,
      video_asset_f8056ec0bcf_Item0VideoMaterial
    );

  video_asset_f8056ec0bcf.position.set(0, 0, 0);



  if (isIOS) {
    video_asset_f8056ec0bcf_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_f8056ec0bcf_Item0Video.loop=true;
  
  video_asset_f8056ec0bcf.scale.set(1.9, 1.9, 1.9);

    video_asset_f8056ec0bcf.rotation.set(-0.002, 0, 0);

    
  
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      if(o.userData.clickable && analytics){
        
        try {
          analytics.trackClick({
            eventType: "click",
            payload: o.userData.eventName
          })
        } catch (err){
          console.log("Err", err)
        }
       
      }

        if(isIOS){ 
          if (o.userData.clickable && o === muteIconMesh) {
            video_asset_f8056ec0bcf_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === image_bf0f0d62_078fa708) {
        setTimeout(()=>{
          window.location.href = "https://www.stihl.in/en/c/water-pumps-169952?scroll=267"
        },100)
        }
      

      if (o.userData.clickable && o === logo_07d2b06f_751d07d2b) {
        setTimeout(()=>{
          window.location.href = "https://wa.me/9028411222?tex"
        },100)
        }
      

      if (o.userData.clickable && o === logo_dc709f98_4860dc709) {
        setTimeout(()=>{
          window.location.href = "tel:9028411222"
        },100)
        }
      
      }

    })
    
      
    anchor.group.add(image_bf0f0d62_078fa708)
anchor.group.add(logo_07d2b06f_751d07d2b)
anchor.group.add(logo_dc709f98_4860dc709)

anchor.group.add(video_asset_f8056ec0bcf)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            




                  executeAnimation({"name":"fade","state":"in","value":-1.2,"duration":0,"delay":0,"event":"load"}, video_asset_f8056ec0bcf)

     
      video_asset_f8056ec0bcf_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_f8056ec0bcf_Item0Video.pause();

        



animationManager.resetObject(name)
    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    