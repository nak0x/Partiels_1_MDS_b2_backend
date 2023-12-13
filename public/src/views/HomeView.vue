<script>
export default {
  data() {
    return {
      "paralaxLayersBasePos": [
        // Sky
        {
          x: 0,
          y: 0
        },
        // White montain
        {
          x: 0,
          y: 100
        },
        // Title
        {
          x: 0,
          y: -200
        },
        // dark montain
        {
          x: 0,
          y: 100
        },
        // base line
        {
          x: 0,
          y: 50,
        },
        // Lake
        {
          x: 0,
          y: 50
        }
      ],
      "paralaxLayersPos": [
        // Sky
        {
          x: 0,
          y: 0
        },
        // White montain
        {
          x: 0,
          y: 100
        },
        // Title
        {
          x: 0,
          y: -200
        },
        // dark montain
        {
          x: 0,
          y: 100
        },
        // base line
        {
          x: 0,
          y: 50,
        },
        // Lake
        {
          x: 0,
          y: 50
        }
      ],
      scroll: 0
    }
  },
  methods: {
    /* 
      WheelEvent {isTrusted: true, _vts: 1702500105594, deltaX: -0, deltaY: -120, deltaZ: 0, …}
        isTrusted:true
        _vts:1702500105594
        altKey:false
        bubbles:true
        button: 0
        buttons: 0
        cancelBubble: false
        cancelable: true
        clientX: 1114
        clientY: 426
        composed: true
        ctrlKey: false
        currentTarget: null
        defaultPrevented: true
        deltaMode: 0
        deltaX: -0
        deltaY: -120
        deltaZ: 0
        detail: 0
        eventPhase: 0
        fromElement: null
        layerX: 1114
        layerY: 574
        metaKey: false
        movementX: 0
        movementY: 0
        offsetX: 1114
        offsetY: 524
        pageX: 1114
        pageY: 426
        relatedTarget: null
        returnValue: false
        screenX: 1114
        screenY: 547
        shiftKey: false
        sourceCapabilities: null
        srcElement: img
        target: img
        timeStamp: 19480.89999999851
        toElement: img
        type: "wheel"
        view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        wheelDelta: 120
        wheelDeltaX: 0
        wheelDeltaY: 120
        which: 0
        x: 1114
        y: 426
    */
    handleScroll(e){

      console.log(e);


      
    },
    updateParalax(arr){
      // Get all the paralax layer
      let paralaxLayers = document.querySelectorAll(".paralax-effect .layer");
      console.log(paralaxLayers);

      // Apply the PosValue
      paralaxLayers.forEach((v, i) => {
        console.log(v, i);
        v.style.cssText = `transform: translateX(${arr[i].x}px) translateY(${arr[i].y}px);`;
      })
    }
  },
  mounted(){
    this.updateParalax(this.paralaxLayersBasePos);
  }
}
</script>

