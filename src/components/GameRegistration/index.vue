<template>
  <div class="GameRegistration" id="GameRegistration">
    <ValidationObserver ref="form" v-slot="{ invalid, reset }">
      <br v-if="isFinishedRegistration" />
      <h2 v-if="isFinishedRegistration">Регистрация завершена</h2>
      <br v-if="isFinishedRegistration" />
      <form
        class="GameRegistration__form"
        @submit.prevent="onSubmit"
        v-if="!isFinishedRegistration"
      >
        <Splicer>
          <span>Регистрация</span>
          <img
            class="Splicer__applyIcon"
            v-if="!isMobileSize"
            src="../../assets/icons/decor_splicer.png"
            alt="decoration"
          />
        </Splicer>
        <div class="GameRegistration__formContent">
          <span
            class="GameRegistration__blockContentTitle GameRegistration__blockContentTitle-duoBlock"
          >
            ФИО
          </span>
          <div
            class="GameRegistration__blockContent GameRegistration__FIOBlock"
          >
            <ValidationProvider
              mode="lazy"
              tag="div"
              name="surname"
              rules="required"
              v-slot="{ errors }"
              class="ValidationProvider"
            >
              <input
                v-model="model.surname"
                type="text"
                placeholder="Фамилия*"
              />
              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              mode="lazy"
              tag="div"
              name="name"
              rules="required"
              v-slot="{ errors }"
              class="ValidationProvider"
            >
              <input v-model="model.name" type="text" placeholder="Имя*" />
              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              tag="div"
              name="lastName"
              v-slot="{ errors }"
              class="ValidationProvider"
            >
              <input
                v-model="model.lastName"
                type="text"
                placeholder="Отчетство"
              />
              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <span
            class="GameRegistration__blockContentTitle GameRegistration__blockContentTitle-duoBlock"
          >
            Контактные данные
          </span>
          <div
            class="GameRegistration__blockContent GameRegistration__techInfo"
          >
            <div class="GameRegistration__techInfo__Phone">
              <ValidationProvider
                tag="div"
                v-slot="{ errors }"
                rules="required|length:13"
                name="phone"
                class="ValidationProvider"
              >
                <input
                  v-model="model.phone"
                  placeholder="+375__ __ __*"
                  @click="phoneClick"
                  @blur="phoneBlur"
                  type="text"
                />
                <span class="errorContainer">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <ValidationProvider
              tag="div"
              class="ValidationProvider"
              v-slot="{ errors }"
              rules="required|email"
              name="email"
            >
              <input v-model="model.email" placeholder="E-mail*" type="text" />

              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              tag="div"
              class="ValidationProvider"
              v-slot="{ errors }"
              rules="required"
              name="address"
            >
              <input
                v-model="model.address"
                placeholder="Адрес проживания*"
                type="text"
              />

              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              tag="div"
              rules="required"
              v-slot="{ validate, errors }"
              :name="'itemName'"
              class="ValidationProvider"
              v-if="isMobileSize"
            >
              <CustomSelector
                v-model="model.shop"
                placeholder="Выберите торговую сеть"
                :options="['Гиппо', 'Green', 'Виталюр']"
              />
              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              tag="div"
              class="ValidationProvider"
              rules="required|mimes:image/jpeg,image/png|size:40000"
              v-slot="{ validate, errors }"
              name="fileCheck"
              v-if="isMobileSize"
            >
              <div class="customFileInput">
                <input
                  type="file"
                  @change="
                    validate($event);
                    onFileChange($event);
                  "
                  placeholder="Загрузить картинку"
                  accept="image/jpeg,image/png"
                />
                <span class="customFileInput__fileName">
                  {{
                    model.file_name ? model.file_name : "Загрузить фото чека*"
                  }}
                </span>
                <div class="customFileInput__helper">
                  <img src="./../../assets/icons/camera.svg" alt="" />
                </div>
              </div>
              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <div v-if="!isMobileSize" class="GameRegistration__blockContent GameRegistration__blockContent-deskShopCheck">
            <ValidationProvider
              tag="div"
              rules="required"
              v-slot="{ validate, errors }"
              :name="'itemName'"
              class="ValidationProvider"
            >
              <CustomSelector
                v-model="model.shop"
                placeholder="Выберите торговую сеть"
                :options="['Гиппо', 'Green', 'Виталюр']"
              />
              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              tag="div"
              class="ValidationProvider"
              rules="required|mimes:image/jpeg,image/png|size:40000"
              v-slot="{ validate, errors }"
              name="fileCheck"
            >
              <div class="customFileInput">
                <input
                  type="file"
                  @change="
                    validate($event);
                    onFileChange($event);
                  "
                  placeholder="Загрузить картинку"
                  accept="image/jpeg,image/png"
                />
                <span class="customFileInput__fileName">
                  {{
                    model.file_name ? model.file_name : "Загрузить фото чека*"
                  }}
                </span>
                <div class="customFileInput__helper">
                  <img src="./../../assets/icons/camera.svg" alt="" />
                </div>
              </div>
              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="GameRegistration__RulesBlock">
          <div class="GameRegistration__messageForRequired">
            *поля, обязательные для заполнения
          </div>
          <ValidationProvider
            tag="div"
            :rules="{ required: { allowFalse: false } }"
            v-slot="{ errors }"
            name="rule1"
            class="ValidationProvider"
          >
            <div class="CustomCheckbox">
              <input type="checkbox" v-model="model.rule1" />
              <div
                :class="{
                  CustomCheckbox__pseudoInput: true,
                  active: model.rule1,
                }"
              >
                <span v-if="model.rule1">√</span>
                <!-- <img src="" alt="TEST" /> -->
              </div>
              <span
                >Регистрируясь, Вы подтверждаете свое <br class="no-desktop" />
                согласие на участие в рекламной акции.</span
              >
              <span class="errorContainer">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
          <ValidationProvider
            tag="div"
            :rules="{ required: { allowFalse: false } }"
            v-slot="{ errors }"
            name="rule2"
            class="ValidationProvider"
          >
            <div class="CustomCheckbox">
              <input type="checkbox" v-model="model.rule2" />
              <div
                :class="{
                  CustomCheckbox__pseudoInput: true,
                  active: model.rule2,
                }"
              >
                <span v-if="model.rule2">√</span>
                <!-- <img src="" alt="test" /> -->
              </div>
              <span
                >Регистрируясь, Вы подтверждаете, что изучили
                <br class="no-desktop" />
                и согласны с
                <a href="rules.pdf" target="_blank"
                  >правилами рекламной акции.</a
                ></span
              >
              <span class="errorContainer">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>

        <button type="submit" class="btn" :disabled="invalid || !model.file">
          Зарегистрироваться
        </button>
      </form>
    </ValidationObserver>
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated  animate__fadeInDown"
      leave-active-class="animate__animated  animate__fadeOut"
    >
      <div class="GameRegistration__modal" v-if="finishedMessage">
        <span>
          <!-- {{
            finishedMessage === "apply"
              ? "Спасибо за регистрацию, с вами свяжутся в ближайшее время"
              : "Произошла ошибка при регистрации, попробуйте позже"
          }} -->
          {{ finishedMessage }}
        </span>
        <button @click="finishedMessage = null">X</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import {
  required,
  email,
  alpha,
  min,
  length,
  image,
  size,
  mimes,
  is,
  min_value,
} from "vee-validate/dist/rules";
import axios from "axios";

