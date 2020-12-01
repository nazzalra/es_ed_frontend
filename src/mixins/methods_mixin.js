import axios from "axios";
import qs from 'qs';
let methods_mixin = {
  methods: {
    onKeyListener($event) {
      // We've overriden the default "complete" slot so
      // we need to implement the "keyup" listener manually.

      if ($event.key === "Enter" && this.completed && !this.submitted) {
        this.onSendData();
      }
    },

    /* eslint-disable-next-line no-unused-vars */
    onComplete(completed, questionList) {
      // This method is called whenever the "completed" status is changed.
      this.completed = completed;
      const gejala = this.getGejala();
      const options = {
        url: "http://gangguanmakan.backend/gejala",
        method: "get",
        params: {
          gejala:gejala
        },
        paramsSerializer: params => {
          return qs.stringify(params);
        }
      };
      axios(options).then((response) => {
        this.listGejala = response.data;
        console.log(this.listGejala);
      });
    },

    /* eslint-disable-next-line no-unused-vars */
    onSubmit(questionList) {
      // This method will only be called if you don't override the
      // completeButton slot.
      this.onSendData();
    },

    onSendData() {
      // Set `submitted` to true so the form knows not to allow back/forward
      // navigation anymore.
      this.$refs.flowform.submitted = true;
      this.submitted = true;
      /* eslint-disable-next-line no-unused-vars */
      const gejala = this.getGejala();
      const options = {
        url: "http://gangguanmakan.backend/identifikasi",
        method: "get",
        params: {
          gejala:gejala
        },
        paramsSerializer: params => {
          return qs.stringify(params);
        }
      };
      axios(options).then((response) => {
        this.kesimpulan = response.data;
        console.log(this.kesimpulan);
      });
      /*
          You can use Fetch API to send the data to your server, eg.:
 
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
        */
      
    },

    getGejala() {
      let gejala = [];
      if (this.beratbadan_input != "") gejala.push(this.beratbadan_input);
      if (this.sedikitberlebihan_input != "") gejala.push(this.sedikitberlebihan_input);
      if (this.sulitcontrol_input != "") gejala.push(this.sulitcontrol_input);
      if (this.takut_input != "") gejala.push(this.takut_input);
      if (this.obsesi_input != "") gejala.push(this.obsesi_input);
      if (this.caraabnormal_input != []) gejala = gejala.concat(this.caraabnormal_input);
      if (this.turundrastis_input != "") gejala.push(this.turundrastis_input);
      if (this.gejalalain_input != []) gejala = gejala.concat(this.gejalalain_input);

      return gejala;
    },
    getIMT() {
      this.imt = (
        this.berat_badan / Math.pow(this.tinggi_badan * 0.01, 2)
      ).toFixed(2);
      if (this.imt < 18.5) {
        this.beratbadan_input = "6";
      } else if (this.imt >= 18.5 && this.imt <= 22.9) {
        this.beratbadan_input = "7";
      } else {
        this.beratbadan_input = "8";
      }
    },
  },
}
export default methods_mixin;