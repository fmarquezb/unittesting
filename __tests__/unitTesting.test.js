const unitTestingTask = require("../unitTestingTask.js");

let testDate = new Date("June 17, 2022 17:24:12 GMT-0500");

describe("Date formating english", () => {
  test("formats date to 4 digit year", () => {
    expect(unitTestingTask("YYYY", testDate)).toBe("2022");
  });

  test("formats date to last 2 digit of year", () => {
    expect(unitTestingTask("YY", testDate)).toBe("22");
  });

  test("formats date to full name of month", () => {
    expect(unitTestingTask("MMMM", testDate)).toBe("June");
  });

  test("formats date to short name of month", () => {
    expect(unitTestingTask("MMM", testDate)).toBe("Jun");
  });

  test("formats date to number of month zero-padded", () => {
    expect(unitTestingTask("MM", testDate)).toBe("06");
  });

  test("formats date to number of month in year", () => {
    expect(unitTestingTask("M", testDate)).toBe("6");
  });

  test("formats date to full name of day", () => {
    expect(unitTestingTask("DDD", testDate)).toBe("Friday");
  });

  test("formats date to short name of day", () => {
    expect(unitTestingTask("DD", testDate)).toBe("Fri");
  });

  test("formats date to min name of day", () => {
    expect(unitTestingTask("D", testDate)).toBe("Fr");
  });

  test("formats date to zero-padded number of day in month", () => {
    expect(unitTestingTask("dd", testDate)).toBe("17");
  });
  test("formats date to month number of day in month", () => {
    expect(unitTestingTask("d", testDate)).toBe("17");
  });

  test("formats date to zero-padded hour in 24hr format", () => {
    expect(unitTestingTask("HH", testDate)).toBe("17");
  });

  test("formats date to hour in 24hr format", () => {
    expect(unitTestingTask("H", testDate)).toBe("17");
  });

  test("formats date to zero-padded hour in 12hr format", () => {
    expect(unitTestingTask("hh", testDate)).toBe("05");
  });

  test("formats date to hour in 12hr format", () => {
    expect(unitTestingTask("h", testDate)).toBe("5");
  });

  test("formats date to zero-padded minutes", () => {
    expect(unitTestingTask("mm", testDate)).toBe("24");
  });

  test("formats date to minutes", () => {
    expect(unitTestingTask("m", testDate)).toBe("24");
  });

  test("formats date to zero-padded seconds", () => {
    expect(unitTestingTask("ss", testDate)).toBe("12");
  });

  test("formats date to seconds", () => {
    expect(unitTestingTask("s", testDate)).toBe("12");
  });

  test("formats date to zero-padded miliseconds", () => {
    expect(unitTestingTask("ff", testDate)).toBe("000");
  });
  test("formats date to miliseconds", () => {
    expect(unitTestingTask("f", testDate)).toBe("0");
  });

  test("formats date to AM/PM", () => {
    expect(unitTestingTask("A", testDate)).toBe("PM");
  });

  test("formats date to am/pm", () => {
    expect(unitTestingTask("a", testDate)).toBe("pm");
  });

  test("formats date to time-zone", () => {
    expect(unitTestingTask("ZZ", testDate)).toBe("-0500");
  });

  test("formats date to time-zone extended", () => {
    expect(unitTestingTask("Z", testDate)).toBe("-05:00");
  });

  test("formats date to day month year", () => {
    expect(unitTestingTask("DDDMMMYYYY", testDate)).toBe("FridayJun2022");
  });

  test("formats date to 12 hr format with AM/PM", () => {
    expect(unitTestingTask("hA", testDate)).toBe("5PM");
  });

  test("formats date to 12 hr format with AM/PM", () => {
    expect(unitTestingTask("ISODateTimeTZ", testDate)).toBe(
      "2022-06-17T05:24:12-05:00"
    );
  });

  test("throw error typeerror when receiving number instead of string", () => {
    expect(unitTestingTask("ISOTime", testDate)).toBe("05:24:12");
  });

  test("throw error typeerror when receiving number instead of string", () => {
    expect(() => unitTestingTask(10, testDate)).toThrow(TypeError);
  });

  test("throw error typeerror when non valid date", () => {
    expect(() => unitTestingTask("ZZ", null)).toThrow(TypeError);
  });
});
