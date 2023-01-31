import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "../../../materiRESTRouter/utils/service";

export const getAll = createAsyncThunk("feat/getAllCourses", async () => {
  try {
    const response = await httpService.get("/product");
    return response.data;
  } catch (error) {
    throw error?.response?.data;
  }
});

export const getDetail = createAsyncThunk(
  "feat/getCourse",
  async (productId) => {
    try {
      const response = await httpService.get(`/product/${productId}`);
      return response.data;
    } catch (error) {
      throw error?.response?.data;
    }
  }
);
