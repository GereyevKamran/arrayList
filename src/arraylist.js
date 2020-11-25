function arrayList() {
  this.array = [];
  this.size = 0;
}

arrayList.prototype.init = function (array) {
  this.array = array;
  this.size = array.length;
};

arrayList.prototype.myPush = function (arg) {
  // this.size ++;
  this.array[this.array.length] = arg;
  this.size++;
  // this.size

  return this.size;
};

arrayList.prototype.getSize = function () {
  return this.size;
};

arrayList.prototype.myPop = function () {
  const arg = this.array[this.array.length - 1];
  this.array.length = this.array.length - 1;

  this.size--;

  return arg;
};

arrayList.prototype.myShift = function () {
  const arg = this.array[0];
  for (let i = 0; i < this.array.length; i++) {
    this.array[i] = this.array[i + 1];
  }

  this.array.length = this.array.length - 1;
  this.size = this.array.length;

  return arg;
};

arrayList.prototype.myUnshift = function (arg) {
  for (let i = this.array.length; i > 0; i--) {
    this.array[i] = this.array[i - 1];
  }
  this.array[0] = arg;

  return ++this.size;
};

arrayList.prototype.myReverse = function () {
  const reversed = [];
  for (let i = this.array.length - 1; i >= 0; i--) {
    reversed[reversed.length] = this.array[i];
  }
  this.init(reversed);

  return reversed;
};

arrayList.prototype.myTostring = function () {
  let string = "[";
  for (let i = 0; i < this.array.length; i++) {
    if (i === this.size - 1) {
      string += this.array[i];
    } else {
      string += this.array[i] + ", ";
    }
  }

  string += "]";

  return string;
};

arrayList.prototype.mySlice = function (start, end) {
  const a = [];

  for (let i = start; i < end; i++) {
    a[a.length] = this.array[i];
  }
  this.init(a);

  return a;
};

arrayList.prototype.myClear = function () {
  this.array = [];
  this.size = 0;
};

const aList = new arrayList();
aList.init([1, 2, 3, 4, 5, 6]);
console.log(aList.array, aList.size);
// aList.getSize();
// console.log( aList.size);
// aList.myPush(10);
// console.log(aList.myPush(10), 'lll', aList.array, aList.size);
// aList.myPop();
// console.log(aList.array, aList.size);
// aList.myShift();
// console.log(aList.array, aList.size);
// aList.myUnshift(7);
// console.log(aList.array, aList.size);
// aList.myReverse();
// console.log(aList.array, aList.size);
// console.log(aList.myTostring());
// console.log(aList.mySlice(1,2));
console.log(aList.myClear);

module.exports = arrayList;
