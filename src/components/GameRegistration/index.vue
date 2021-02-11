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
        <h2>Регистрация</h2>
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
              <ValidationProvider
                tag="div"
                name="operator"
                rules="required"
                v-slot="{ errors }"
                class="ValidationProvider"
              >
                <CustomSelector
                  v-model="model.operator"
                  :errors="errors"
                  :options="selectArray"
                />
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
          </div>
          <span class="GameRegistration__blockContentTitle">
            Информация о покупке
          </span>
          <div
            class="GameRegistration__blockContent GameRegistration__checkInfo"
          >
            <div class="GameRegistration__checkInfo__Date">
              <ValidationProvider
                tag="div"
                name="day"
                rules="required"
                v-slot="{ errors }"
                class="ValidationProvider"
              >
                <CustomSelector
                  v-model="model.day"
                  :errors="errors"
                  :options="febrDays"
                />
              </ValidationProvider>
              <ValidationProvider
                tag="div"
                name="month"
                rules="required"
                v-slot="{ errors }"
                class="ValidationProvider"
              >
                <input v-model="model.month" type="text" disabled />

                <span class="errorContainer">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <ValidationProvider
              tag="div"
              class="ValidationProvider ValidationProvider-mlS"
              v-slot="{ errors }"
              rules="required"
              name="checkNumber"
            >
              <input
                v-model="model.checkNumber"
                placeholder="Номер чека*"
                type="text"
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
                <div class="customFileInput__helper">?</div>
              </div>
              <span class="errorContainer">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <span class="GameRegistration__blockContentTitle">
          Акционные товары
        </span>
        <div class="GameRegistration__ItemBlock">
          <ul class="GameRegistration__ItemList">
            <li
              :style="{ zIndex: 500 - index, position: 'relative' }"
              v-for="(item, index) in model.choosedItems"
              :key="index"
            >
              <ValidationProvider
                tag="div"
                rules="required"
                v-slot="{ validate, errors }"
                :name="'itemName' + index"
                class="GameRegistration__ItemList__name ValidationProvider"
              >
                <CustomSelector
                  v-model="item.name"
                  placeholder="Выберите товар"
                  :maxLetters="isMobileSize ? 50 : false"
                  :options="modItems"
                />
                <span class="errorContainer">{{ errors[0] }}</span>
              </ValidationProvider>
              <div class="GameRegistration__ItemListCountCost">
                <ValidationProvider
                  tag="div"
                  rules="required"
                  v-slot="{ validate, errors }"
                  :name="'itemCount' + index"
                  class="GameRegistration__ItemList__count ValidationProvider"
                >
                  <CustomSelector
                    v-model="item.count"
                    :errors="errors"
                    :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                  />
                </ValidationProvider>
                <ValidationProvider
                  tag="div"
                  rules="required|min_value:1"
                  v-slot="{ validate, errors }"
                  :name="'itemCost' + index"
                  class="GameRegistration__ItemList__cost ValidationProvider"
                >
                  <input
                    type="text"
                    v-model="item.cost"
                    placeholder="Стоимость товара*"
                    @keypress="isNumber($event, item.cost)"
                  />
                  <span class="errorContainer">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </li>
          </ul>
          <button class="GameRegistration__ItemBlockSbm" @click="addItem">
            +
          </button>
        </div>
        <div class="GameRegistration__RulesBlock">
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
                <a href="rules_new.pdf" target="_blank"
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
  max,
  length,
  number,
  image,
  size,
  mimes,
  is,
  min_value,
} from "vee-validate/dist/rules";
import axios from "axios";

import CustomSelector from "../CustomSelector.vue";
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
  },
  props: {},

  data() {
    return {
      finishedMessage: null,
      formErrors: [],
      inputErrors: {},
      selectArray: ["МТС", "А1", "Life"],
      items: [],
      model: {
        name: null,
        surname: null,
        email: null,
        checkNumber: null,
        file: null,
        file_name: null,
        phone: null,
        operator: "МТС",
        day: "1",
        month: "февраля 2021",
        choosedItems: [
          {
            name: null,
            count: "1",
            cost: null,
          },
        ],
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
      this.model["email"] = null;
      this.model["checkNumber"] = null;
      this.model["file"] = null;
      this.model["file_name"] = null;
      this.model["phone"] = null;
      this.model["operator"] = "МТС";
      this.model["day"] = "1";
      this.model["choosedItems"] = [{ cost: null, count: "1", name: null }];
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
          checkNumber,
          file,
          file_name,
          phone,
          operator,
          day,
          month,
          choosedItems,
        },
      } = this;

      choosedItems.forEach((value, index) => {
        form.append(`product[${index}]`, value.name);
      });
      choosedItems.forEach((value, index) => {
        form.append(`count[${index}]`, value.count);
      });
      choosedItems.forEach((value, index) => {
        form.append(`cost[${index}]`, value.cost);
      });

      form.append("name", name);
      form.append("email", email);
      form.append("check_number", checkNumber);
      form.append("file", file);
      form.append("phone", phone);
      form.append("purchase_date", day + " " + month);
      form.append("surname", surname);
      form.append("day", day);
      form.append("operator", operator);
      form.append("address", "-");

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
    axios.post(getGoods).then(({ data }) => (this.items = [...data.data]));
  },
};
</script>
