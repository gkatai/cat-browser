import { rest } from "msw";

import { catData } from "./mockData/cats";

const handlers = [
  rest.get(
    "https://api.thecatapi.com/v1/images/search?limit=5",
    (req, res, ctx) => {
      return res(ctx.json(catData));
    }
  ),
];

export { handlers };
