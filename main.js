
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

      Analytics.active = false;

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
  

  
    
      const target_image63f98bb9834_iconGeometry = new THREE.PlaneGeometry(1, 0.9965156794425087);
   const target_image63f98bb9834_texture = await loadTexture("assets/stihl-marker.png");
  const target_image63f98bb9834_image = new THREE.MeshBasicMaterial({
      map: target_image63f98bb9834_texture,
    });
    const target_image63f98bb9834 = new THREE.Mesh(target_image63f98bb9834_iconGeometry, target_image63f98bb9834_image);
    target_image63f98bb9834.scale.set(1, 1, 1);
    target_image63f98bb9834.position.set(0.01, -0.01, 0.01);
    target_image63f98bb9834.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_f8056e29847_planeGeometry = new THREE.PlaneGeometry(1, 0.5625);

    const video_asset_f8056e29847_Item0Video = await loadVideo("assets/stihl-video.mp4");

    const video_asset_f8056e29847_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_f8056e29847_Item0Video
    );

    let video_asset_f8056e29847_Item0VideoMaterial

      video_asset_f8056e29847_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_f8056e29847_Item0VideoTexture,
        })
    
     const video_asset_f8056e29847 = new THREE.Mesh(
      video_asset_f8056e29847_planeGeometry,
      video_asset_f8056e29847_Item0VideoMaterial
    );

  video_asset_f8056e29847.position.set(0, 0, 0);



  if (isIOS) {
    video_asset_f8056e29847_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_f8056e29847_Item0Video.loop=true;
  
  video_asset_f8056e29847.scale.set(1.9, 1.9, 1.9);

    video_asset_f8056e29847.rotation.set(-0.001, 0, 0);

    
  
const logo_2cbe854f_30192cbe8_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_2cbe854f_30192cbe8_texture = await loadTexture("assets/circle-wa-sm_113.png");
  const logo_2cbe854f_30192cbe8_image = new THREE.MeshBasicMaterial({
      map: logo_2cbe854f_30192cbe8_texture,
    });
    const logo_2cbe854f_30192cbe8 = new THREE.Mesh(logo_2cbe854f_30192cbe8_iconGeometry, logo_2cbe854f_30192cbe8_image);
    logo_2cbe854f_30192cbe8.scale.set(0.3, 0.3, 0.3);
    logo_2cbe854f_30192cbe8.position.set(-0.6, -0.8, 0);
    logo_2cbe854f_30192cbe8.rotation.set(-0.001, 0, 0);
    logo_2cbe854f_30192cbe8.userData.clickable = true
    
    logo_2cbe854f_30192cbe8.userData.eventName ="Whatsapp"
const logo_e30c7f4d_b610e30c7_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_e30c7f4d_b610e30c7_texture = await loadTexture("assets/circle-call-sm_118.png");
  const logo_e30c7f4d_b610e30c7_image = new THREE.MeshBasicMaterial({
      map: logo_e30c7f4d_b610e30c7_texture,
    });
    const logo_e30c7f4d_b610e30c7 = new THREE.Mesh(logo_e30c7f4d_b610e30c7_iconGeometry, logo_e30c7f4d_b610e30c7_image);
    logo_e30c7f4d_b610e30c7.scale.set(0.3, 0.3, 0.3);
    logo_e30c7f4d_b610e30c7.position.set(0.6, -0.8, 0);
    logo_e30c7f4d_b610e30c7.rotation.set(-0.001, 0, 0);
    logo_e30c7f4d_b610e30c7.userData.clickable = true
    
    logo_e30c7f4d_b610e30c7.userData.eventName ="Call"
const image_bf0f0d62_078078a8_iconGeometry = new THREE.PlaneGeometry(1, 0.5);
   const image_bf0f0d62_078078a8_texture = await loadTexture("assets/stihl-logo.png");
  const image_bf0f0d62_078078a8_image = new THREE.MeshBasicMaterial({
      map: image_bf0f0d62_078078a8_texture,
    });
    const image_bf0f0d62_078078a8 = new THREE.Mesh(image_bf0f0d62_078078a8_iconGeometry, image_bf0f0d62_078078a8_image);
    image_bf0f0d62_078078a8.scale.set(0.5, 0.5, 0.5);
    image_bf0f0d62_078078a8.position.set(0, -0.8, 0);
    image_bf0f0d62_078078a8.rotation.set(-0.001, 0, 0);
    image_bf0f0d62_078078a8.userData.clickable = true
    
    image_bf0f0d62_078078a8.userData.eventName ="Website"
      
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
            video_asset_f8056e29847_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === logo_2cbe854f_30192cbe8) {
        setTimeout(()=>{
          window.location.href = "https://wa.me/9028411222?tex"
        },100)
        }
      

      if (o.userData.clickable && o === logo_e30c7f4d_b610e30c7) {
        setTimeout(()=>{
          window.location.href = "tel:9028411222"
        },100)
        }
      

      if (o.userData.clickable && o === image_bf0f0d62_078078a8) {
        setTimeout(()=>{
          window.location.href = "https://www.stihl.in/en/c/water-pumps-169952?scroll=267"
        },100)
        }
      
      }

    })
    
      
    
anchor.group.add(video_asset_f8056e29847)
anchor.group.add(logo_2cbe854f_30192cbe8)
anchor.group.add(logo_e30c7f4d_b610e30c7)
anchor.group.add(image_bf0f0d62_078078a8)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            





     
      video_asset_f8056e29847_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_f8056e29847_Item0Video.pause();

        




    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    