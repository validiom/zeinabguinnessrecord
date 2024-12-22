<template>
  <div>

    <!--###############################-->
    <!--PRELOADER #####################-->
    <!--###############################-->

    <div id="preloader">
      <div id="status">
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
    </div>

    <!--###############################-->
    <!--HOME ##########################-->
    <!--###############################-->

    <section id="home">
      <div class="container" id="home_background">
        <div class="row">
          <div class="col-sm-10 col-md-10 col-lg-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1" id="home_content">
            <div id="logo"><a href="#home"><img id="guiness_logo" src="/images/guiness.jpg" alt="logo"></a></div>
            <div id="logo_text">
              <h1>Zeinab BANCE</h1>
            </div>
            <div id="logo_header">
              <h5>Agora - Abidjan - Côte d'ivoire</h5>
            </div>
            <div class="debut">DEBUT : {{ begin }}</div>
            <div id="counter_box">
              <div class="countdown">
                <!-- 00<strong>D</strong>00<strong>H</strong>00<strong>M</strong>00<strong>S</strong> -->
              </div>
              <div class="debut">
                TEMPS ECOULE : {{ totalHours }}
              </div>
            </div>
            <div id="slogan">
              <h3>Tous ensemble pour soutenir notre Zeinab Nationale</h3>
            </div>
            <div id="courage">
              <h3>TU DORS <span class="pas">PAS</span> ON DORT <span class="pas">PAS</span>!</h3>
            </div>
            <div id="newsletter_form">
              <!-- <form action="http://ww.shegy.nazwa.pl/themeforest/freelancer_coming/slider/php/send.php" method="post" class="subscribe-form" id="subscribe-form">
                         <input type="text" name="email" class="subscribe-input" placeholder="Enter your e-mail address..." data-validate="validate(required, email) on(change blur)">
                         <button type="submit" class="subscribe-submit">Notify Me</button>
                     </form> -->
            </div>
            <div id="preview"></div>
            <div id="arrow">
              <svg viewBox="0 0 32 32">
                <use xlink:href="#arrow-top"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--###############################-->
    <!--CONTACT #######################-->
    <!--###############################-->

    <section id="contact">
      <div class="container">
        <div class="row" id="info">
          <div class="col-sm-6 col-md-6 col-lg-6 col-sm-offset-1 col-md-offset-1 col-lg-offset-1" id="about">
            <h3>Les conditions officielles pour le record Guinness du plus long marathon de cuisine individuel</h3>
            <p>
              Durée de l'activité : Le participant doit cuisiner en continu pendant la durée de son choix( 120 heures
              pour cheffe Zeinab BANCE Guinness Record) , en respectant les autres règles établies.<br />
              Pauses : Pour chaque heure de cuisine, le participant accumule cinq (5) minutes de repos. Ces pauses
              peuvent être utilisées immédiatement ou cumulées pour une utilisation ultérieure. Pendant ces périodes de
              repos, le participant peut manger, boire, utiliser les toilettes ou dormir. <br />
              Assistance : Un sous-chef est autorisé pour aider à la préparation des ingrédients, au nettoyage et à
              l'entretien de la cuisine. Cependant, toute la cuisson doit être effectuée par le participant principal.
              <br />
              Nombre de plats : Au moins deux(2) plats doivent être en cours de préparation ou de cuisson à tout moment.
              <br />
              Consommation des plats : Tous les plats préparés doivent être consommés après leur cuisson. Ils peuvent
              être distribués au public ou donnés à des organisations caritatives pour éviter le gaspillage alimentaire.
              <br />
              Ces règles ont été appliquées lors de précédentes tentatives de record, notamment celle de Hilda Baci en
              mai 2023, qui a cuisiné pendant 93 heures et 11 minutes, et celle d'Alan Fisher en octobre 2023, qui a
              établi le record actuel avec 119 heures et 57 minutes de cuisine continue. <br />
              Il est essentiel de noter que les règles peuvent évoluer. Il est donc recommandé de consulter directement
              le site officiel du Guinness World Records ou de les contacter pour obtenir les directives les plus
              récentes avant d'entreprendre une telle tentative.<span class="auteur">🇨🇮 DiVeRs InSoLiTeS</span>
            </p>
            <br /><br />
            <h3>Ce que Zeinab Bancé ne peut pas faire pendant le défi</h3>
            <p>
              1-Dormir ou s’asseoir longtemps : Elle doit rester debout et cuisiner en permanence pour que le temps soit
              compté.<br />
              2-Se faire aider dans la cuisine : Personne d'autre ne doit préparer ou manipuler les plats pendant le
              défi.<br />
              3-S’écarter des fourneaux pendant trop longtemps : Toute absence prolongée pourrait disqualifier son
              record.<br />
              4-Réutiliser un plat sans le préparer à nouveau : Chaque plat doit être entièrement cuisiné et
              comptabilisé.<br />
              5-Faire autre chose que cuisiner : Toute activité non liée à la cuisine (comme un appel téléphonique ou
              une autre distraction) pourrait être une violation des règles.<br />
              6-Ignorer les règles d’hygiène et de sécurité : Toutes les règles alimentaires doivent être respectées,
              sous peine de disqualification ou de non-validation.<br />
              Ce défi est une épreuve d’endurance physique et mentale. La discipline et le respect des consignes seront
              important pour réussir et battre le record ! <span class="auteur">Dékalé Mag </span></p>
          </div>
          <div class="col-sm-4 col-md-4 col-lg-4" id="getintouch">
            <h3 style="text-decoration: line-through;">Nous contacter</h3>
            <p>Pas besoin de me contacter!!</p>
            <div class="center-item">
              <div class="laugh-l flex">
                <img src="/images/laughingFox.jpg" class="laughing" />
              </div>
            </div>
            <p class="chill">just a chill boy wanted to have fun</p>
          </div>
        </div>

        <!--Social icons-->
        <div class="row">
          <div class="col-sm-10 col-md-10 col-lg-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1" id="social">
            <div class="hr">
              <hr />
            </div>

            <div id="social_icons">
              <ul>
                <li>
                  <svg viewBox="0 0 32 32" id="fb_icon" onclick="location.href='#'">
                    <use xlink:href="#facebook"></use>
                  </svg>
                </li>
                <li>
                  <svg viewBox="0 0 32 32" id="tw_icon" onclick="location.href='#''">
                    <use xlink:href="#twitter"></use>
                  </svg>
                </li>
                <li>
                  <svg viewBox="0 0 32 32" id="in_icon" onclick="location.href='#'">
                    <use xlink:href="#linkedin"></use>
                  </svg>
                </li>
                <li>
                  <svg viewBox="0 0 32 32" id="g_icon" onclick="location.href='#'">
                    <use xlink:href="#google-plus"></use>
                  </svg>
                </li>
                <li>
                  <svg viewBox="0 0 32 32" id="pin_icon" onclick="location.href='#'">
                    <use xlink:href="#pinterest"></use>
                  </svg>
                </li>
                <li>
                  <svg viewBox="0 0 32 32" id="fli_icon" onclick="location.href='#'">
                    <use xlink:href="#flickr"></use>
                  </svg>
                </li>
              </ul>
            </div>

            <div class="hr">
              <hr />
            </div>

            <div id="arrow_back">
              <svg viewBox="0 0 32 32">
                <use xlink:href="#arrow-bottom"></use>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>

  </div>
