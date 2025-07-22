import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input labelText="labelText" name="name" />);
  const input = screen.getByLabelText("labelText");
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "name");
  expect(input).toHaveAttribute("type", "text");
  
  const label = screen.getByText("labelText");
  expect(label).toBeInTheDocument();
});

test("calls callback on every user input", async () => {
  const user = userEvent.setup();
  const mockOnChange = jest.fn();
  
  render(<Input labelText="Test Input" name="test" onChange={mockOnChange} />);
  const input = screen.getByLabelText("Test Input");
  
  await user.type(input, "hello");
  
  expect(mockOnChange).toHaveBeenCalledTimes(5); // "h", "e", "l", "l", "o"
});
