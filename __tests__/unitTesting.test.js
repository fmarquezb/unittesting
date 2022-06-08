const unitTestingTask = require("../unitTestingTask.js");

let testDate = new Date("June 17, 2022 17:24:12 GMT-0000");

describe("Timezones", () => {
  it("should always be UTC", () => {
    expect(new Date().getTimezoneOffset()).toBe(0);
  });
});

describe("Date formating english", () => {
  it("should format date to 4 digit year", () => {
    expect(unitTestingTask("YYYY", testDate)).toBe("2022");
  });

  it("should format date to last 2 digit of year", () => {
    expect(unitTestingTask("YY", testDate)).toBe("22");
  });

  it("should format date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("June");
  });

  it("should format date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("Jun");
  });

  it("should format date to number of month zero-padded", () => {
    expect(unitTestingTask("MM", testDate)).toBe("06");
  });

  it("should format date to number of month in year", () => {
    expect(unitTestingTask("M", testDate)).toBe("6");
  });

  it("should format date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("Friday");
  });

  it("should format date to short name of day", () => {
    expect(unitTestingTask("DD", testDate)).toBe("Fri");
  });

  it("should format date to min name of day", () => {
    expect(unitTestingTask("D", testDate)).toBe("Fr");
  });

  it("should format date to zero-padded number of day in month", () => {
    expect(unitTestingTask("dd", testDate)).toBe("17");
  });
  it("should format date to month number of day in month", () => {
    expect(unitTestingTask("d", testDate)).toBe("17");
  });

  it("should format date to zero-padded hour in 24hr format", () => {
    expect(unitTestingTask("HH", testDate)).toBe("17");
  });

  it("should format date to hour in 24hr format", () => {
    expect(unitTestingTask("H", testDate)).toBe("17");
  });

  it("should format date to zero-padded hour in 12hr format", () => {
    expect(unitTestingTask("hh", testDate)).toBe("05");
  });

  it("should format date to hour in 12hr format", () => {
    expect(unitTestingTask("h", testDate)).toBe("5");
  });

  it("should format date to zero-padded minutes", () => {
    expect(unitTestingTask("mm", testDate)).toBe("24");
  });

  it("should format date to minutes", () => {
    expect(unitTestingTask("m", testDate)).toBe("24");
  });

  it("should format date to zero-padded seconds", () => {
    expect(unitTestingTask("ss", testDate)).toBe("12");
  });

  it("should format date to seconds", () => {
    expect(unitTestingTask("s", testDate)).toBe("12");
  });

  it("should format date to zero-padded miliseconds", () => {
    expect(unitTestingTask("ff", testDate)).toBe("000");
  });
  it("should format date to miliseconds", () => {
    expect(unitTestingTask("f", testDate)).toBe("0");
  });

  it("should format date to AM/PM", () => {
    expect(unitTestingTask("A", testDate)).toBe("PM");
  });

  it("should format date to am/pm", () => {
    expect(unitTestingTask("a", testDate)).toBe("pm");
  });

  it("should format date to time-zone", () => {
    expect(unitTestingTask("ZZ", testDate)).toBe("+0000");
  });

  it("should format date to time-zone extended", () => {
    expect(unitTestingTask("Z", testDate)).toBe("+00:00");
  });

  it("should format date to day month year", () => {
    expect(unitTestingTask("DDD MMM YYYY", testDate)).toBe("Friday Jun 2022");
  });

  it("should format date to 12 hr format with AM/PM", () => {
    expect(unitTestingTask("hA", testDate)).toBe("5PM");
  });

  it("should format date to ISODateTimeTZ (YYYY-MM-ddThh:mm:ss)", () => {
    expect(unitTestingTask("ISODateTimeTZ", testDate)).toBe(
      "2022-06-17T05:24:12+00:00"
    );
  });

  it("should format date to ISOTime (hh:mm:ss)", () => {
    expect(unitTestingTask("ISOTime", testDate)).toBe("05:24:12");
  });

  it("should typeerror when receiving number instead of string in format parameter", () => {
    expect(() => unitTestingTask(10, testDate)).toThrow(TypeError);
  });

  it("should throw typeerror when non valid date", () => {
    expect(() => unitTestingTask("ZZ", null)).toThrow(TypeError);
  });
});
