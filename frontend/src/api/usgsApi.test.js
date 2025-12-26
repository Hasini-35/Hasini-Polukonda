jest.mock("axios", () => ({
  get: jest.fn(),
}));

const axios = require("axios");
const { fetchDailyItems } = require("./usgsApi");

describe("USGS API Unit Tests (API key only)", () => {
  test("API key is defined", () => {
    expect(process.env.REACT_APP_USGS_API_KEY).toBeDefined();
  });

  test("fetchDailyItems returns mocked data", async () => {
    axios.get.mockResolvedValueOnce({
      data: { numberReturned: 2, features: [{ id: 1 }, { id: 2 }] },
    });

    const data = await fetchDailyItems({ limit: 2 });
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(data.numberReturned).toBe(2);
  });

  test("fetchDailyItems uses API key", async () => {
    axios.get.mockResolvedValueOnce({
      data: { numberReturned: 0, features: [] },
    });

    await fetchDailyItems(); // no args, safe with = {}

    expect(axios.get).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        params: expect.objectContaining({
          api_key: process.env.REACT_APP_USGS_API_KEY,
        }),
      })
    );
  });
});
