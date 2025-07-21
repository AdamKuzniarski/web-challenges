import { greet } from "./greet.js";

test("returns 'Hello Jane!' if called greet('Jane')", () => {
  const result = greet("Jane");
  expect(result).toBe("Hello Jane!");
});

test("returns 'Hello stranger!' if called greet()", () => {
  const result = greet();
  expect(result).toBe("Hello stranger!");
});

test("returns 'Hello coach!' if called greet('Roland')", () => {
  const result = greet("Roland");
  expect(result).toBe("Hello coach!");
});

describe('greet', () => {
  it('should greet with "Hello coach!" if name is "Roland"', () => {
    expect(greet("Roland")).toBe("Hello coach!");
  });

  it('should greet with the given name if it is not "Roland"', () => {
    expect(greet("Anna")).toBe("Hello Anna!");
  });

  it('should use default name "stranger" if no name is provided', () => {
    expect(greet()).toBe("Hello stranger!");
  });

  it('should treat "roland" (lowercase) as a normal name', () => {
    expect(greet("roland")).toBe("Hello roland!");
  });

  it('should handle empty string as name', () => {
    expect(greet("")).toBe("Hello !");
  });
});