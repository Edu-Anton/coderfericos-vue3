<template>
  <div class="numeric-stepper__container">
    <button class="numeric-stepper__btn" @click="substractCounter">-</button>
    <div class="numeric-stepper__text mx-3">
        <!-- <input class="numeric-stepper__input" type="text" v-model="counter"> -->
        <input class="numeric-stepper__input" type="text" :value="counter">
    </div>
    <button class="numeric-stepper__btn" @click="addCounter">+</button>
  </div>
</template>

<script>
export default {
    name: 'ItemCount',
    // data () {
    //     return {
    //         counter: 1
    //     }
    // },
    props: {
      counter: {
        type: Number,
        default: 1
      }
    },
    methods: {
        addCounter () {
          // this.counter = this.counter + 1;
          this.$emit('addCounter')
        },
        substractCounter () {
            if (this.counter > 1) {
                // this.counter = this.counter - 1;
            } else {
                alert('Debe  seleccionar al menos un producto.')
            }
        }

    }
}
</script>

<style>
.counter__on-add-btn {
  background-color: #ff324d;
  color: #fff;
  padding: 15px 20px;
}

.numeric-stepper__container {
  display: flex;
}

.numeric-stepper__btn {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: #999;
}

.numeric-stepper__input {
  width: 50px;
  height: 30px;
  text-align: center;
  outline: none;
  border: solid 0.5px #ddd;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 0.9rem;
}

.numeric-stepper__text {
  width: 50px;
  height: 30px;
  border: solid 0.5px #ddd;
  text-align: center;
}

.numeric-stepper__input:focus {
  outline: none;
  border: solid 0.5px #ddd;
}
</style>