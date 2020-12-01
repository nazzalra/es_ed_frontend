import {
    QuestionModel,
    QuestionType,
    ChoiceOption,
  } from "@ditdot-dev/vue-flow-form";
var data_mixin = {
    data() {
        return {
            questions: [
                new QuestionModel({
                  id: "welcome",
                  title:
                    "Hallo! Selamat Datang di Aplikasi Identifikasi Gejala Gangguan Makan 😊",
                  subtitle:
                    "Aplikasi ini dapat membantu kamu apakah kamu mengalami gejala gangguan makan Anoreksia Nervosa, Bulimia Nervosa atau Gangguan Makan Berlebihan, semoga bermanfaat 🙏🏻",
                  type: QuestionType.SectionBreak,
                }),
                new QuestionModel({
                  id: "jenis_kelamin",
                  title: "Pilih Jenis Kelamin :",
                  type: QuestionType.Dropdown,
                  multiple: false,
                  placeholder: "Pria atau Wanita",
                  inline: true,
                  required: true,
                  options: [
                    new ChoiceOption({
                      label: "Pria",
                    }),
                    new ChoiceOption({
                      label: "Wanita",
                    }),
                  ],
                }),
                new QuestionModel({
                  id: "berat_badan",
                  title: "Berapa berat badanmu (kg)? ✍🏻",
                  type: QuestionType.Number,
                  required: true,
                  placeholder: "Tulis disini...",
                }),
                new QuestionModel({
                  id: "tinggi_badan",
                  title: "Berapa tinggi badanmu (cm)? ✍🏻",
                  type: QuestionType.Number,
                  required: true,
                  placeholder: "Tulis disini...",
                }),
        
                new QuestionModel({
                  id: "membatasi_atau_berlebihan",
                  title:
                    "Mengonsumsi makanan dengan porsi yang sangat sedikit atau berlebihan terkait dengan gejala Gangguan Makan.",
                  type: QuestionType.MultipleChoice,
                  subtitle: "Pilih diantara berikut :",
                  multiple: false,
                  required: true,
                  options: [
                    new ChoiceOption({
                      label: "Tidak makan atau makan dengan jumlah yang sangat sedikit",
                      value: "1",
                    }),
                    new ChoiceOption({
                      label:
                        "Makan berlebihan pada periode tertentu misalnya selama 2 jam",
                      value: "2",
                    }),
                    new ChoiceOption({
                      label: "Makan berlebihan sepanjang hari",
                      value: "3",
                    }),
                  ],
                  jump: {
                    1:"takut_gemuk",
                    2:"sulit_control_makan",
                    3:"sulit_control_makan"
                  },
                }),
                new QuestionModel({
                  id: "sulit_control_makan",
                  title: "Apakah anda sulit menahan diri dari makan atau sulit berhenti makan begitu sudah mulai?🤔",
                  type: QuestionType.MultipleChoice,
                  required: true,
                  options: [
                    new ChoiceOption({
                      label: "Ya",
                      value: "14",
                    }),
                    new ChoiceOption({
                      label: "Tidak",
                      value: "0",
                    }),
                  ],
                }),
                new QuestionModel({
                  id: "takut_gemuk",
                  title:
                    "Apakah anda memiliki rasa takut yang intens terhadap kenaikan berat badan?",
                  type: QuestionType.MultipleChoice,
                  required: true,
                  options: [
                    new ChoiceOption({
                      label: "Ya",
                      value: "4",
                    }),
                    new ChoiceOption({
                      label: "Tidak",
                      value: "0",
                    }),
                  ],
                }),
                new QuestionModel({
                  id: "obsesi_bentuk_tubuh",
                  title:
                    "Apakah anda sangat terobsesi dengan bentuk tubuh dan berat badan?",
                  type: QuestionType.MultipleChoice,
                  required: true,
                  options: [
                    new ChoiceOption({
                      label: "Ya",
                      value: "5",
                    }),
                    new ChoiceOption({
                      label: "Tidak",
                      value: "0",
                    }),
                  ],
                  jump:{
                    "5":"lainnya",
                    "0":"lainnya"
                  }
                }),
                new QuestionModel({
                  id: "cara_abnormal",
                  title: "Apakah anda pernah melakukan cara berikut untuk menurunkan berat badan anda?",
                  subtitle:"Anda dapat memilih satu atau lebih. Tekan enter untuk lewati",
                  type: QuestionType.MultipleChoice,
                  required: false,
                  multiple: true,
                  options: [
                    new ChoiceOption({
                      label: "Memuntahkan makanan dengan sengaja",
                      value: "10",
                    }),
                    new ChoiceOption({
                      label: "Mengkonsumsi berbagai macam obat diet atau obat yang mengstimulasi buang air kecil atau buang air besar",
                      value: "11",
                    }),
                    new ChoiceOption({
                      label: "Olahraga berlebihan",
                      value: "12",
                    }),
                  ],
                  jump:{
                    "10":"turun_drastis",
                    "11":"turun_drastis",
                    "12":"turun_drastis",
                    "":"lainnya"
                  }
                }),
                new QuestionModel({
                  id: "turun_drastis",
                  title: "Apakah berat badan anda turun drastis?",
                  type: QuestionType.MultipleChoice,
                  required: true,
                  multiple: false,
                  options: [
                    new ChoiceOption({
                      label: "Ya",
                      value: "9",
                    }),
                    new ChoiceOption({
                      label: "Tidak",
                      value: "0",
                    }),
                  ],
                }),
                new QuestionModel({
                  id: "lainnya",
                  title:"Apakah anda merasa atau mengalami hal-hal dibawah ini?",
                  subtitle:"Tekan enter untuk lewati",
                  type: QuestionType.MultipleChoice,
                  required: false,
                  multiple: true,
                  options: [
                    new ChoiceOption({
                      label: "Merasa khawatir atau malu makan di tempat umum",
                      value: "13",
                    }),
                    new ChoiceOption({
                      label: "Menstruasi tidak teratur atau mengalami Amenore",
                      value: "16",
                    }),
                  ],
                }),
              ],
        }
    }
}

export default data_mixin;