import CustomSelector from "../CustomSelector.vue";
import Splicer from "../Splicer.vue";
import "./style.less";
import { takeDatePeriodes, periodOfNumbers } from "../../helpers";
import { getGoods, postRegistration } from "../../API";

extend("required", {
  ...required,
  message: "Обязательное поле",
});
extend("email", {
  ...email,
  message: "Указан невалидный адрес электронной почты",
});

extend("alpha", alpha);
extend("size", { ...size, message: "картинка имеет слишком большой вес" });
extend("min", min);
extend("min_value", {
  ...min_value,
  message: "Минимальная стоимость 1 рубль",
});
extend("is", {
  ...is,
  message: "Требуется соглашения с правилами",
});
extend("image", { ...image, message: "Требуется формат png, jpg, jpeg" });
extend("mimes", { ...mimes, message: "Требуется формат png, jpg, jpeg" });

extend("length", {
  ...length,
  message: (fieldName, placeholders) => {
    return `Номер в формате +37529XXXXXXX`;
  },
});

export default {
  name: "GameRegistration",
  components: {
    ValidationProvider,
    ValidationObserver,
    CustomSelector,
    Splicer,
  },
  props: {},

  data() {
    return {
      finishedMessage: null,
      formErrors: [],
      inputErrors: {},
      items: [],
      model: {
        name: null,
        surname: null,
        email: null,
        lastName: null,
        file: null,
        file_name: null,
        phone: null,
        shop: null,
        rule1: false,
        rule2: false,
      },
    };
  },
  computed: {
    isFinishedRegistration() {
      const finishDate = new Date("2021-03-31");
      return finishDate < new Date();
    },
    febrDays() {
      return periodOfNumbers(28);
    },
    isMobileSize() {
      return document.documentElement.clientWidth < 1025;
    },
    modItems() {
      return this.items.map((el) => ({ label: el.name, value: String(el.id) }));
    },
  },
  methods: {
    phoneBlur() {
      if (this.model.phone === "+375") this.model.phone = "";
    },
    phoneClick() {
      if (this.model.phone === "" || this.model.phone === null)
        this.model.phone = "+375";
    },
    isNumber: function (evt, cost) {
      if (cost !== null && cost.includes(".") && evt.key === ".")
        evt.preventDefault();

      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    addItem(e) {
      e.preventDefault();
      this.model.choosedItems.push({
        name: null,
        count: "1",
        cost: null,
      });
    },
    reset() {
      this.model["name"] = null;
      this.model["surname"] = null;
      this.model["lastName"] = null;
      this.model["email"] = null;
      this.model["file"] = null;
      this.model["file_name"] = null;
      this.model["phone"] = null;
      this.model["shop"] = null;
      this.model["rule1"] = false;
      this.model["rule2"] = false;
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
    },
    submit() {
      console.log(this.$formulate);
    },
    customReset() {
      console.log(this.$refs.form);
      this.$refs.form.reset();
    },
    custom(context) {
      if (context.value === "yes") {
        return {
          on: ["input"],
        };
      }

      return { on: ["change"] };
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      if (files[0].type !== "image/jpeg" && files[0].type !== "image/png") {
        e.target.value = null;
        this.model.file = null;
        this.model.file_name = null;
        return;
      }

      this.model.file = files[0];
      this.model.file_name = this.sliced(this.model.file.name);
    },
    sliced(value) {
      let sliced = value.slice(0, 30);
      if (sliced.length < value.length) {
        sliced += "...";
      }
      return sliced;
    },
    onSubmit() {
      let form = new FormData();

      const {
        model: {
          name,
          surname,
          email,
          file,
          lastName,
          phone,
          day,
          month,
          address,
          shop
        },
      } = this;

      // choosedItems.forEach((value, index) => {
      //   form.append(`product[${index}]`, value.name);
      // });
      // choosedItems.forEach((value, index) => {
      //   form.append(`count[${index}]`, value.count);
      // });
      // choosedItems.forEach((value, index) => {
      //   form.append(`cost[${index}]`, value.cost);
      // });

      form.append("name", name);
      form.append("email", email);
      form.append("file", file);
      form.append("phone", phone);
      form.append("purchase_date", day + " " + month);
      form.append("surname", surname);
      form.append("day", day);
      form.append("address", address);
      form.append("lastName", lastName);
      form.append("shop", shop);


      axios
        .post(postRegistration, form)
        .then(({ data }) => {
          this.finishedMessage = data.data.message;
          this.reset();
        })
        .catch((error) => {
          if (error.response) {
            this.finishedMessage = error.response.data.message;
          } else {
            this.finishedMessage = "Произошла ошибка, попробуйте позже";
          }
        });
    },
  },
  mounted() {
    // axios.post(getGoods).then(({ data }) => (this.items = [...data.data]));
  },
};
</script>
