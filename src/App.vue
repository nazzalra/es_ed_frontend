// Create and setup your form here
 
<template>
  <div>
    <header>
      <div class="f-container">
        <!-- Add custom logo here -->
      </div>
    </header>

    <flow-form
      ref="flowform"
      v-on:complete="onComplete"
      v-on:submit="onSubmit"
      v-bind:questions="questions"
      v-bind:language="language"
    >
      <!-- Custom content for the Complete/Submit screen slots in the FlowForm component -->
      <!-- We've overriden the default "complete" slot content -->
      <template v-slot:complete id="daftar_input">
        <div class="section-wrap animate.fadeIn" v-if="!submitted">
            <h3 style="font-weight:bold">Berikut kondisi dan prilaku makan yang anda alami :</h3>
            <p :style="daftarStyle" v-for="gejala in listGejala" :key=gejala.id> ✅ {{ gejala.gejala }}</p>
        </div>
        <div class="section-wrap animate.fadeIn" v-if="submitted">
            <h3 style="font-weight:semibold; margin-top:20vh; font-size:2em; text-align:justify">Berdasarkan kondisi dan prilaku makan yang anda alami, kami dapat identifikasi bahwa anda <span style="color:yellow">{{ (kesimpulan.nilai_keyakinan >= 0.7)?"Kemungkinan Besar":(kesimpulan.nilai_keyakinan &lt; 0.4)?"Kemungkinan Kecil":"Mungkin" }}</span> ({{ (kesimpulan.nilai_keyakinan * 100).toFixed(0) }}%) mengalami gejala 
              <span style="color:yellow" v-if="!! kesimpulan">
                {{ kesimpulan.gangguan[0].nama }}
              </span>
              <span v-if="!! kesimpulan && (kesimpulan.gangguan.length > 1)">
                atau
                <span v-for="gangguan in kesimpulan.gangguan.slice(1)" :key="gangguan.id" style="color:yellow" >
                  {{ gangguan.nama }}
                </span>
              </span>
            </h3>
            <h3 style="font-weight:bold; margin-top:30px;">
              ⚠️ Segera konsultasikan dengan psikolog atau psikiater jika gejala berlangsung lebih dari 1 bulan dan untuk mengetahui hasil diagnosis
            </h3>
            <!-- <p style="font-weight:bold"> {{ this.kesimpulan.gangguan.deskripsi }} </p> -->
        </div>
      </template>
      <!-- We've overriden the default "completeButton" slot content -->
      <template v-slot:completeButton>
        <div class="f-submit" v-if="!submitted">
          <button
            class="o-btn-action"
            ref="button"
            type="submit"
            href="#"
            v-on:click.prevent="onSendData()"
            aria-label="Press to submit" style="line-height:0px;"
          >
            <span>{{ language.submitText }}</span>
          </button>
          <!-- <a
            class="f-enter-desc"
            href="#"
            v-on:click.prevent="onSendData()"
          >{{ language.pressEnter }}</a> -->
        </div>
      </template>
    </flow-form>
    <background></background>
  </div>
</template>

<script>
/*
    Copyright (c) 2020 - present, DITDOT Ltd. - MIT Licence
    https://www.ditdot.hr/en
  */
// If using the npm package, use the following line instead of the ones above.
import FlowForm, {
  LanguageModel,
} from "@ditdot-dev/vue-flow-form";

import Background from "./components/Background";
import data_mixin from "./mixins/data_mixin.js";
import watch_mixin from "./mixins/watch_mixin.js";
import cycle_mixin from "./mixins/cycle_mixin.js";
import methods_mixin from "./mixins/methods_mixin.js";
export default {
  mixins:[data_mixin,watch_mixin,cycle_mixin,methods_mixin],
  name: "example",
  components: {
    FlowForm,
    Background,
  },
  data() {
    return {
      listGejala:[],
      gejala: [],
      takut_or_obsesi: false,
      jenis_kelamin: "Pria",
      berat_badan: 0,
      tinggi_badan: 0,
      imt: 0,
      submitted: false,
      completed: false,
      language: new LanguageModel({
        pressEnter: "Tekan ENTER",
        continue: "Lanjut",
        percentCompleted: ":percent% selesai",
        multipleChoiceHelpText: "",
      }),
      beratbadan_input:"",
      sedikitberlebihan_input:"",
      sulitcontrol_input:"",
      takut_input:"",
      obsesi_input:"",
      caraabnormal_input:[],
      turundrastis_input:"",
      gejalalain_input:[],
      kesimpulan:[],
    };
  },
  computed:{
    daftarStyle(){
      return {
        "font-weight":"bold",
        "font-size":this.listGejala.length > 8?"1em":"1.5em"
      }
    }
  }
  
  
};
</script>

<style lang="css">
/* If using the npm package, use the following lines instead of the one above */
/* @import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css"; */
/* @import "~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css"; */

/* @import "./assets/css/themes/normalize.css"; */
@import "./assets/css/themes/common.css";
/* @import "./assets/css/themes/animations.css"; */
@import "./assets/css/themes/minimal-custom.css";
</style>