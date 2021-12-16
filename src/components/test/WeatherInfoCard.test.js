import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WeatherInfoCard from "../WeatherInfoCard";

describe("Check Weather-info-card", () => {
  test("renders 'After forecast button click' when button is clicked", () => {
    render(<WeatherInfoCard />);

    const buttonForecastElement = screen.getByRole("button");
    userEvent.click(buttonForecastElement);

    // const afterClick = screen.queryByText("original text", { exact: false });
    // expect(afterClick).not.toBeInTheDocument;
  });
});
