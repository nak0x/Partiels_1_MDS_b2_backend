<script>
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json(); 
}

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
      scroll: 0,
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        studiesLevel: ""
      },
      formState: "default",
      formError: ""
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

      
    },
    updateParalax(arr){
      // Get all the paralax layer
      let paralaxLayers = document.querySelectorAll(".paralax-effect .layer");

      // Apply the PosValue
      paralaxLayers.forEach((v, i) => {
        v.style.cssText = `transform: translateX(${arr[i].x}px) translateY(${arr[i].y}px);`;
      })
    },
    async sendFormData(){
      try{
        this.formState = "load"
        let res = await postData("http://localhost:8081/api/users/", {...this.formData})
        if(res.ok){
          this.formState = "validated";
        }else{
          this.formState = "error";
          this.formError = res.error;
        }
      }catch(err){
        this.formState = "error";
        this.formError = err.message;
        console.log(err);
      }
    }
  },
  mounted(){
    this.updateParalax(this.paralaxLayersBasePos);
  }
}
</script>

<template>
  <main @scroll="handleScroll">
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
        <a class="card" target="_blank" href="https://www.mydigitalschool.com/formation-ecole-multimedia-alternance">
          <div class="card-image-container">
            <img src="@/assets/images/details-section/card-1.png" alt="">
          </div>
          <div class="card-text-container">
            <h3>BACHELOR MARKETING</h3>
          </div>
        </a>
        <a class="card" target="_blank" href="https://www.mydigitalschool.com/formation-webdesign">
          <div class="card-image-container">
            <img src="@/assets/images/details-section/card-2.png" alt="">
          </div>
          <div class="card-text-container">
            <h3>BACHELOR WEBDESIGN</h3>
          </div>
        </a>
        <a class="card" target="_blank" href="https://www.mydigitalschool.com/formation-developpeur">
          <div class="card-image-container">
            <img src="@/assets/images/details-section/card-3.png" alt="">
          </div>
          <div class="card-text-container">
            <h3>BACHELOR DÉVELOPPEMENT</h3>
          </div>
        </a>
      </div>
      <div class="infos-container">
        <div class="text-container">
          <h3 class="title-container">Qu'est-ce qu'un stage d'immersion ?</h3>
          <p>Nos stages d’immersion vous permettent de découvrir notre méthode d’apprentissage révolutionnaire via une expérience de 2 jours inoubliable.</p>
          <p>Découvrez les métiers du digital à travers une expérience qui changera de vos habitudes. Si vous aimez les défis et le mode projet, ce stage est fait pour vous.</p>
          <button class="btn">Je veut participer !</button>
        </div>
        <div class="date-container">
          <p><span class="number">4 et 5</span><br>Janvier 2023</p>
        </div>
      </div>
    </section>
    <section id="contact-form">
      <div class="left contact-form-container" :data-status="formState">
        <h2 class="form-title">S'INSCRIRE</h2>
        <div class="error-message">
          <p class="error">{{ formError }}</p>
        </div>
        <div class="loading">
          <span class="loader"></span>
        </div>
        <div class="success-message">
          <h3>Félicitation !</h3>
          <p>Vous êtes inscrit à notre stage d'immersion</p>
          <a href="https://www.mydigitalschool.com/"><button class="btn">En savoir plus sur nous !</button></a>
        </div>
        <form @submit.prevent="sendFormData" class="contact-form" >
          <div class="field required">
            <label for="first-name">Prénom</label>
            <input type="text" placeholder="Jean" required v-model="formData.firstName">
          </div>
          <div class="field required">
            <label for="last-name">Nom</label>
            <input type="text" placeholder="Dupond" required v-model="formData.lastName">
          </div>
          <div class="field required">
            <label for="email">Prénom</label>
            <input type="email" placeholder="j.dupd@exemple.com" required v-model="formData.email">
          </div>
          <div class="field">
            <label for="phone">Téléphone</label>
            <input type="tel" placeholder="0707070707" required v-model="formData.phone">
          </div>
          <div class="field select required">
            <label for="stud-lvl">Niveau d'étude</label>
            <select name="stud-lvl" required v-model="formData.studiesLevel">
              <option value="">Choisir son niveau d'étude</option>
              <option value="0">Bac</option>   
              <option value="1">Bac +1</option>
              <option value="2">Bac +2</option>
              <option value="3">Bac +3</option>
              <option value="4">Bac +4</option>
              <option value="5">Bac +5</option> 
            </select>
          </div>
          <div class="field">
            <button class="btn" type="submit">S'inscrire !</button>
          </div>
        </form>
      </div>
      <div class="right image-container">
        <img src="@/assets/images/contact-form/contact-form-image.png" alt="">
        <div class="contact-infos-container">
          <div class="info-wraper">
            <img src="@/assets/svg/contact-section/location.svg" alt="">
            <p>14 Av. du Rhône, 74000 Annecy</p>
          </div>
          <div class="info-wraper">
            <img src="@/assets/svg/contact-section/call.svg" alt="">
            <p>04 68 02 02 69</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Contact section */

