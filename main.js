new Vue({
  el: "#app",
  data: {
    items: [],
    spinning: false,
    iteration: 1,
  },
  methods: {
    spinWheel() {
      if (this.spinning) return;
      const wheel = document.querySelector(".wheel");

      let spinDeg, totalDegrees;
      if (this.iteration <= 3) {
        spinDeg = Math.ceil(Math.random() * 3600) + 360;
      } else return;

      this.spinning = true;
      wheel.style.transition = "transform 5s ease-in-out";
      wheel.style.transform = `rotate(${spinDeg || totalDegrees}deg)`;

      setTimeout(() => {
        this.spinning = false;
        wheel.style.transition = "none";
        wheel.style.transform = `rotate(${
          spinDeg ? spinDeg % 360 : 360 - finalDegree
        }deg)`;
      }, 5000);

      this.iteration++;
    },
  },
  mounted() {
    const names = [
      "lobe piercing",
      "helix piercing",
      "flat piercing",
      "conch piercing",
      "rook piercing",
      "daith piercing",
      "tragus piercing",
      "nose piercing",
      "septum piercing",
      "eyebrow piercing",
      "bridge piercing",
      "labret piercing",
      "monroe piercing",
      "medusa piercing",
      "madonna piercing",
      "navel piercing",
      "tongue piercing",
      "nipple piercing",
    ];
    this.items = names.map((name, i) => ({
      i: i,
      clr: `hsl(${i * (360 / names.length)}, 70%, 70%)`,
      name: name,
    }));
  },
});
