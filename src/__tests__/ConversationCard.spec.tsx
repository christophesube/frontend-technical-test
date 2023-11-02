import Conversation from "../components/Conversation/Conversation";
import { render } from "@testing-library/react";

describe("Conversation", () => {
  it("renders the component with corrects props", () => {
    const name = "John Doe";
    const timestamp = 1698951125000;
    const { getByText } = render(
      <Conversation name={name} timestamp={timestamp} />
    );

    expect(getByText(name)).toBeInTheDocument();
    expect(getByText("Dernier message : en novembre")).toBeInTheDocument();
  });
});