.image-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.contact-infos-container{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.2rem;
}
.info-wraper{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .2rem;
  color: var(--white);
  font-size: 1.1em;
}

#contact-form{
  min-height: 100vh;
  background-color: var(--darkest-blue);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: var(--vertical-padding) var(--side-padding);
}

.contact-form-container{
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-form-container[data-status="default"] .error-message,
.contact-form-container[data-status="default"] .loading,
.contact-form-container[data-status="default"] .success-message{
  display: none;
}

.contact-form-container[data-status="load"] .error-message,
.contact-form-container[data-status="load"] .success-message,
.contact-form-container[data-status="load"] .contact-form{
  display: none;
}

.contact-form-container[data-status="validated"] .error-message,
.contact-form-container[data-status="validated"] .loading,
.contact-form-container[data-status="validated"] .contact-form{
  display: none;
}

.contact-form-container[data-status="error"] .success-message,
.contact-form-container[data-status="error"] .loading{
  display: none;
}

.contact-form-container .loading{
  display: flex;
  place-items: center;
}

.contact-form-container .success-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  font-size: 1.3em;
  color: var(--white);
}

.contact-form-container .success-message h3{
  font-size: 2em;
  color: var(--white);
  font-family: 'Righteous', sans-serif;
}

.contact-form-container .error-message{
  font-size: 1.2em;
  color: var(--orange);
}

.form-title{
  color: var(--white);
}
.contact-form{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 628px;
  min-width: 300px;
  width: 100%;
}
.field{
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
.field label{
  font-size: 1.2em;
  color: var(--white);
}
.field input{
  padding: 1em;
  border-radius: .5em;
  font-size: 1.1em;
  border: 2px solid var(--white);
  background-color: transparent;
  color: var(--white);
}
.field input::placeholder{
  color: var(--white);
  opacity: .3;
}
.field input:active,
.field input:hover,
.field input:focus,
.field input:focus-visible,
.field input:focus-within,
.field select:active,
.field select:hover,
.field select:focus,
.field select:focus-visible,
.field select:focus-within
{
  outline: none;
  background-color: #fff2;
}

.field select{
  display: inline-block;
  padding: 1em;
  border-radius: .5em;
  font-size: 1.1em;
  border: 2px solid var(--white);
  background-color: transparent;
  color: var(--white);
  appearance: none;
  accent-color: var(--main-blue);
}

.field select option{
  padding: 1em;
  color: var(--black);
  border-radius: .5em;
  accent-color: var(--main-blue);
}

.field .btn{
  max-width: 200px;
  margin-top: 3rem;
}

/* Main */

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
  font-size: 1.4em;
  letter-spacing: .03em;
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
  min-height: 100vh;
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
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  height: 100%;
  max-width: 1800px;
  width: 100%;
}

.card{
  display: grid;
  grid-template-rows: 6fr 1fr;
  width: 350px;
  height: 250px;
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
  font-size: 1rem;
  padding: 1.5rem;
  color: var(--black);
}

#details .infos-container{
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
}

#details .infos-container .text-container{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.2em;
}

#details .infos-container .text-container .title-container{
  font-size: 2em;
}

#details .infos-container .date-container{
  font-size: 6em;
  font-family: 'Righteous', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

#details .infos-container .date-container .number{
  font-size: 2.2em;
}
</style>