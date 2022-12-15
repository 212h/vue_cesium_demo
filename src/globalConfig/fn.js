import Vue from "vue";
//手机号正则表达式
Vue.prototype.globalPhoneReg = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
//固定电话号码正则表达式
Vue.prototype.globalfixedPhoneReg = /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/;
