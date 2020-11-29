const { assert } = require("chai");
const arrayList = require("../arraylist.js");

describe("array method", () => {
  describe("init", () => {
    const aList = new arrayList();
    const testData = [
      {
        initalArray: [1, 2, 3],
        expectedSize: 3,
        expectedString: "[1, 2, 3]",
      },
      {
        initalArray: [1, 2, 3, 4],
        expectedSize: 4,
        expectedString: "[1, 2, 3, 4]",
      },
      {
        initalArray: [1, 2, 3, 4, 5, 6],
        expectedSize: 6,
        expectedString: "[1, 2, 3, 4, 5, 6]",
      },
    ];
    testData.forEach(({ initalArray, expectedSize, expectedString }) => {
      it(`should return size ${expectedSize} and ${expectedString}`, () => {
        aList.init(initalArray);

        assert.deepEqual(aList.getSize(), expectedSize);

        assert.strictEqual(aList.myTostring(), expectedString);
      });
    });
  });

  describe("myPop", () => {
    const aList = new arrayList();
    const testData = [
      {
        initalArray: [1, 2, 3],
        expectedSize: 3,
        expectedString: "[1, 2]",
      },
      {
        initalArray: [1, 2, 3, 4],
        expectedSize: 4,
        expectedString: "[1, 2, 3]",
      },
      {
        initalArray: [1, 2, 3, 4, 5, 6],
        expectedSize: 6,
        expectedString: "[1, 2, 3, 4, 5]",
      },
    ];
    testData.forEach(({ initalArray, expectedSize, expectedString }) => {
      it(`should return size ${expectedSize} and ${expectedString}`, () => {
        aList.init(initalArray);

        assert.deepEqual(aList.myPop(), expectedSize);

        assert.strictEqual(aList.myTostring(), expectedString);
      });
    });
  });

  describe("myPush", () => {
    const aList = new arrayList();
    const testData = [
      {
        arg: 11,
        initalArray: [1, 2, 3],
        expectedSize: 4,
        expectedString: "[1, 2, 3, 11]",
      },
      {
        arg: 11,
        initalArray: [1, 2, 3, 4],
        expectedSize: 5,
        expectedString: "[1, 2, 3, 4, 11]",
      },
      {
        arg: 11,
        initalArray: [1, 2, 3, 4, 5, 6],
        expectedSize: 7,
        expectedString: "[1, 2, 3, 4, 5, 6, 11]",
      },
    ];
    testData.forEach(({ arg, initalArray, expectedSize, expectedString }) => {
      it(`should return size ${expectedSize} and ${expectedString}`, () => {
        aList.init(initalArray);

        assert.deepEqual(aList.myPush(arg), expectedSize);

        assert.strictEqual(aList.myTostring(), expectedString);
      });
    });
  });

  describe("myShift", () => {
    const aList = new arrayList();
    const testData = [
      {
        initalArray: [1, 2, 3],
        expectedReturn: 1,
        expectedString: "[2, 3]",
      },
      {
        initalArray: [1, 2, 3, 4],
        expectedReturn: 1,
        expectedString: "[2, 3, 4]",
      },
      {
        initalArray: [1, 2, 3, 4, 5, 6],
        expectedReturn: 1,
        expectedString: "[2, 3, 4, 5, 6]",
      },
    ];
    testData.forEach(({ initalArray, expectedReturn, expectedString }) => {
      it(`should return size ${expectedReturn} and ${expectedString}`, () => {
        aList.init(initalArray);

        assert.deepEqual(aList.myShift(), expectedReturn);

        assert.strictEqual(aList.myTostring(), expectedString);
      });
    });
  });

  describe("myUnshift", () => {
    const aList = new arrayList();
    const testData = [
      {
        arg: 22,
        initalArray: [1, 2, 3],
        expectedSize: 4,
        expectedString: "[22, 1, 2, 3]",
      },
      {
        arg: 22,
        initalArray: [1, 2, 3, 4],
        expectedSize: 5,
        expectedString: "[22, 1, 2, 3, 4]",
      },
      {
        arg: 22,
        initalArray: [1, 2, 3, 4, 5, 6],
        expectedSize: 7,
        expectedString: "[22, 1, 2, 3, 4, 5, 6]",
      },
    ];
    testData.forEach(({ arg, initalArray, expectedSize, expectedString }) => {
      it(`should return size ${expectedSize} and ${expectedString}`, () => {
        aList.init(initalArray);

        assert.deepEqual(aList.myUnshift(arg), expectedSize);

        assert.strictEqual(aList.myTostring(), expectedString);
      });
    });
  });

  describe("myReverse", () => {
    const aList = new arrayList();
    const testData = [
      {
        initalArray: [1, 2, 3],
        expectedReturn: [3, 2, 1],
        expectedString: "[3, 2, 1]",
      },
      {
        initalArray: [1, 2, 3, 4],
        expectedReturn: [4, 3, 2, 1],
        expectedString: "[4, 3, 2, 1]",
      },
      {
        initalArray: [1, 2, 3, 4, 5, 6],
        expectedReturn: [6, 5, 4, 3, 2, 1],
        expectedString: "[6, 5, 4, 3, 2, 1]",
      },
    ];
    testData.forEach(({ initalArray, expectedReturn, expectedString }) => {
      it(`should return size ${expectedReturn} and ${expectedString}`, () => {
        aList.init(initalArray);

        assert.deepEqual(aList.myReverse(), expectedReturn);

        assert.strictEqual(aList.myTostring(), expectedString);
      });
    });
  });

  describe("mySlice", () => {
    const aList = new arrayList();
    const testData = [
      {
        arg1: 0,
        arg2: 2,
        initalArray: [1, 2, 3],
        expectedReturn: [1, 2],
        expectedString: "[1, 2]",
      },
      {
        arg1: 1,
        arg2: 2,
        initalArray: [1, 2, 3, 4],
        expectedReturn: [2],
        expectedString: "[2]",
      },
      {
        arg1: 1,
        arg2: 4,
        initalArray: [1, 2, 3, 4, 5, 6],
        expectedReturn: [2, 3, 4],
        expectedString: "[2, 3, 4]",
      },
    ];
    testData.forEach(
      ({ arg1, arg2, initalArray, expectedReturn, expectedString }) => {
        it(`should return size ${expectedReturn} and ${expectedString}`, () => {
          aList.init(initalArray);

          assert.deepEqual(aList.mySlice(arg1, arg2), expectedReturn);

          assert.strictEqual(aList.myTostring(), expectedString);
        });
      }
    );
  });

  describe("myClear", () => {
    const aList = new arrayList();
    const testData = [
      {
        initalArray: [1, 2, 3],
        expectedSize: 0,
        expectedString: "[]",
      },
      {
        initalArray: [1, 2, 3, 4],
        expectedSize: 0,
        expectedString: "[]",
      },
      {
        initalArray: [1, 2, 3, 4, 5, 6],
        expectedSize: 0,
        expectedString: "[]",
      },
    ];
    testData.forEach(({ initalArray, expectedSize, expectedString }) => {
      it(`should return size ${expectedSize} and ${expectedString}`, () => {
        aList.init(initalArray);
        aList.myClear();

        assert.deepEqual(aList.getSize(), expectedSize);

        assert.strictEqual(aList.myTostring(), expectedString);
      });
    });
  });
});
