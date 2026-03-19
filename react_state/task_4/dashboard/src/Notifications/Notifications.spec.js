import { fireEvent, render, screen } from "@testing-library/react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";

describe("Notifications component", () => {
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ];

  test("always renders the Your notifications title", () => {
    render(<Notifications />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test("does not render drawer content when displayDrawer is false", () => {
    render(<Notifications notifications={notificationsList} displayDrawer={false} />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /close/i })).toBeNull();
    expect(screen.queryByText(/here is the list of notifications/i)).toBeNull();
    expect(screen.queryByRole("list")).toBeNull();
  });

  test("renders drawer content when displayDrawer is true", () => {
    render(<Notifications notifications={notificationsList} displayDrawer={true} />);
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  test("renders empty state when displayDrawer is true and notifications is empty", () => {
    render(<Notifications notifications={[]} displayDrawer={true} />);
    expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
    expect(screen.queryByText(/here is the list of notifications/i)).toBeNull();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  test("logs to console when close button is clicked", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<Notifications notifications={notificationsList} displayDrawer={true} />);

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(consoleSpy).toHaveBeenCalledWith("Close button has been clicked");
    consoleSpy.mockRestore();
  });

  test("calls handleDisplayDrawer when clicking on the menu item", () => {
    const handleDisplayDrawerSpy = jest.fn();

    render(
      <Notifications
        notifications={notificationsList}
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawerSpy}
      />
    );

    fireEvent.click(screen.getByText(/your notifications/i));
    expect(handleDisplayDrawerSpy).toHaveBeenCalledTimes(1);
  });

  test("calls handleHideDrawer when clicking on the close button", () => {
    const handleHideDrawerSpy = jest.fn();

    render(
      <Notifications
        notifications={notificationsList}
        displayDrawer={true}
        handleHideDrawer={handleHideDrawerSpy}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(handleHideDrawerSpy).toHaveBeenCalledTimes(1);
  });
});