</template>


<script>
export default {
  name: "App",
  data: () => ({
    day: "00",
    hours: "00",
    minutes: "00",
    second: "00",
    totalHours: "",
    timer: null
  }),
  computed: {
    beginTimestamp() {
      let d = new Date(2024, 11, 17, 20, 50, 41);

      return d;
    },
    begin() {
      let b = new Date(this.beginTimestamp);

      return b.toLocaleDateString() + " " + b.toLocaleTimeString();
    },

  },
  methods: {
    getTotalHours() {
      let t = Date.now() - this.beginTimestamp

      let h = parseInt(t / (1000 * 60 * 60));
      let m = parseInt((t - (h * (1000 * 60 * 60))) / (1000 * 60));
      let s = parseInt((t - (h * (1000 * 60 * 60)) - (m * (1000 * 60))) / 1000);

      if (m < 10) {
        m = "0" + m;
      }
      if (s < 10) {
        s = "0" + s;
      }

      this.totalHours = h + ":" + m + ":" + s;

    }
  },
  mounted: function () {
    this.timer = setInterval(() => {
      this.getTotalHours()
    }, 1000)
  },

  beforeDestroy() {
    clearInterval(this.timer)
  }

}

</script>

<style scoped>
#logo_text {
  font-size: 1.5em;
  color: white;
}

#guiness_logo {
  width: 100px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
}

#courage {
  font-size: 1.8em;
  font-weight: bold;
  color: black;
  background-image: linear-gradient(to right, orange, white, green);
  border-radius: 10px;
}

.pas {
  color: red;
}

.debut {
  font-size: 1.3em;
  font-weight: bold;
  color: white;
}

.auteur {
  display: block;
  font-weight: bold;
  font-size: 1.1em;
}

.laughing {
  width: 100px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
}


.laugh-l {
  display: flex;
  box-shadow: -5px -5px 5px rgba(0, 0, 0, 0.7);
}

.center-item {
  display: flex;
  justify-content: center;
}

.chill {
  color: orangered;
  font-weight: bold;
  font-style: italic;
}
</style>