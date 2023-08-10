import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Contact from 'src/components/Pages/Contact/index.js';

const mockStore = configureStore([]);

describe("Contact component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      contact: {
        name: "John Doe",
        email: "johndoe@example.com",
        topic: "Test Topic",
        message: "Test message",
        modal: false,
      },
    });
  });

  it("should render with correct values from store", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Contact />
      </Provider>
    );

    expect(getByTestId("name-input")).toHaveValue("John Doe");
    expect(getByTestId("email-input")).toHaveValue("johndoe@example.com");
    expect(getByTestId("topic-input")).toHaveValue("Test Topic");
    expect(getByTestId("message-input")).toHaveValue("Test message");
    expect(getByTestId("modal")).toHaveTextContent("false");
  });

});
