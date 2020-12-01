import {
  ChoiceOption,
} from "@ditdot-dev/vue-flow-form";
var watch_mixin = {
  watch: {
    "questions.1.answer": function (val) {
      this.jenis_kelamin = val;
      if (this.jenis_kelamin == 'Pria') {
        this.questions[10].options[1].label = 'Hasrat seksual menurun';
        this.questions[10].options[1].selected = false;
        this.questions[10].options[1].value = '17';
      } else {
        this.questions[10].options[1].label = 'Menstruasi tidak teratur atau mengalami Amenore';
        this.questions[10].options[1].selected = false;
        this.questions[10].options[1].value = '16';
      }
    },
    "questions.2.answer": function (val) {
      this.berat_badan = val;
      this.getIMT();
    },
    "questions.3.answer": function (val) {
      this.tinggi_badan = val;
      this.getIMT();
    },
    "questions.6.answer": function (val) {
      if (val != "0") {
        this.takut_or_obsesi = true;
        this.takut_input = val;
      } else {
        this.takut_input = "";
      }
    },
    "questions.7.answer": function (val) {
      if (val != "0") {
        this.takut_or_obsesi = true;
        this.obsesi_input = val;
      } else {
        this.obsesi_input = "";
        if (this.questions[6].answer == "0") {
          this.takut_or_obsesi = false;
          this.caraabnormal_input = [];
        }
      }
    },
    "takut_or_obsesi": function (val) {
      if (val) {
        this.questions[7].jump["5"] = "cara_abnormal";
        this.questions[7].jump["0"] = "cara_abnormal";
      } else {
        this.questions[7].jump["5"] = "lainnya";
        this.questions[7].jump["0"] = "lainnya";
      }
    },
    "questions.4.answer": function(val){
      if(val == "1"){
        this.sulitcontrol_input = "";
        this.questions[5].options[0].selected = false;
        this.questions[5].options[1].selected = false;
      }else if(val == "3"){
        this.questions[10].options.push(
          new ChoiceOption({
            label: "Makan lebih cepat dari biasanya",
            value: "15",
          }),
          new ChoiceOption({
            label: "Merasa jijik dengan diri sendiri, depresi, atau sangat bersalah ketika sesudah makan",
            value: "18"
          })
        );
      }
      this.sedikitberlebihan_input = val;
    },
    "questions.5.answer": function(val){
      if(val == "14"){
        this.sulitcontrol_input = val;
      }else{
        this.sulitcontrol_input = "";
      }
    },
    "questions.8.answer": function(val){
      if(val == []){
        this.questions[8].options[0].selected = false;
        this.questions[8].options[1].selected = false;
        this.turundrastis_input = "";
      }
      this.caraabnormal_input = val;
    },
    "questions.9.answer": function(val){
      if(val == "9"){
        this.turundrastis_input = val;
      }else{
        this.turundrastis_input = '';
      }
    },
    "questions.10.answer": function(val){
      this.gejalalain_input = val;
    },
  }
};
export default watch_mixin;