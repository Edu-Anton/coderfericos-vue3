<template>
  <div class="numeric-stepper__container">
    <button class="numeric-stepper__btn">-</button>
    <div class="numeric-stepper__text mx-3">1</div>
    <button class="numeric-stepper__btn">+</button>
  </div>
</template>

<script>
export default {
    name: 'ItemCount'
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