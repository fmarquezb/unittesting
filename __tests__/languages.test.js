const unitTestingTask = require("../unitTestingTask.js");
const be = require("../lang/be.js");
const cs = require("../lang/cs.js");
const kk = require("../lang/kk.js");
const pl = require("../lang/pl.js");
const ru = require("../lang/ru.js");
const tr = require("../lang/tr.js");
const tt = require("../lang/tt.js");
const uk = require("../lang/uk.js");

let testDate = new Date("June 17, 2022 17:24:12 GMT-0500");

describe("Date formating be", () => {
  beforeAll(() => unitTestingTask.lang("be", be));
  test("formats date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("чэрвень");
  });
  test("formats date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("чэр");
  });
  test("formats date to AM/PM", () => {
    expect(unitTestingTask("A", testDate)).toBe("вечара");
  });
  test("formats date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("пятніца");
  });
});

describe("Date formating cs", () => {
  beforeAll(() => unitTestingTask.lang("cs", cs));
  test("formats date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("červen");
  });
  test("formats date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("čvn");
  });
  test("formats date to AM/PM", () => {
    expect(unitTestingTask("A", testDate)).toBe("odpoledne");
  });
  test("formats date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("pátek");
  });
});

describe("Date formating kk", () => {
  beforeAll(() => unitTestingTask.lang("kk", kk));
  test("formats date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("маусым");
  });
  test("formats date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("маус");
  });
  test("formats date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("жұма");
  });
});

describe("Date formating pl", () => {
  beforeAll(() => unitTestingTask.lang("pl", pl));
  test("formats date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("czerwiec");
  });
  test("formats date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("cze");
  });
  test("formats date to AM/PM", () => {
    expect(unitTestingTask("A", testDate)).toBe("");
  });
  test("formats date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("piątek");
  });
});

describe("Date formating ru", () => {
  beforeAll(() => unitTestingTask.lang("ru", ru));
  test("formats date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("июнь");
  });
  test("formats date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("июнь");
  });
  test("formats date to AM/PM", () => {
    expect(unitTestingTask("A", testDate)).toBe("вечера");
  });
  test("formats date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("пятница");
  });
});

describe("Date formating tr", () => {
  beforeAll(() => unitTestingTask.lang("tr", tr));
  test("formats date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("Haziran");
  });
  test("formats date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("Haz");
  });
  test("formats date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("Cuma");
  });
});

describe("Date formating tt", () => {
  beforeAll(() => unitTestingTask.lang("tt", tt));
  test("formats date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("июнь");
  });
  test("formats date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("июнь");
  });
  test("formats date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("җомга");
  });
});

describe("Date formating uk", () => {
  beforeAll(() => unitTestingTask.lang("uk", uk));
  test("formats date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("червень");
  });
  test("formats date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("черв");
  });
  test("formats date to AM/PM", () => {
    expect(unitTestingTask("A", testDate)).toBe("вечора");
  });
  test("formats date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("п’ятниця");
  });
});
