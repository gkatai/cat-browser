import gridReducer, { getImagesMetadata } from "./grid-slice";
import { loadingStates } from "../../helpers/loading-states";

describe("Grid reducer", () => {
  describe("get images metadata", () => {
    it("should be in loading state when getImagesMetadata is pending", () => {
      const newState = gridReducer(
        { status: loadingStates.idle },
        getImagesMetadata.pending
      );

      expect(newState.status).toEqual(loadingStates.loading);
    });

    it("should be in loaded state when getImagesMetadata is fulfilled", () => {
      const newState = gridReducer(
        { status: loadingStates.loading },
        getImagesMetadata.fulfilled
      );

      expect(newState.status).toEqual(loadingStates.loaded);
    });

    it("should be in failed state when getImagesMetadata is rejected", () => {
      const newState = gridReducer(
        { status: loadingStates.loading },
        getImagesMetadata.rejected
      );

      expect(newState.status).toEqual(loadingStates.failed);
    });
  });
});
