// window.onload = function() {
//   var s1 = new Sel('div1');
//   // 第一级
//   s1.add('0', ['1', '2', '3']);

//   //第二级
//   s1.add('0_0', ['1_1', '1_2', '1_3']);
//   s1.add('0_1', ['2_1', '2_2', '2_3']);
//   s1.add('0_2', ['3_1', '3_2', '3_3']);

//   //第三级
//   s1.add('0_0_0', ['1_1_1', '1_1_2', '1_1_3']);
//   s1.add('0_0_1', ['1_2_1', '1_2_2', '1_2_3']);
//   s1.add('0_0_2', ['1_3_1', '1_3_2', '1_3_3']);

//   s1.add('0_1_0', ['2_1_1', '2_1_2', '2_1_3']);
//   s1.add('0_1_1', ['2_2_1', '2_2_2', '2_2_3']);
//   s1.add('0_1_2', ['2_3_1', '2_3_2', '2_3_3']);

//   s1.add('0_2_0', ['3_1_1', '3_1_2', '3_1_3']);
//   s1.add('0_2_1', ['3_2_1', '3_2_2', '3_2_3']);
//   s1.add('0_2_2', ['3_3_1', '3_3_2', '3_3_3']);

//   s1.init(3);
// };

// function Sel(id) {
//   this.oParent = document.getElementById(id);
//   this.data = {};
//   this.aSel = "";
// }

// Sel.prototype = {

//   init: function(num){

//     for(var i=1; i<=num; i++) {
//       var oSel = document.createElement('select');
//       var oPt = document.createElement('option');
//       oPt.innerHTML = 'default';
//       oSel.appendChild(oPt);
//       this.oParent.appendChild(oSel);
//     }

//     this.first();
//   },

//   add: function(key, value) {
//     this.data[key] = value;
//   },

//   first: function() {
//     var arr = this.data['0'];

//     for(var i=0; i<arr.length; i++) {
//       var oPt = document.createElement('option');
//       oPt.innerHTML = arr[i];
//       this.aSel[0].appendChild(oPt);
//     }

//   }
// }