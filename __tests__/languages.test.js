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

describe("The language is set to be", () => {
  beforeAll(() => unitTestingTask.lang("be", be));
  it("should format date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("чэрвень");
  });
  it("should format date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("чэр");
  });
  it("should format date to AM/PM", () => {
    expect(unitTestingTask("A", testDate)).toBe("вечара");
  });
  it("should format date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("пятніца");
  });
});

describe("The language is set to cs", () => {
  beforeAll(() => unitTestingTask.lang("cs", cs));
  it("should format date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("červen");
  });
  it("should format date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("čvn");
  });
  it("should format date to AM/PM", () => {
    expect(unitTestingTask("A", testDate)).toBe("odpoledne");
  });
  it("should format date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("pátek");
  });
});

describe("The language is set to kk", () => {
  beforeAll(() => unitTestingTask.lang("kk", kk));
  it("should format date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("маусым");
  });
  it("should format date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("маус");
  });
  it("should format date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("жұма");
  });
});

describe("The language is set to pl", () => {
  beforeAll(() => unitTestingTask.lang("pl", pl));
  it("should format date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("czerwiec");
  });
  it("should format date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("cze");
  });
  it("should format date to AM/PM", () => {
    expect(unitTestingTask("A", testDate)).toBe("");
  });
  it("should format date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("piątek");
  });
});

describe("The language is set to ru", () => {
  beforeAll(() => unitTestingTask.lang("ru", ru));
  it("should format date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("июнь");
  });
  it("should format date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("июнь");
  });
  it("should format date to AM/PM", () => {
    expect(unitTestingTask("A", testDate)).toBe("вечера");
  });
  it("should format date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("пятница");
  });
});

describe("The language is set to tr", () => {
  beforeAll(() => unitTestingTask.lang("tr", tr));
  it("should format date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("Haziran");
  });
  it("should format date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("Haz");
  });
  it("should format date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("Cuma");
  });
});

describe("The language is set to tt", () => {
  beforeAll(() => unitTestingTask.lang("tt", tt));
  it("should format date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("июнь");
  });
  it("should format date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("июнь");
  });
  it("should format date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("җомга");
  });
});

describe("The language is set to uk", () => {
  beforeAll(() => unitTestingTask.lang("uk", uk));
  it("should format date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("червень");
  });
  it("should format date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("черв");
  });
  it("should format date to AM/PM", () => {
    expect(unitTestingTask("A", testDate)).toBe("вечора");
  });
  it("should format date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("п’ятниця");
  });
});