<template>
  <main @scroll.prevent="handleScroll">
    <section id="hero-section">
      <div class="paralax-effect">
        <div class="layer sky" id="paralax-layer-6" data-speed-factor="1.1" data-dir="up">
          <img src="@/assets/images/l4_ciel.png" alt="">
        </div>
        <div class="layer white-montain" id="paralax-layer-5" data-speed-factor="1.3" data-dir="up">
          <img src="@/assets/images/l3_montagne.png" alt="">
        </div>
        <div class="layer title" id="paralax-layer-4" data-speed-factor="1.5" data-dir="down">
          <div class="title-container">
            <h1 class="page-title">Découvrir</h1>
          </div>
        </div>
        <div class="layer dark-montain" id="paralax-layer-3" data-speed-factor="1.5" data-dir="up">
          <img src="@/assets/images/l2_montagne.png" alt="">
        </div>
        <div class="layer baseline" id="paralax-layer-2" data-speed-factor="1.5" data-dir="right">
          <div class="baseline-container">
            <p class="baseline">Nos stages d'immersion MyDigitalSchool<br>Annecy</p>
          </div>
        </div>
        <div class="layer lake" id="paralax-layer-1" data-speed-factor="2" data-dir="up">
          <img src="@/assets/images/l1_lac.png" alt="">
        </div>
      </div>
    </section>
    <section id="sub-hero">
      <div class="left">
        <h2>Trouver votre formation de rêve</h2>
        <p>Plongez au cœur de votre avenir scolaire lors d'un stage d'immersion exclusif de deux jours au sein de notre école d'exception. Découvrez l'excellence éducative qui vous attend !</p>
        <button class="btn">Je veut participer !</button>
      </div>
      <div class="right">
        <div class="human-paralax">
          <img src="@/assets/images/sub-hero-paralax/l6.png" style="transform: translateY(-10%);" alt="">
          <img src="@/assets/images/sub-hero-paralax/l5.png" style="transform: translateY(-10%);" alt="">
          <img src="@/assets/images/sub-hero-paralax/l4.svg" style="bottom: 6rem; left: 6rem;" alt="">
          <img src="@/assets/images/sub-hero-paralax/l3.svg" style="top: 3rem; left: 3rem;" alt="">
          <img src="@/assets/images/sub-hero-paralax/l2.svg" style="top: 6rem; right: 6rem;" alt="">
          <img src="@/assets/images/sub-hero-paralax/l1.svg" style="bottom: 3rem; right: 3rem;" alt="">
        </div>
      </div>
    </section>
    <section id="details">
      <div class="section-title-container">
        <h2>DÉCOUVRER NOS FORMATIONS</h2>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="card-image-container">
            <img src="@/assets/images/details-section/card-1.png" alt="">
          </div>
          <div class="card-text-container">
            <h3>BACHELOR<br>MARKETING</h3>
          </div>
        </div>
        <div class="card">
          <div class="card-image-container">
            <img src="@/assets/images/details-section/card-2.png" alt="">
          </div>
          <div class="card-text-container">
            <h3>BACHELOR<br>WEBDESIGN</h3>
          </div>
        </div>
        <div class="card">
          <div class="card-image-container">
            <img src="@/assets/images/details-section/card-3.png" alt="">
          </div>
          <div class="card-text-container">
            <h3>BACHELOR<br>DÉVELOPPEMENT</h3>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main{
  min-height: 100vh;
}
/* Hero section */
#hero-section{
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
.paralax-effect{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.paralax-effect .layer{
  position: absolute;
}
.title-container{
  font-size: 12em;
  color: var(--white);
}
.baseline-container{
  font-size: 2em;
  color: var(--white);
  font-family: 'Righteous', sans-serif;
  text-align: center;
}
/* Sub hero section */
#sub-hero{
  background-color: var(--darkest-blue);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: var(--vertical-padding) var(--side-padding);
  height: 100vh;
  align-items: center;
  gap: 2rem;
}
#sub-hero .left{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
  color: var(--white);
}
#sub-hero p{
  font-size: 1.5em;
  letter-spacing: .05em;
  line-height: 130%;
}
#sub-hero .right{
  justify-self: center;
  height: 100%;
  width: 100%;
}
.human-paralax{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.human-paralax img{
  position: absolute;
  scale: 0.8;
}
/* Details section */
#details{
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: var(--vertical-padding);
  padding: var(--vertical-padding) var(--side-padding);
  color: var(--white);
  background-color: var(--darkest-blue);
}

#details .card-container{
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  height: 100%;
  max-width: 1800px;
  width: 100%;
}

.card{
  display: grid;
  grid-template-rows: 4fr 1fr;
  width: 450px;
  height: 100%;
  cursor: pointer;
}
.card .card-image-container{
  height: auto;
  width: 100%;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
}
.card .card-image-container img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.card .card-text-container{
  width: 100%;
  background-color: var(--light-blue);
  height: 100%;
  margin: 0;
  border-radius: 0 0 1.5rem 1.5rem;
  font-size: 1em;
  font-size: 1.5rem;
  padding: 1.5rem;
  color: var(--black);
}
</style>